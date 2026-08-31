from fastapi.testclient import TestClient


def test_unknown_route_returns_404(
    client: TestClient,
) -> None:
    response = client.get(
        "/api/v1/this-route-does-not-exist"
    )

    assert response.status_code == 404