/*import '../support/commands' 

describe("Acccess the homepage menu of the platform",()=>{
    beforeEach(()=>{
      
        cy.baseurl()
        cy.login() 
        cy.contains("Login").click()
        cy.contains("Home").click()
       

      })

        it("test1-tests accessibility of the clinican app and search for patient",()=>{
        cy.contains("Clinician").click()
        
        cy.get(':nth-child(4) > .ng-pristine').type("Ethyl{enter}")
        cy.get(':nth-child(1) > table > tbody > tr > td.ng-binding').click()
        cy.contains("Cross Border Referral").click()
        cy.get('[onclick="onEncounterEdit(73)"]').click()
        cy.get('#w8_0').check()
        cy.get('#w10').type("Westlands Facility")
        cy.get('#w12').type("Tororo Facility")
        cy.get('#w14').type("Test Facility")
        cy.get('#w24').type("Test Comments")
        cy.get('#w26').type("Test Comments")
        cy.get('#w28').type("Test Health Provider")
        cy.get('#w30').type("Test@gmail.com")
        cy.get('#w32').type("0712345678")
        cy.get('#w34').type("Test Comments")
       cy.get('.submitButton').click()

        })

    })*/

import '../support/commands';

describe("Access the homepage menu of the platform", () => {
  beforeEach(() => {
    cy.baseurl();
    cy.login();
    cy.contains("Login").click();
    cy.contains("Home").click();
  });

  it("test1-tests accessibility of the clinician app and search for a patient", () => {
    cy.contains("Clinician").click();

    // Check if the form is already filled by looking for a specific element within the form
    cy.get(':nth-child(4) > .ng-pristine').type("Jany{enter}")
    cy.get(':nth-child(1) > table > tbody > tr > td.ng-binding').click()
    cy.contains("Cross Border Referral").click();
    cy.get('[onclick="onEncounterEdit(67)"]').click().then(($input) => {
      if ($input.val() !== '') {

        cy.get('#w10').type("Tororo Facility");
        cy.get('#w12').type("Tororo Facility");
        cy.get('select[id="w14"]').focus().select("Other");
        cy.get('#w20').focus().select('Fisherman')
        cy.get('#w22').focus().select('HIV Program')
        cy.get('#w24').type("Test Comments");
        cy.get('#w24').type("Test Comments");
        cy.get('#w26').type("Test Comments");
        cy.get('#w28').type("Test Health Provider");
        cy.get('#w30').type("Test@gmail.com");
        const Phonecontact = () => Cypress._.random(0, 1e8)
        const MobileNumber = Phonecontact();
        cy.get("input[id='w32']").type(`07${MobileNumber}`,'{enter}')
        //cy.get('#w32').type("0712345678");
        cy.get('#w34').type("Test Comments");
        cy.get('.submitButton').click();
      } else {
        // The form is empty, proceed to fill it
       //cy.get(':nth-child(4) > .ng-pristine').type("Ethyl{enter}");
        //cy.get(':nth-child(1) > table > tbody > tr > td.ng-binding').click();
        cy.contains("Cross Border Referral").click();
        // Fill the form with your data
        cy.get('#w10').type("Westlands Facility");
        cy.get('#w12').type("Tororo Facility");
        cy.get('select[id="w14"]').select("Other");
        cy.get('#w20').focus().select('Fisherman')
        cy.get('#w22').focus().select('HIV Program')
        cy.get('#w24').type("Test Comments");
        cy.get('#w26').type("Test Comments");
        cy.get('#w28').type("Test Health Provider");
        cy.get('#w30').type("Test@gmail.com");
        cy.get('#w32').type("0712345678");
        cy.get('#w34').type("Test Comments");
        cy.get('.submitButton').click();
      }
    });
  });
});
