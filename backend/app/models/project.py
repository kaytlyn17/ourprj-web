from sqlalchemy import CheckConstraint, String, Text
from sqlalchemy.dialects.postgresql import ARRAY
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base


class Project(Base):
    __tablename__ = "projects"

    __table_args__ = (
        CheckConstraint(
            "status IN "
            "('in_development', 'active', 'completed', 'archived')",
            name="ck_projects_status",
        ),
    )

    id: Mapped[int] = mapped_column(
        primary_key=True,
    )

    slug: Mapped[str] = mapped_column(
        String(100),
        unique=True,
        index=True,
        nullable=False,
    )

    title: Mapped[str] = mapped_column(
        String(200),
        nullable=False,
    )

    summary: Mapped[str] = mapped_column(
        Text,
        nullable=False,
    )

    description: Mapped[str] = mapped_column(
        Text,
        nullable=False,
    )

    category: Mapped[str] = mapped_column(
        String(100),
        nullable=False,
    )

    status: Mapped[str] = mapped_column(
        String(32),
        nullable=False,
    )

    technologies: Mapped[list[str]] = mapped_column(
        ARRAY(String(100)),
        nullable=False,
    )

    details: Mapped[list[str]] = mapped_column(
        ARRAY(Text),
        nullable=False,
    )