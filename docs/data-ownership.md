# Data Ownership

This document defines the source of truth for each
type of data used by OurPrj Web.

## Projects

Source of truth:

- PostgreSQL
- Exposed through FastAPI

Reason:

Projects are structured data that may later be
created, updated, archived, or managed through an
admin interface.

## Profile

Source of truth:

- Static frontend content

Reason:

Profile information changes rarely and does not
currently require runtime database access.

## Labs

Source of truth:

- MDX / repository content

Reason:

Labs are technical write-ups containing formatted
text, code blocks, commands, images, and diagrams.

## Blog

Source of truth:

- MDX / repository content

Reason:

Blog posts are long-form content and benefit from
Git history and static generation.

## Docs

Source of truth:

- Markdown / MDX

Reason:

Documentation belongs close to the source code and
can be version controlled.

## SOC Architecture

Source of truth:

- Static frontend content / diagrams

Reason:

Architecture diagrams describe the lab design and
do not need live database access.

## SOC Live Metrics and Alerts

Source of truth:

- Wazuh / Suricata / monitoring systems
- Exposed through FastAPI

Possible cache:

- Redis

PostgreSQL should not become the primary source of
truth for live monitoring data.

## Contact

Current behavior:

- Validated by FastAPI
- Not persisted
- Accepted by the contact service

Future:

- Email delivery
- Redis-backed rate limiting

Contact message content should not be unnecessarily
written to application logs.

## Service Status

Source of truth:

- Computed at request time by FastAPI

Examples:

- Application health
- PostgreSQL availability
- Dependency latency