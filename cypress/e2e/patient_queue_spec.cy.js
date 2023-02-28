import '../support/commands' 

describe("Acccess the oncology patient queue platform",()=>{
    beforeEach(()=>{
        cy.base_url()
        cy.login() 
      })
      it.only("test1-tests fucntionality of the patient queue module",()=>{
        cy.get('button[type=submit]').click()
        cy.get(':nth-child(25) > .ke-app > img').click()
        cy.get('[value="all"]').click()
        cy.get('input[name="query"]').type("Last February Patient",{enter:true})
        cy.get(':nth-child(1) > table > tbody > tr > td.ng-binding > strong.ng-binding').click()
        cy.get(':nth-child(1) > .col4 > .tasks > .tasks-list > :nth-child(1) > .tasks-list-mark').click()
        cy.get('#paycatgs > :nth-child(2) > .tasks-list-mark').click()
        cy.get("select[name='visitType']").select("New Patient")
        cy.get("select[name='rooms1']").select("TRIAGE ROOM")
        cy.get('select[name="rooms2"]').select("Oncology triage")
        cy.get('.confirm').click()
        cy.get('#printSlip').click()
        cy.get('.ke-apptoolbar > :nth-child(1) > a').click()
      })
    })