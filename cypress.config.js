const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ee99js',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
