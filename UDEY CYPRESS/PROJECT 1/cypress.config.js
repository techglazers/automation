const { defineConfig } = require("cypress");

module.exports = {
  // Other Cypress configuration options can be added here
  projectId: "mbwcnm",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  {
    "defaultCommandTimeout": 10000 // Set a default timeout of 10 seconds
  }
  
};
