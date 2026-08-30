from typing import Annotated

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.db.session import get_db

from app.schemas.project import (
    ProjectDetailResponse,
    ProjectListResponse,
)
from app.services.projects import (
    get_all_projects,
    get_project_by_slug,
)


router = APIRouter(
    prefix="/projects",
    tags=["Projects"],
)

DatabaseSession = Annotated[
    Session,
    Depends(get_db),
]

@router.get(
    "",
    response_model=ProjectListResponse,
)
async def list_projects(
    db: DatabaseSession,
) -> ProjectListResponse:
    projects = get_all_projects(db)

    return ProjectListResponse(
        data=projects,
        count=len(projects),
    )


@router.get(
    "/{slug}",
    response_model=ProjectDetailResponse,
)
async def read_project(
    slug: str,
    db: DatabaseSession,
) -> ProjectDetailResponse:
    project = get_project_by_slug(
        db,
        slug,
    )

    if project is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Project not found",
        )

    return ProjectDetailResponse(
        data=project,
    )