import '../support/commands' 
import { faker } from '@faker-js/faker';

const firstName = faker.name.firstName();
const middleName = faker.name.middleName();
const familyName = faker.name.lastName();
const emailAddress = familyName.toLowerCase() + firstName.toLowerCase() 


describe("Acccess the homepage menu of the platform",()=>{
    beforeEach(()=>{
      
        cy.base_url()
        cy.login() 
        cy.contains("Login").click()
        //cy.get('.ke-apptoolbar > .ke-toolbar-item > a').click()
        cy.contains("Home").click()


      })
      it.only("test1-tests querying functionality of the cross border module",()=>{
    
        
        cy.contains("Cross Border").click()
        
        cy.get('[value="cross-border"]').click()

        const clinicNo = () => Cypress._.random(0, 1e4);
        const patclinicNo=clinicNo();
        
        cy.get(':nth-child(6) > .ng-pristine').type(`${patclinicNo}`,'{enter}')
        cy.get(':nth-child(8) > .ng-pristine').type(firstName)
        cy.get('[value="female"]').click()
        cy.get('.ke-field-label > .ng-pristine').click()
        cy.wait(500)
        //cy.get('[ng-show="selectMpiQuery"] > .ng-pristine').type(firstName)
        cy.get('select[name="mpi-query"]').select("Cross border MPI")
        cy.get('#local-results').click()
        cy.get('#remote-results').click()
        cy.get("#search-patient").click().wait(3000)
        cy.contains("Create new patient").click()

        const clinicNo1 = () => Cypress._.random(0, 1e4);
        const patclinicNo1=clinicNo1();
        
        //cy.get(':nth-child(6) > .ng-pristine').type(`${patclinicNo1}`,'{enter}')

        cy.get('input[name="patientClinicNumber"]').type(`${patclinicNo1}`,'{enter}')
        
        const patID = () => Cypress._.random(0, 1e4);
        const id1=patID();
        cy.get('input[name="patientClinicNumber"]').type(`${id1}`,'{enter}')

        const natID = () => Cypress._.random(0, 1e8)
        const id=natID();
        cy.get('input[name="nationalIdNumber"]').type(`${id}`,'{enter}').should("be.visible")
        cy.get('input[name="personName.familyName"]').type(familyName)
        cy.get('input[name="personName.middleName"]').type(middleName)
        cy.get('input[name="personName.givenName"]').type(firstName)

        cy.get('#gender-M').check()
        cy.get('#patient-birthdate_date').click().focus()
      
        cy.get('select[class="ui-datepicker-month"]').select("Apr")
        cy.get("select[class='ui-datepicker-year']").select("2000")
        cy.get('table[class="ui-datepicker-calendar"]').find('td').eq(27).click()
        cy.get('select[name="maritalStatus"]').select("Married monogamous",{force:true})
        cy.get("select[name='occupation']").select("Trader",{force:true})
        cy.get('select[name="education"]').select("Primary school education",{force:true})
        cy.get('#select-kenya-option').check()
        const contact = () => Cypress._.random(0, 1e8)

        const  phoneNumber = contact();
        cy.get("input[name='telephoneContact']").type(`07${phoneNumber}`,'{enter}')
        cy.get('input[name="emailAddress"]').type(`${emailAddress}@gmail.com`)
        cy.get('#county').select("Nairobi")
        cy.get('select[name="personAddress.countyDistrict"]').select("Nairobi")
        cy.get('select[id="subCounty"]').select("Starehe")
        cy.get('select[id="ward"]').select("Ngara")
        cy.get('input[name="personAddress.cityVillage"]').type("Ngara")

        cy.get('input[name="nameOfNextOfKin"]').type("James Mwangi")
        cy.get('select[name="nextOfKinRelationship"').select("Father")

        const nextOfKincontact = () => Cypress._.random(0, 1e8)

        const  nextOfKinphoneNumber = nextOfKincontact();
        cy.get("input[name='nextOfKinContact']").type(`07${nextOfKinphoneNumber}`,'{enter}')

        cy.contains('Post to Registry').click()
        cy.get("#createPatientBtn").click()
        cy.contains("Check in for visit").click()
        cy.contains("Submit").click()
        cy.contains("Cross Border Screening").click()

      })
      
})

export default{firstName};