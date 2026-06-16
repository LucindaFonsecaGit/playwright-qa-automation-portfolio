# Playwright QA Automation Portfolio

This repository demonstrates a professional QA automation framework using Playwright and TypeScript.

It is designed as a portfolio project to showcase practical skills in:

- UI test automation
- API testing
- Smoke and regression testing
- Cross-browser testing
- Test reporting
- CI/CD with GitHub Actions
- BDD examples with Gherkin
- QA documentation and test strategy

## Portfolio Goal
The goal of this repository is to demonstrate how I would structure and maintain a QA automation framework in a professional software engineering environment.

## Tech Stack

- Playwright
- TypeScript
- Node.js
- GitHub Actions
- HTML test reports
- JUnit reports

## Project Structure

```text
docs/              QA strategy and test documentation
pages/             Page Object Model classes
fixtures/          Test fixtures and reusable setup
test-data/         Test data files
tests/ui/          UI automation tests
tests/api/         REST API tests
tests/bdd/         BDD/Gherkin examples
tests/integration/ Integration test flows
tests/responsive/  Responsive design tests
tests/accessibility/ Accessibility tests
utils/             Helper functions
```

## API Testing

This repository includes REST API tests using Playwright's `request` fixture and the FakeStore API.

Covered examples:

- GET all products
- GET single product
- GET product categories
- GET products by category
- POST create product
- PUT update product
- DELETE product
- Invalid endpoint validation

These tests validate:

- HTTP status codes
- Response headers
- JSON response structure
- Required fields
- Data consistency
- Positive and negative API behaviour
- Basic response time thresholds

The API layer is structured with:

- reusable API client methods
- reusable assertion helpers
- separated test data
- smoke/regression/negative tags

See [`docs/api-testing-strategy.md`](docs/api-testing-strategy.md) for more details.

## Data-Driven Testing

This repository uses data-driven testing to run the same scenarios with multiple datasets.

Examples include:

- Multiple valid login users
- Multiple invalid login combinations
- Multiple product sorting options
- Multiple cart products
- Multiple checkout customers

Test data is stored separately under:

```text
test-data/ui/
test-data/api/
```

## How to Run Tests
Install dependencies:
```bash
npm install
```

Run all tests:
```bash
npx playwright test
```

Run UI tests:
```bash
npx playwright test tests/ui
```

Run API tests:
```bash
npm run test:api
```

Run smoke tests:
```bash
npm run test:smoke
```

Run regression tests:
```bash
npm run test:regression
```

Run ui tests:

```bash
npm run test:ui
```

Open report:
```bash
npx playwright show-report
```

