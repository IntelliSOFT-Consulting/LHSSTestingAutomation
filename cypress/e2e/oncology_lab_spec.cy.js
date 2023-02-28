
import '../support/commands' 

describe("Acccess the oncology platform",()=>{
    beforeEach(()=>{
        cy.base_url()
        cy.login() 

      })
      it("test1-test functionality of oncology lab ",()=>{
        cy.get('button[type=submit]').click()
        cy.contains("Laboratory").click()
        cy.get('#search-queue-for').type("")
      })

    })