import logging
from time import perf_counter
from uuid import uuid4

from fastapi import FastAPI, Request

from app.core.request_context import (
    reset_request_id,
    set_request_id,
)

logger = logging.getLogger("ourprj.http")


def register_http_middleware(
    app: FastAPI,
) -> None:
    @app.middleware("http")
    async def request_middleware(
        request: Request,
        call_next,
    ):
        request_id = str(uuid4())

        request.state.request_id = request_id

        token = set_request_id(request_id)

        started_at = perf_counter()

        try:
            response = await call_next(request)

            duration_ms = round(
                (perf_counter() - started_at) * 1000,
                2,
            )

            response.headers["X-Request-ID"] = request_id

            logger.info(
                "Request completed",
                extra={
                    "event": ("http_request"),
                    "method": (request.method),
                    "path": (request.url.path),
                    "status_code": (response.status_code),
                    "duration_ms": (duration_ms),
                },
            )

            return response

        finally:
            reset_request_id(token)
