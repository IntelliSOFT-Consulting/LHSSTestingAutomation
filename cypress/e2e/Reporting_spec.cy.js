import '../support/commands' 

describe("Acccess the homepage menu of the platform",()=>{
    beforeEach(()=>{
      
        cy.baseurl()
        cy.login() 
        cy.contains("Login").click()
        cy.contains("Home").click()
       

      })
    it.only("test1-tests querying functionality of the reports module",()=>{
    cy.contains("Reports").click()
    cy.contains("Cross Border Referral Indicator").click().wait(5000)
    cy.contains("View").click()


    })

    })