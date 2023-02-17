import '../support/commands' 

describe("Acccess the oncology platform",()=>{
    beforeEach(()=>{
        cy.base_url()
        cy.login() 
      
       
        
        
      })
      it.only("test1-tests fucntionality of the registration module",()=>{
        cy.get('button[type=submit]').click()
        
        cy.contains("Registration").click()

        cy.get(':nth-child(2) > .ke-menu-item > .ke-icon > div > img').click()
        cy.contains("Create new patient").click()
        cy.contains("Register new Patient").click()

        cy.wait(5000)
        cy.get('#select-kenya-option-nupi-verification').check()
        cy.get('#idType').select("National ID")
        cy.get("#idValue").type("1222659{enter}")
        cy.get('input[name="nationalIdNumber"]').type("1291828").should("be.visible")
        cy.get('input[name="other-identifiers"]').check()
        cy.get('input[name="personName.familyName"]').type("Wednesday")
        cy.get('input[name="personName.givenName"]').type("Test")
        cy.get('input[name="personName.middleName"]').type("Patient")
        cy.get('input[value="M"]').check()
        cy.get('#patient-birthdate_date').type("1992-02-21")
        cy.get('select[name="maritalStatus"]').select("Married monogamous",{force:true})
        cy.get("select[name='occupation']").select("Trader",{force:true})
        cy.get('select[name="education"]').select("Primary school education",{force:true})
        cy.get('#select-kenya-option').check()
        cy.get("input[name='telephoneContact']").type("0712345678")
        cy.get('#county').select("Nairobi")
        cy.get('#subCounty').select("Starehe")
        cy.get('#ward').select("Ngara")
        cy.get('input[name="personAddress.cityVillage"]').type("Ngara")

        cy.get('#post-registrations').click()
        cy.get('#createPatientBtn').click().wait(5000)

        //cy.wait(7000)

      })


})