
import '../support/commands' 

describe("Acccess the LHSS platform",()=>{
    beforeEach(()=>{
        cy.baseurl()
        
      })

      it.only("test1 - tests correct credentials functionality of the login page",()=>{
        cy.login()
        cy.get('button[type=submit]').click()
      })

      it.only("test2 - tests wrong username login credentials functionality of the login page",()=>{

        cy.get("#uname").type("user").should("have.value","Admin")
        cy.get("input[name=pw]").type("Admin123")
        
        cy.get('button[type=submit]').click()
      })
      it.only("test3 - tests wrong password credentials functionality of the login page",()=>{
        cy.get("#uname").type("Admin").should("have.value","Admin")
        cy.get("input[name=pw]").type("User123").should("have.value","Admin123")
        
        cy.get('button[type=submit]').click()
      })
      it.only("test4 - tests empty username credentials functionality of the login page",()=>{
        cy.get("#uname").type("").should("have.value","Admin")
        cy.get("input[name=pw]").type("Admin123").should("have.value","Admin123")
        
        cy.get('button[type=submit]').click()
      })
      it.only("test5 - tests empty password credentials functionality of the login page",()=>{
        cy.get("#uname").type("Admin").should("have.value","Admin")
        cy.get("input[name=pw]").type("").should("have.value","Admin123")
    
        cy.get('button[type=submit]').click()
      })
      it.only("test6 - tests empty specs credentials functionality of the login page",()=>{
        cy.get("#uname").type("").should("have.value","Admin")
        cy.get("input[name=pw]").type("").should("have.value","Admin123")
    
        cy.get('button[type=submit]').click()
      })

})
