
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://653c0826d5d6790f5ec7c664.mockapi.io/api/v1",
    specPattern: "cypress/e2e/**/*.cy.js",
    supportFile: false,
  },
});