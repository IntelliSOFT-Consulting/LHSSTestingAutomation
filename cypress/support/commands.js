Cypress.Commands.add("baseurl",()=>{
    cy.visit("http://kenyaemrdhs2.intellisoftkenya.com/openmrs/login.htm")
})

Cypress.Commands.add('login',()=>{
        cy.get('#uname').type('admin').should("have.value","admin")
        cy.get('input[name="pw"]').type('Admin123').should("have.value","Admin123")
 })
 
 Cypress.on('uncaught:exception', (err, runnable) => {

  return false
})
