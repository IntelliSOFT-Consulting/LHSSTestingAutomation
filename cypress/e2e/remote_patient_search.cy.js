import '../support/commands' 

const firstName = faker.name.firstName();
const middleName = faker.name.middleName();
const familyName = faker.name.lastName();

describe("Acccess the LHSS platform",()=>{
    beforeEach(()=>{
        cy.baseurl()
        cy.login() 
        cy.contains("Login").click()
        cy.contains("Home").click()


      })
      it.only("test1-tests functionality of the remote search by tying a search to a name and gender ",()=>{

         cy.contains("Cross Border").click()
         cy.get('[type="radio"]').first().check().wait(500)
        
         cy.get('input[name="name-query"]').type("Nyanchama");
         cy.get('input[name="gender-query"]').first().check()
         cy.get('input[name="select-mpi"]').check()

         cy.get('select[name="mpi-query"]').focus().select("Cross border MPI")
         cy.get('input[id="remote-results"]').check()
         cy.get('#search-patient').click()
      })
    })

export default{firstName};