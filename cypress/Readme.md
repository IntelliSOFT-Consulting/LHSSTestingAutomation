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
cd LHSSTests

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

.
├── cypress
│   ├── downloads
│   │
|   |   
|   |   
│   ├── e2e
│   │  ├── ambulance // Tests for the ambulance request 
│   │  |
│   │  |    
│   │  |
│   │  ├── Appointments // Tests for all types of appointments(upcoming appointments & Past Appointments)
│   │  |     
│   │  ├── Facilities // Tests for finding available facilities
│   │  | 
│   │  ├── homepage//Test for user homepage
|   |  ├──login //Test for the login page
|   |  ├──login_spec// Tests  for the functionality of the login 
|   |  ├──registration
|   |  └── your_records
│   ├── fixtures
│   │   ├── example.json
|   |   ├── person.jpeg
|   |   └── woman.jpeg
│   ├── Integration // Screenshots (set "screenshot": true in cypress.json)
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


## 1. Install Cypress
click on the registration_spec.js file to run the test. This test should perform a new user registration into the application and perform actions such as chnging the new user's image

## 2. Login
click on the login_spec.js file to run the test. This test should test for the different instances a user can try to log into the application such as using wrong credentials, without inputting some credentials while leaving out others, and negative login tests.

## 3. Faker Library
The names in the files are randomly generated using thefaker.js library and can be installed using 