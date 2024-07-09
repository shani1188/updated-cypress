const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges:false, // not Re-run the cypress on every save in the file
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const file =config.env.configFile || 'development'

  return getConfigurationByFile(file)
    },
    baseUrl: 'http://localhost:4200/',
    viewportWidth: 1920,
    viewportHeight: 1080,
    experimentalStudio: true
   
  },
  env: {
    "username": "cypress.tester@gmail.com",
    "password": "Test1234",
    "apiUrl": "https://api.realworld.io"
  },
  
  "blockHosts": [
    "*fonts.googleapis.com"
  ]
});
const fs=require('fs-extra')
const path= require('path')

function getConfigurationByFile(file){
const pathToConfigure= path.resolve('cypress','config',`${file}.json`)
if(!fs.existsSync(pathToConfigure)){
  return {}
}

return fs.readJSON(pathToConfigure)

}

require('@applitools/eyes-cypress')(module);
