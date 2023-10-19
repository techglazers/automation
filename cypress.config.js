module.exports = {
  projectId: 'mbwcnm',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
  
      
    },
  },
};


const { defineConfig } = require('cypress');
module.exports = defineConfig({
reporter: 'cypress-mochawesome-reporter',
e2e: {
setupNodeEvents(on, config) {
require('cypress-mochawesome-reporter/plugin')(on);
},
},
});

module.exports = {
  projectId: 'mbwcnm',
  e2e: {
    video: true,
    videoCompression: 32,
    fps: 20,
  },
};