# API Testing Strategy

## Purpose

This document explains the API automation approach used in this portfolio repository.

The API tests demonstrate how a QA Engineer can validate REST APIs using Playwright's request fixture, reusable API clients, separated test data, and maintainable assertions.

## Scope

The current API suite covers the JSONPlaceholder API product endpoints.

Covered scenarios:

- Retrieve all posts
- Retrieve a single post
- Retrieve product comments
- Retrieve post by comment
- Create a post
- Update a post
- Delete a post
- Validate invalid endpoint behaviour

## Validation Strategy

The tests validate:

- HTTP status codes
- JSON response headers
- Response body structure
- Required product fields
- Data consistency
- Response time thresholds
- Positive and negative API behaviour

## Architecture

```text
tests/api/                 API test scenarios
utils/api/                 API client and reusable assertions
test-data/api/             API test data and payloads
```

```bash
npm run test:smoke
npm run test:regression
npm run test:api
```