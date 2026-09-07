import logging

from redis import Redis
from redis.exceptions import RedisError

from app.core.config import settings

logger = logging.getLogger(
    "ourprj.rate_limit"
)

redis_client = Redis.from_url(
    settings.redis_url,
    decode_responses=True,
)


def check_contact_rate_limit(
    client_ip: str,
) -> bool:
    key = f"contact:rate:{client_ip}"

    try:
        with redis_client.pipeline(
            transaction=True
        ) as pipe:
            pipe.incr(key)
            pipe.expire(
                key,
                600,
                nx=True,
            )

            count, _ = pipe.execute()

    except RedisError:
        logger.warning(
            "Redis rate limiter unavailable"
        )

        return True

    return count <= 5