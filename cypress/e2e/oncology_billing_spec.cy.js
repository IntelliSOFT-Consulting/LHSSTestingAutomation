
import '../support/commands' 

describe("Acccess the oncology platform",()=>{
    beforeEach(()=>{
        cy.base_url()
        cy.login() 

      })
      it("test1- checks functionality of the billing module",()=>{

        cy.get('button[type=submit]').click()
        cy.get(':nth-child(28) > .ke-app').click().wait(250)
        cy.get(':nth-child(1) > :nth-child(5) > a').click()
        cy.get('.button').click()
        cy.get('#savebill').click()
        cy.get('.formfactor > .button').click()

      })

    })