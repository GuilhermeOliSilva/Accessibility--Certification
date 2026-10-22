const { defineConfig } = require("cypress");
const lambdatestAccessibility = require("lambdatest-cypress-cli/accessibility/plugin");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://ecommerce-playground.lambdatest.io",
    video: false,
    defaultCommandTimeout: 15000,
    pageLoadTimeout: 60000,
    setupNodeEvents(on, config) {
      lambdatestAccessibility(on, config);
      return config;
    },
  },
});
