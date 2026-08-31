import json
import logging
import sys
from datetime import UTC, datetime

from app.core.request_context import (
    get_request_id,
)


class RequestIdFilter(logging.Filter):
    def filter(
        self,
        record: logging.LogRecord,
    ) -> bool:
        if not hasattr(
            record,
            "request_id",
        ):
            record.request_id = get_request_id()

        return True


class JsonFormatter(logging.Formatter):
    def format(
        self,
        record: logging.LogRecord,
    ) -> str:
        payload = {
            "timestamp": datetime.now(UTC).isoformat(),
            "level": record.levelname,
            "logger": record.name,
            "message": record.getMessage(),
            "request_id": getattr(
                record,
                "request_id",
                "-",
            ),
        }

        optional_fields = (
            "event",
            "method",
            "path",
            "status_code",
            "duration_ms",
        )

        for field in optional_fields:
            value = getattr(
                record,
                field,
                None,
            )

            if value is not None:
                payload[field] = value

        if record.exc_info:
            payload["exception"] = self.formatException(record.exc_info)

        return json.dumps(
            payload,
            ensure_ascii=False,
        )


def configure_logging() -> None:
    logger = logging.getLogger("ourprj")

    logger.setLevel(logging.INFO)
    logger.handlers.clear()
    logger.propagate = False

    handler = logging.StreamHandler(sys.stdout)

    handler.addFilter(RequestIdFilter())

    handler.setFormatter(JsonFormatter())

    logger.addHandler(handler)
