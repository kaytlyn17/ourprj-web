from typing import Literal

from pydantic import BaseModel, ConfigDict, Field

PROJECT_SLUG_PATTERN = r"^[a-z0-9]+(?:-[a-z0-9]+)*$"

ProjectStatus = Literal[
    "in_development",
    "active",
    "completed",
    "archived",
]


class ProjectSummary(BaseModel):
    model_config = ConfigDict(
        from_attributes=True,
    )

    id: int
    slug: str = Field(
        min_length=1,
        max_length=100,
        pattern=PROJECT_SLUG_PATTERN,
    )
    title: str
    summary: str
    category: str
    status: ProjectStatus
    technologies: list[str]


class ProjectDetail(ProjectSummary):
    description: str
    details: list[str]


class ProjectListResponse(BaseModel):
    data: list[ProjectSummary]
    count: int


class ProjectDetailResponse(BaseModel):
    data: ProjectDetail
