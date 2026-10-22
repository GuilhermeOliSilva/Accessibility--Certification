// Accessibility Testing 101 - Scenario 3
// WCAG 2.1 AA, Best Practices and Needs Review are configured in lambdatest-config.json

describe("Accessibility - TestMu AI eCommerce Playground - Run Automated Accessibility Tests", () => {
  it("Homepage", () => {
    cy.visit("/index.php?route=common/home");
    cy.get("body").should("be.visible");
    cy.get("#search input[name='search']").should("be.visible");
  });

  it("Login page", () => {
    cy.visit("/index.php?route=account/login");
    cy.get("#input-email").should("be.visible");
    cy.get("#input-password").should("be.visible");
  });

  it("Product detail page", () => {
    cy.visit("/index.php?route=product/product&product_id=106");
    cy.get("h1").should("be.visible");
  });
});
