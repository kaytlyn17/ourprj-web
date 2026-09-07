from fastapi import APIRouter, Request, status

from app.core.exceptions import AppException
from app.schemas.contact import (
    ContactRequest,
    ContactResponse,
    ContactResult,
)
from app.services.contact import (
    process_contact_submission,
)
from app.services.rate_limit import check_contact_rate_limit

router = APIRouter(
    prefix="/contact",
    tags=["Contact"],
)


@router.post(
    "",
    response_model=ContactResponse,
    status_code=status.HTTP_202_ACCEPTED,
)
def submit_contact(
    submission: ContactRequest,
    request: Request,
) -> ContactResponse:
    client_ip = request.headers.get("x-real-ip")

    if not client_ip:
        client_ip = (
            request.client.host
            if request.client
            else "unknown"
        )

    if not check_contact_rate_limit(client_ip):
        raise AppException(
            status_code=429,
            code="RATE_LIMIT_EXCEEDED",
            message="Too many contact submissions",
        )
    process_contact_submission(submission)

    return ContactResponse(data=ContactResult(accepted=True))
