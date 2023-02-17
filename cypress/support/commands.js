Cypress.Commands.add("base_url",()=>{
    cy.visit("https://oncology-openmrs.savannahghi.org/openmrs/kenyaemr/userHome.page?")
})


//Cypress.Commands.add("login",()=>{
   // cy.get("#uname").type("Admin").should("be.visible")

   // cy.get('input[name=pw]').type("Admin123")



    Cypress.Commands.add('login',()=>{
        cy.get('#uname').type('Admin').then((uname) => {
            expect('Admin')
          })
      
          cy.get('input[name="pw"]').type('Admin123').then((pw) => {
            expect("Admin123")
          })
    })
//})