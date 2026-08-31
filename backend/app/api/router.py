from fastapi import APIRouter

from app.api.routes import health, projects
from app.core.config import settings

api_router = APIRouter(
    prefix=settings.api_v1_prefix,
)

api_router.include_router(health.router)
api_router.include_router(projects.router)
