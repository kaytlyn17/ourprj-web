from fastapi import APIRouter, HTTPException, status

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


@router.get(
    "",
    response_model=ProjectListResponse,
)
async def list_projects() -> ProjectListResponse:
    projects = get_all_projects()

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
) -> ProjectDetailResponse:
    project = get_project_by_slug(slug)

    if project is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Project not found",
        )

    return ProjectDetailResponse(
        data=project,
    )