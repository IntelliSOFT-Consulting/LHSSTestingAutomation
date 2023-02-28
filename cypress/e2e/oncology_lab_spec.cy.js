
import '../support/commands' 

describe("Acccess the oncology platform",()=>{
    beforeEach(()=>{
        cy.base_url()
        cy.login() 

      })
      it("test1-test functionality of oncology lab ",()=>{
        cy.get('button[type=submit]').click()
        cy.contains("Laboratory").click()
        cy.get(':nth-child(1) > :nth-child(8) > #action-icons > :nth-child(2) > a > .icon-ok').click()
        cy.get('#accept-form > .dialog-content > .confirm').click()
        cy.get('a > .icon-ok').click()
        cy.get('#accept-form > .dialog-content > .confirm').click()
       
      })

    })