from fastapi import APIRouter, status

from app.schemas.contact import (
    ContactRequest,
    ContactResponse,
    ContactResult,
)
from app.services.contact import (
    process_contact_submission,
)

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
) -> ContactResponse:
    process_contact_submission(submission)

    return ContactResponse(data=ContactResult(accepted=True))
