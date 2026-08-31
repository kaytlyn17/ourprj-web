from fastapi.testclient import TestClient


def test_contact_submission_returns_202(
    client: TestClient,
) -> None:
    response = client.post(
        "/api/v1/contact",
        json={
            "name": "Test User",
            "email": "test@example.com",
            "message": ("This is a valid test message."),
            "website": "",
        },
    )

    assert response.status_code == 202

    assert response.json() == {
        "data": {
            "accepted": True,
        }
    }


def test_contact_invalid_email_returns_422(
    client: TestClient,
) -> None:
    response = client.post(
        "/api/v1/contact",
        json={
            "name": "Test User",
            "email": "invalid-email",
            "message": ("This is a valid test message."),
        },
    )

    assert response.status_code == 422

    body = response.json()

    assert body["error"]["code"] == "VALIDATION_ERROR"


def test_contact_short_message_returns_422(
    client: TestClient,
) -> None:
    response = client.post(
        "/api/v1/contact",
        json={
            "name": "Test User",
            "email": "test@example.com",
            "message": "hello",
        },
    )

    assert response.status_code == 422


def test_contact_honeypot_returns_accepted(
    client: TestClient,
) -> None:
    response = client.post(
        "/api/v1/contact",
        json={
            "name": "Bot",
            "email": "bot@example.com",
            "message": ("This looks like a spam submission."),
            "website": "https://spam.example",
        },
    )

    assert response.status_code == 202
