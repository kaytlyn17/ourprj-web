from typing import Annotated

from fastapi import APIRouter, Depends, Path, status
from sqlalchemy.orm import Session

from app.core.exceptions import AppException
from app.db.session import get_db
from app.schemas.project import (
    PROJECT_SLUG_PATTERN,
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

ProjectSlug = Annotated[
    str,
    Path(
        min_length=1,
        max_length=100,
        pattern=PROJECT_SLUG_PATTERN,
    ),
]


@router.get(
    "",
    response_model=ProjectListResponse,
)
def list_projects(
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
def read_project(
    slug: ProjectSlug,
    db: DatabaseSession,
) -> ProjectDetailResponse:
    project = get_project_by_slug(
        db,
        slug,
    )

    if project is None:
        raise AppException(
            status_code=status.HTTP_404_NOT_FOUND,
            code="PROJECT_NOT_FOUND",
            message="Project not found",
        )

    return ProjectDetailResponse(
        data=project,
    )
