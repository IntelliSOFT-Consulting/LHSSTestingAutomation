import '../support/commands' 
//import './new_user_registration_spec.cy'
import { faker } from '@faker-js/faker';

const firstName = faker.name.firstName();

describe("Acccess the LHSS platform",()=>{
    beforeEach(()=>{
        cy.baseurl()
        cy.login() 
        cy.contains("Login").click()
      
        cy.contains("Home").click()


      })
      it("test1-tests functionality of the local search bar by name  in the CB Module",()=>{
        
         cy.contains("Cross Border").click()
         cy.get(':nth-child(8) > .ng-pristine').type(firstName)
         cy.get('#local-results').click()
         cy.get('#search-patient').click()

      
      })
      it.only("test2-tests functionality of the local search bar by ID in the CB Module",()=>{

        const PatientID= () => Cypress._.random(0, 1e4)

        const  patientID = PatientID();
        
         cy.contains("Cross Border").click()
         cy.get(':nth-child(6) > .ng-pristine').type(patientID)
         cy.get('#local-results').click()

         cy.get('#search-patient').click()

      
      })
 //export default {firstName};
      
    })

export default {firstName};
