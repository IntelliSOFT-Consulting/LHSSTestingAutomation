
import '../support/commands' 

describe("Acccess the oncology platform",()=>{
    beforeEach(()=>{
        cy.base_url()
        cy.login() 

      })
      it.only("test1 - tests the functionality of the Oncology clinic module",()=>{
        cy.get('button[type=submit]').click()
        cy.contains("Oncology Clinic").click()
        cy.get('select[id="queue-choice"]').select("Oncology Clinic")
        cy.get('.even > :nth-child(2)').click({enter:true})

        cy.contains("Clinical Notes").click()
        cy.get('.focused > span').click()
        //cy.get('input[value="1065"]')//.click()
        cy.get('.no-confirmation.focused > :nth-child(2) > .col12 > :nth-child(2) > :nth-child(1) > input').check()
        cy.get('select[name="degree-of-relation"]').select("Sibling")
        cy.get('.no-confirmation.focused > :nth-child(3) > .col5 > #age-of-diagnosis').type("45")
        cy.get('select[name="cancer-type"]').select("Throat Cancer")
        cy.get('#formBreadcrumb > :nth-child(7) > :nth-child(1)').click()
        //cy.get('input[name="symptom"]').type("Pain",{shift:true})
        cy.get('input[name="symptom"]').type("Pain").check("Pain behind the eyes",{shiftKey: true})
      })




    })