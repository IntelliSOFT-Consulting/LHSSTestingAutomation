
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
        cy.get('.odd > :nth-child(2)').click({enter:true})
        cy.wait(500)
        cy.get('#temperature-field').type("36")
        cy.get('#systolic-bp-field').type("127")
        cy.get('#diastolic-bp-field').type("77")
        cy.get('#resp-rate-field').type("66")
        cy.get('#pulse-rate-field').type("71")
        cy.get('#oxygenSaturation-field').type("84")
        cy.get('#weight-field').type("60")
        cy.get('#height-field').type("166")
        cy.get('#muac-field').type("27")
        cy.get('#chest-circum-field').type("45")
        cy.get('#abdominal-circum-field').type("60")
        cy.get('select[name="roomToVisit"]').select("Oncology Clinic")
        cy.contains("FINISH").click()

    })

    })