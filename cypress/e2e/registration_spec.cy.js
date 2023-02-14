import '../support/commands' 

describe("Acccess the oncology platform",()=>{
    beforeEach(()=>{
        cy.base_url()
        cy.login()
        
        
      })
      it("test1-tests fucntionality of the registration module",()=>{
        cy.get('button[type=submit]').click()
        cy.contains('Registration').click()

      })


    })