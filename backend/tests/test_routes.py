from fastapi.testclient import TestClient


def test_unknown_route_returns_standard_404(
    client: TestClient,
) -> None:
    response = client.get("/api/v1/this-route-does-not-exist")

    assert response.status_code == 404

    assert response.json() == {
        "error": {
            "code": "NOT_FOUND",
            "message": "Not Found",
        }
    }


def test_invalid_project_slug_returns_422(
    client: TestClient,
) -> None:
    response = client.get("/api/v1/projects/INVALID_SLUG")

    assert response.status_code == 422

    body = response.json()

    assert body["error"]["code"] == ("VALIDATION_ERROR")

    assert body["error"]["message"] == ("Request validation failed")

    assert body["error"]["details"]
