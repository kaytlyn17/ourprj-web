import logging

from app.schemas.contact import ContactRequest

logger = logging.getLogger(__name__)


def process_contact_submission(
    submission: ContactRequest,
) -> None:
    if submission.website.strip():
        logger.info("Discarded contact submission because honeypot was filled")
        return

    logger.info("Accepted contact submission")

    # Email delivery will be added later.
