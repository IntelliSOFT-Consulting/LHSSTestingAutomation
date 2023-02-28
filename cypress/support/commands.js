Cypress.Commands.add("base_url",()=>{
    cy.visit("https://oncology-openmrs.savannahghi.org/openmrs/kenyaemr/userHome.page?")
})

Cypress.Commands.add('login',()=>{
        cy.get('#uname').type('Admin').should("have.value","Admin")
        cy.get('input[name="pw"]').type('Admin123').should("have.value","Admin123")
 })