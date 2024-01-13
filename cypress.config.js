const { defineConfig } = require('cypress')

module.exports = defineConfig({

  viewportHeight: 1080,
  viewportWidth: 1920,
  video:false,
  e2e: {

    baseUrl : 'http://localhost:4200', // running angular application on localhost:4200 , start it using "npm start"
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}', // using spec file pattern in the project
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
