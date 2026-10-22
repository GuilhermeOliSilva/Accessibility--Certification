# Accessibility Testing 101 - Cypress + TestMu AI

Automated WCAG 2.1 AA accessibility tests for the
[TestMu AI eCommerce Playground](https://ecommerce-playground.lambdatest.io/).

## Pages covered
- Homepage
- Login page
- Product detail page (product_id=40)

## Capabilities (lambdatest-config.json > run_settings)
| Capability | Value |
|---|---|
| accessibility | true |
| accessibility.wcagVersion | wcag21aa |
| accessibility.bestPractice | true |
| accessibility.needsReview | true |

## How to run
```bash
npm install

# Windows (PowerShell)
$env:LT_USERNAME="<your username>"
$env:LT_ACCESS_KEY="<your access key>"

# Linux / macOS
export LT_USERNAME="<your username>"
export LT_ACCESS_KEY="<your access key>"

npm run test:accessibility
```
