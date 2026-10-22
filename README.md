#Reports IDs
Scenario 1 - LAT-LM2X38194K39SE4LIZB6R
Scenario 2 - LAT-J7YAW0LP6A65W1WAZ3SQS
Scenario 3 - DA-WIN-3138015-1792679392439PMF (When I ran the code, I expected the automation to go to "Automation Reports," but it went to the regular "Automation" section instead.)
Scenario 4 - SCH_F55AYVPQ3UGRHZPNA4NRQ


#---------------------------------------------------------------------------------
# Accessibility Testing 101 - Scenario 3

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
