import '../support/commands' 

describe("Acccess the homepage menu of the platform",()=>{
    beforeEach(()=>{
      
        cy.baseurl()
        cy.login() 
        cy.contains("Login").click()
        cy.contains("Home").click()
       

      })

        it("test1-tests accessibility of the clinican app and search for patient",()=>{
        cy.contains("Clinician").click()
        cy.get(':nth-child(4) > .ng-pristine').type("test{enter}")
        cy.get(':nth-child(1) > table > tbody > tr > td.ng-binding').click()
        cy.contains("Cross Border Referral").click()
        cy.get('[onclick="onEncounterEdit(73)"]').click()
        cy.get('#w8_0').check()
        cy.get('#w10').type("Test Facility")
        cy.get('#w14').type("Test Facility")
        cy.get('#w24').type("Test Comments")
        cy.get('#w26').type("Test Comments")
        cy.get('#w28').type("Test Health Provider")
        cy.get('#w30').type("Test@gmail.com")
        cy.get('#w32').type("0712345678")
        cy.get('#w34').type("Test Comments")
       cy.get('.submitButton').click()

        })

    })