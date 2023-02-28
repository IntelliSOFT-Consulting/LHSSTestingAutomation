
import '../support/commands' 

describe("Acccess the oncology platform",()=>{
    beforeEach(()=>{
        cy.base_url()
        cy.login() 

      })
      it("test1- checks functionality of the radiology module",()=>{

        cy.get('button[type=submit]').click()
        //cy.get(':nth-child(29) > .ke-app').click()
        cy.contains("Radiology").click()

      })


    })

