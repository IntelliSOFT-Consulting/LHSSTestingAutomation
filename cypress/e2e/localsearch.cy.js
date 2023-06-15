import '../support/commands' 
//import './new_user_registration_spec.cy'
describe("Acccess the LHSS platform",()=>{
    beforeEach(()=>{
        cy.base_url()
        cy.login() 
        cy.contains("Login").click()
      
        cy.contains("Home").click()


      })
      it.only("test1-tests functionality of the search bar in the registration tab",()=>{
        
         cy.contains("Cross Border").click()
         cy.get('#local-results').click()
       /* cy.get(':nth-child(2) > .ke-menu-item > .ke-icon > div > img').click()*/
      })

      
    })

  export default{firstName};