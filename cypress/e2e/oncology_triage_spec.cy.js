
import '../support/commands' 

describe("Acccess the oncology platform",()=>{
    beforeEach(()=>{
        cy.base_url()
        cy.login() 

      })
      it("test1 - tests for functionality of the oncology triage module",()=>{
        cy.get('button[type=submit]').click()
        cy.get(':nth-child(26) > .ke-app').click()
        cy.get('select[id="queue-choice"]').select("Oncology triage")
        cy.get('.odd > :nth-child(1)').click({force:true})
        cy.wait(500)
        //cy.get('tbody').click({force:true})
    })

    })