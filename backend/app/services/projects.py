from sqlalchemy import select
from sqlalchemy.orm import Session

from app.models.project import Project


def get_all_projects(
    db: Session,
) -> list[Project]:
    statement = select(Project).order_by(Project.id)

    return list(db.scalars(statement).all())


def get_project_by_slug(
    db: Session,
    slug: str,
) -> Project | None:
    statement = select(Project).where(Project.slug == slug)

    return db.scalar(statement)
