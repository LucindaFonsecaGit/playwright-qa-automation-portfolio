# Playwright QA Automation Portfolio

A professional QA automation framework built with Playwright and TypeScript.

This repository demonstrates how I would structure an automation framework for a modern web application, including UI automation, API testing, responsive testing, data-driven testing, CI/CD integration, and maintainable Page Object Model architecture.

## Features

- UI Automation (Playwright)
- REST API Testing
- Page Object Model
- Data-Driven Testing
- Cross-Browser Testing
- Responsive Testing
- Smoke Testing
- Regression Testing
- GitHub Actions CI/CD
- HTML Reporting
- BDD examples with Gherkin
- Reusable API Client
- Reusable Assertion Helpers
- QA Documentation

## Tech Stack

| Technology     | Purpose             |
| -------------- | ------------------- |
| Playwright     | UI & API Automation |
| TypeScript     | Test implementation |
| Node.js        | Runtime             |
| GitHub Actions | CI/CD               |
| Cucumber       | BDD examples        |
| HTML Reports   | Test reporting      |

## Repository Structure
```text
docs/
pages/
test-data/
tests/
api/
bdd/
responsive/
ui/
utils/
api/
fixtures/
```
## Test Architecture
```text
Test
↓
Page Object
↓
Reusable Helpers
↓
Playwright
↓
Application
```
For the API Layer
```text
API Test
      ↓
API Client
      ↓
Assertion Helpers
      ↓
Public REST API
```

## Running The Project

| Command                 | Description              |
| ----------------------- | ------------------------ |
| npm test                | Run all Playwright tests |
| npm run test:ui         | UI tests                 |
| npm run test:api        | API tests                |
| npm run test:responsive | Responsive tests         |
| npm run test:smoke      | Smoke suite              |
| npm run test:regression | Regression suite         |
| npm run report          | Open HTML report         |


## Continuous Integration

The framework is automatically executed using GitHub Actions.

Pipeline includes:

- Install dependencies
- Install Playwright browsers
- Execute all tests
- Publish HTML report

## Documentation

- API Testing Strategy[api-testing-strategy.md](docs/api-testing-strategy.md)
- Cross-Browser Testing Strategy[cross-browser-testing.md](docs/cross-browser-testing.md)


## Future Improvements

- Accessibility testing
- Visual regression testing
- Docker execution
- Allure reporting
- Contract testing
- Performance testing
- BDD Strategy doc
- Regression Strategy doc
- Test Strategy doc
