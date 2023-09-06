import '../support/commands' 
//import './new_user_registration_spec.cy'
describe("Acccess the LHSS platform",()=>{
    beforeEach(()=>{
        cy.base_url()
        cy.login() 
        cy.contains("Login").click()
        //cy.get('.ke-apptoolbar > .ke-toolbar-item > a').click()
        cy.contains("Home").click()


      })
     // it.only("test1-tests functionality of the name search bar in the search page",()=>{
        
       // cy.contains("Cross Border").click()

       // cy.get(':nth-child(2) > .ke-menu-item > .ke-icon > div > img').click()

        //cy.get('input[name="name-query"]').type(firstName)

      // cy.get('input[name="cb-id-query"]').type('X-061982-M-160520-160114-101508')
     // })
      it.only("test2-tests functionality of the local search bar by ID in the CB Module",()=>{

         cy.contains("Cross Border").click()
         //cy.get(':nth-child(6) > .ng-pristine').type(patientID)
         //cy.get('#local-results').click()
         cy.get('[type="radio"]').first().check().wait(500)
        
         cy.get('input[name="name-query"]').type("Nyanchama");
         //cy.get('#search-patient').click()
         cy.get('#search-patient').click()

      
      })
    })

export default {firstName};