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
      it.only("test1-tests functionality of the local search bar by ID in the CB Module",()=>{

        const PatientClinicNumber= () => Cypress._.random(0, 1e4)

        const  patientClinID = PatientClinicNumber();
        
         cy.contains("Cross Border").click()
         cy.get(':nth-child(6) > .ng-pristine').type(patientClinID)
         cy.get('#local-results').click()

         cy.get('#search-patient').click()

      
      })
 
      it.only("test2-tests functionality of the remote search by tying a search to a name and gender ",()=>{

         cy.contains("Cross Border").click()
         cy.get('[type="radio"]').first().check().wait(500)
        
         cy.get('input[name="name-query"]').type("Nyanchama");
         cy.get('input[name="gender-query"]').first().check()
         cy.get('#local-results').click()

         cy.get('#search-patient').click()
      })
      
    })

export default {firstName};
