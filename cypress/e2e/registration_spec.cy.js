import '../support/commands' 

describe("Acccess the oncology platform",()=>{
    beforeEach(()=>{
        cy.base_url()
        
        
        
      })
      it.only("test1-tests fucntionality of the registration module",()=>{
        cy.get("#uname").type("Admin").should("have.value","Admin")
        cy.get("input[name=pw]").type("Admin123")
        
        cy.get('button[type=submit]').click()
        cy.contains("Registration").click()

        cy.get(':nth-child(2) > .ke-menu-item > .ke-icon > div > img').click()
        cy.contains("Create new patient").click()
        cy.get('[style="width: 50%; text-align: left; vertical-align: middle"] > button > img').click()
        cy.get('#nupi-verification-country').select('Kenya')
        cy.get('#idType').select("National ID")
        cy.get("#idValue").type("12367819{enter}")
        cy.get('#fr8484').type("12367819").should("be.visible")
        cy.get('#fr6003').type("Test")
        cy.get('#fr2181').type("Tuesday")
        cy.get('#fr4247').type("User")
        cy.get('#gender-M').check()
        cy.get('#patient-birthdate_date').click().type("1992-02-23")
        cy.get('#fr1276').click().select("Married monogamous")
        cy.get('#fr6808').click().select("Driver")
        cy.get('#fr1471').click().select("None")
        cy.get('#fr5792-false').check()
        cy.get('#select-kenya-option').check()

        cy.get('#fr7754').type("0791237824")
        cy.get('#county').select("Nairobi")
        cy.get('#subCounty').select("Starehe")
        cy.get('#ward').select("Ngara")
        cy.get('#fr9461').type("Ngara")

        cy.get('#post-registrations').click()
        cy.get('#createPatientBtn').click()

      })


})