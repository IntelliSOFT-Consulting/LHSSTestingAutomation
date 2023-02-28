
import '../support/commands' 

describe("Acccess the oncology platform",()=>{
    beforeEach(()=>{
        cy.base_url()
        cy.login() 

      })
      it("test1-tests usability of the tretament program module",()=>{
        cy.get('button[type=submit]').click()
        cy.contains("Treatment Program").click()
      })

    })