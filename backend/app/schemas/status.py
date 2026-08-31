from typing import Literal

from pydantic import BaseModel


class DependencyStatus(BaseModel):
    status: Literal[
        "ok",
        "error",
    ]
    latency_ms: float | None = None


class StatusResponse(BaseModel):
    status: Literal[
        "ok",
        "degraded",
    ]
    service: str
    version: str
    database: DependencyStatus
