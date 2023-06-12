This repo contains tests written in Cypress.

The tests are heavily commented to ease you into the Cypress API.

## Help + Testing
The steps below will take you all the way through Cypress. It is assumed you have nothing installed except for node + git.

If you get stuck, here is more help:

[Gitter Channel](https://app.gitter.im/#/room/#cypress-io_cypress:gitter.im)
[Cypress Docs](https://docs.cypress.io/guides/overview/why-cypress)
[Cypress CLI Tool Docs](https://github.com/cypress-io/cypress-cli)
## 1. Install Cypress
Follow [these](https://docs.cypress.io/guides/getting-started/installing-cypress) instructions to install Cypress. 
(These specific tests have been run on cypress version @12.4.0)

Run this command to install the specific version needed for this project.

`npm cypress install@12.4.0`



## cd into the cloned repo
cd LHSSTestingAutomation

## install the node_modules
npm install

## start the local webserver
npx cypress open / cypress open
The npm cypress start script will spawn a new cypress tab which hosts the test directories that can then be run on your browser. Alternatively, you can add new scripts from the  Add Project tab



## Run the tests
The tests are located in the cypress/e2e folder. The tests are grouped into files based on the functionality they are testing. The tests are commented to explain what they are testing and the files arranged alphabetically.

To run each test, access the cypress window that pops up when the ``` npx cypress open ``` command is typed and ran in the terminal.
Click on the test folder and then click on the specific test you want to run. Select the type of test you want to conduct from the provided options (E2E or Component) .Select the browser on which you want to conduct your test and then select the 'Start E2E Testing in browsername' button. The test will then run on your browser.

```

NB: For each test, the site will be accessed and the user will be logged in. 
This is done to ensure that the tests are independent of each other. 
This means that the tests can be run in any order and they will still pass.
For inter-connected processes from different modules, the previous module has to be run before the dependent module is run.
```



## File structure

.LHSSTestingAutomation
├── cypress
│   ├── downloads
│   │
|   |   
|   |   
│   ├── e2e
│   │  ├── crossborder_registration.cy.js
│   │  |
│   │  |    
│   │  |
│   │  ├── LOcalsearch.cy.js
│   │  |     
│   │  |
│   │  | 
│   │  |
|   |  ├──login_page.cy.js
|   |  |
|   |  |
|   |  └── new_user_registrationn.cy.js
│   ├── fixtures
│   │   |
|   |   |
|   |   └── example.json
│   |
│   └──  support
│        ├── commands.js // User Custom commands for Cypress
|        |
│        └── e2e.js
│
│
|
├── cypress.config.js // Cypress configuration file
|
└── Readme.md //Readme file
```
## Tessts
```

## 1. Login
click on the login_page.cy.js file to run the test.This test should test for the different instances a user can try to log into the application such as using wrong credentials, without inputting some credentials while leaving out others, and negative login tests

## 2. Local search
click on the localsearch.cy.js file to run this test. This test is used to performa a local search from the registration module.

## 3. New user Regegistration
Click on the new_user_registtration.cy.js file to run this test. It enables a new user creation from the normal registration module and a subsequent filling of the screening form.

## 4. Cross border module
Tests on this module can be run by clicking on the crossborder_registration. It tests the functionality of the components present on the cross border module such as the advanced search, radio buttons, checkboxes, and the search icons before registering that searched patient.

## 5. Faker Library
The names in the files are randomly generated using the faker.js library and can be installed using npm install @faker-js/faker --save-dev
