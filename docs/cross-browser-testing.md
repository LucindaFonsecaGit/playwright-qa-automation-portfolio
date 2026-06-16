# Cross-Browser and Responsive Testing

## Purpose

This repository includes cross-browser and responsive testing to validate that key user journeys behave consistently across different browsers and devices.

## Browser Coverage

The Playwright configuration includes:

- Chromium
- Firefox
- WebKit
- Mobile Chrome
- Mobile Safari

## Responsive Coverage

Responsive tests validate that critical UI elements remain visible and usable on smaller viewports.

Current examples include:

- Login page visibility across devices
- Cart accessibility on mobile viewport

## Execution

Run all responsive tests:

```bash
npm run test:responsive
```

Run browser-specific tests:
```bash
npm run test:chromium
```

```bash
npm run test:firefox
```

```bash
npm run test:webkit
```

```bash
npm run test:mobile
```