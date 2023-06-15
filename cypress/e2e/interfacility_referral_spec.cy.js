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

        })

    })