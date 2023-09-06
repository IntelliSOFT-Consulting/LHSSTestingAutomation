Cypress.Commands.add("baseurl",()=>{
    cy.visit("http://kenyaemrdhs2.intellisoftkenya.com:8080/openmrs/login.htm")

   //cy.visit("http://41.89.94.100:8080/openmrs/patientdashboardapp/main.page?patientId=24297&opdId=1000024&queueId=44641&")
})

Cypress.Commands.add('login',()=>{
        cy.get('#uname').type('admin').should("have.value","admin")
        cy.get('input[name="pw"]').type('Admin123').should("have.value","Admin123")
 })
 
 Cypress.on('uncaught:exception', (err, runnable) => {

  return false
})
