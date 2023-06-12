import '../support/commands' 
import { faker } from '@faker-js/faker';

const firstName = faker.name.firstName();
const middleName = faker.name.middleName();
const familyName = faker.name.lastName();
const emailAddress = familyName.toLowerCase() + firstName.toLowerCase() 
/*const nextofkinfirstname = faker.name.firstname();
const nextofkinlastname = faker.name.nlastname();
const nextOfKinName = nextofkinfirstname + ' ' + nextofkinlastname*/


describe("Acccess the oncology platform",()=>{
    beforeEach(()=>{
      
        cy.base_url()
        cy.login() 
        cy.contains("Login").click()
        //cy.get('.ke-apptoolbar > .ke-toolbar-item > a').click()
        cy.contains("Home").click()


      })
      it.only("test1-tests fucntionality of the registration module",()=>{
        //cy.get('button[type=submit]').click()
        
        cy.contains("Registration").click()

        cy.get(':nth-child(2) > .ke-menu-item > .ke-icon > div > img').click()

        cy.contains("Create new patient").click()
        cy.contains("Register new Patient").click()

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
        cy.get('#patient-birthdate_date').type("20-Mar-1992")
        cy.get('select[name="maritalStatus"]').select("Married monogamous",{force:true})
        cy.get("select[name='occupation']").select("Trader",{force:true})
        cy.get('select[name="education"]').select("Primary school education",{force:true})
        //cy.get('#select-kenya-option').check()
        
        const contact = () => Cypress._.random(0, 1e8)

        const  phoneNumber = contact();
        cy.get("input[name='telephoneContact']").type(`07${phoneNumber}`,'{enter}')
        cy.get('input[name="emailAddress"]').type(`${emailAddress}@gmail.com`)
        //cy.get('#county').select("Nairobi")
        cy.get('select[name="personAddress.countyDistrict"]').select("Nairobi")
        cy.get('input[name="personAddress.stateProvince"]').type("Starehe")
        cy.get('input[name="personAddress.cityVillage"]').type("Ngara")
        cy.get('input[name="personAddress.address4"]').type("Ngara")
        cy.get('input[name="personAddress.address5"]').type("Ngara")
        cy.get('input[name="personAddress.address6"]').type("Ngara")
        cy.get('input[name="personAddress.address2"]').type("Ngara Shopping Plaza")
        cy.get('input[name="nearestHealthFacility"]').type("Mathari Teaching and Referral")
        cy.get('input[name="nameOfNextOfKin"]').type("James Mwangi")
        cy.get('select[name="nextOfKinRelationship"').select("Father")

        const nextOfKincontact = () => Cypress._.random(0, 1e8)

        const  nextOfKinphoneNumber = nextOfKincontact();
        cy.get("input[name='nextOfKinContact']").type(`07${nextOfKinphoneNumber}`,'{enter}')
        cy.get('.ke-panel-footer > button').click()
        cy.contains("Check in for visit").click()
        cy.contains("Submit").click()

        cy.contains("Mobility Screening form").click()
      })
})

export default{firstName};