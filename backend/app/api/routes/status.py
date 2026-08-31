from time import perf_counter

from fastapi import APIRouter, status
from fastapi.responses import JSONResponse
from sqlalchemy import text
from sqlalchemy.exc import SQLAlchemyError

from app.core.config import settings
from app.db.session import engine
from app.schemas.status import (
    DependencyStatus,
    StatusResponse,
)

router = APIRouter(
    prefix="/status",
    tags=["Status"],
)


@router.get(
    "",
    response_model=StatusResponse,
    responses={
        status.HTTP_503_SERVICE_UNAVAILABLE: {
            "model": StatusResponse,
        },
    },
)
def status_check() -> StatusResponse | JSONResponse:
    started_at = perf_counter()

    try:
        with engine.connect() as connection:
            connection.execute(text("SELECT 1"))

    except SQLAlchemyError:
        latency_ms = round(
            (perf_counter() - started_at) * 1000,
            2,
        )

        response = StatusResponse(
            status="degraded",
            service=settings.app_name,
            version=settings.app_version,
            database=DependencyStatus(
                status="error",
                latency_ms=latency_ms,
            ),
        )

        return JSONResponse(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            content=response.model_dump(),
        )

    latency_ms = round(
        (perf_counter() - started_at) * 1000,
        2,
    )

    return StatusResponse(
        status="ok",
        service=settings.app_name,
        version=settings.app_version,
        database=DependencyStatus(
            status="ok",
            latency_ms=latency_ms,
        ),
    )
