const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', //for html reports
  reporterOptions: {
    reportPageTitle: 'ServRest Report',
    embeddedScreenshots: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      screenshotOnRunFailure=true;
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    defaultBrowser: 'chrome',
    viewportWidth: 1280,
    viewportHeight: 768,
    waitForAnimations: true,
    defaultCommandTimeout: 30000,
    pageLoadTimeout: 30000,
    requestTimeout: 60000,
    responseTimeout: 60000,
    video: true,
    env: {
      requestMode: true,
    },

  },
})