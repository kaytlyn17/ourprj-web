from typing import Literal

from pydantic import (
    BaseModel,
    ConfigDict,
    EmailStr,
    Field,
    field_validator,
)


class ContactRequest(BaseModel):
    model_config = ConfigDict(
        extra="forbid",
    )

    name: str = Field(
        min_length=2,
        max_length=100,
    )

    email: EmailStr

    message: str = Field(
        min_length=10,
        max_length=5000,
    )

    website: str = Field(
        default="",
        max_length=200,
    )

    @field_validator(
        "name",
        "message",
    )
    @classmethod
    def strip_text(
        cls,
        value: str,
    ) -> str:
        value = value.strip()

        if not value:
            raise ValueError("must not be blank")

        return value


class ContactResult(BaseModel):
    accepted: Literal[True]


class ContactResponse(BaseModel):
    data: ContactResult
