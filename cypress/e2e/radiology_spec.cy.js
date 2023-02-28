
import '../support/commands' 

describe("Acccess the oncology platform",()=>{
    beforeEach(()=>{
        cy.base_url()
        cy.login() 

      })
      it("test1- checks functionality of the radiology module",()=>{

        cy.get('button[type=submit]').click()
        cy.contains("Radiology").click()
        //cy.get('.odd > :nth-child(8) > #action-icons > :nth-child(2) > .accept-link > .icon-ok').click()
        cy.get('.even > :nth-child(8) > #action-icons > :nth-child(3) > .reschedule-link > .icon-repeat').click()
        cy.get('#reschedule-date-display').type("11-Apr-2023")

      })


    })

