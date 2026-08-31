from uuid import UUID

from fastapi.testclient import TestClient


def test_response_contains_request_id(
    client: TestClient,
) -> None:
    response = client.get("/api/v1/health")

    request_id = response.headers["x-request-id"]

    UUID(request_id)
