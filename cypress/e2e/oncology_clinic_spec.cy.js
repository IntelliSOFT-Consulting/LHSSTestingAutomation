
import '../support/commands' 

describe("Acccess the oncology platform",()=>{
    beforeEach(()=>{
        cy.base_url()
        cy.login() 

      })
      it.only("test1 - tests the functionality of the Oncology clinic module",()=>{
        cy.get('button[type=submit]').click()
        cy.contains("Oncology Clinic").click()
        cy.get('select[id="queue-choice"]').select("Oncology Clinic")
        cy.get('.odd > :nth-child(2)').click({enter:true})

        cy.contains("Clinical Notes").click()
        cy.get('.focused > span').click()
        cy.get('.no-confirmation.focused > :nth-child(2) > .col12 > :nth-child(2) > :nth-child(1) > input').check()
        cy.get('select[name="degree-of-relation"]').select("Sibling")
        cy.get('.no-confirmation.focused > :nth-child(3) > .col5 > #age-of-diagnosis').type("45")
        cy.get('select[name="cancer-type"]').select("Throat Cancer")
        cy.get('#formBreadcrumb > :nth-child(7) > :nth-child(1)').click()
        cy.get('input[name="symptom"]').type("Pain")
        cy.get('li[role="presentation"]').each(function($ele, index, list){
          if($ele.text().includes("Abdominal pain")){
            cy.wrap($ele).click()
          }
        })
        cy.get('.doing > ul > :nth-child(2) > span').click()
        cy.get('#onSetDate').type("2020-06-10")
        cy.get('#history').type("test")
        cy.get('.doing > ul > :nth-child(3) > span').click()
        cy.get('#examination').type("test")
        cy.get('.doing > ul > :nth-child(4) > span').click()
        cy.get('#diagnosis').type("Throat ")
        cy.get("li[role='presentation']").contains("Throat Cancer").then((option) => {
          option[0].click();
       })
       cy.get('.chk-provisional').check({force:true})
       cy.get('.doing > ul > :nth-child(5) > span').click()
       
        cy.get('li[role="presentation"]').each(function($ele, index, list){
          if($ele.text().includes("Throat Cancer")){
            cy.wrap($ele).click({force:true}).wait({force:true})
          }
        
        cy.wait(3000)
        cy.get('.chk-provisional').check({force:true})
        cy.get('.doing > ul > :nth-child(5) > span').click()
        cy.get('#investigation').type("ct scan")
        cy.get('li[role="presentation"]').each(function($ele, index, list){
          if($ele.text().includes("ct scan, pelvis")){
            cy.wrap($ele).click({force:true}).wait(500)
          }
        })
        /*cy.wait(500)
        cy.get('.chk-provisional').check({force:true})
        cy.get('.doing > ul > :nth-child(5) > span').click()
        cy.get('#investigation').type("mamm")
        cy.get('li[role="presentation"]').each(function($ele, index, list){
          if($ele.text().includes("mammogram")){
            cy.wrap($ele).click()
          }
        })
        cy.wait(500)
        cy.get('.chk-provisional').check({force:true})
        cy.get('.doing > ul > :nth-child(5) > span').click()
        cy.get('#investigation').type("vdrl")
        cy.get('li[role="presentation"]').each(function($ele, index, list){
          if($ele.text().includes("vdrl")){
            cy.wrap($ele).click()
          }
        })*/

        cy.get('.doing > ul > :nth-child(6) > span').click()
        cy.get('#add-prescription').click()
        cy.get('#drugSearch').type("Paractemol")
        cy.get('li[role="presentation"]').wait(300).each(function($ele, index, list){
          if($ele.text().includes("Paracetamol")){
            cy.wrap($ele).click({force:true}).clear()
          }
        })
        cy.get('.drug-dosage').type("4")
        cy.get('#dosage-unit').should("be.visible")
        

        cy.get('#drugSearch').clear().type("Ibuprofen")
        cy.get('li[role="presentation"]').wait(300).each(function($ele, index, list){
          if($ele.text().includes("Ibuprofen")){
            cy.wrap($ele).click({force:true}).clear()
            cy.get()
          }
        })
        cy.get('select[id="dosage-unit"]').wait(2000).select('Select Unit')//.should('have.value', 'Gram')
        cy.wait(4000)
        cy.get('select[id="drugFormulation"]').select("Select Unit")
        cy.get('.drug-frequency').select("Thrice daily")
        cy.get('.drug-number-of-days').type("5")
        cy.get('.drug-comment').type("needs constant care")
        cy.get('#prescription-dialog > .dialog-content > .confirm').click()

        cy.get('.doing > ul > :nth-child(8) > span').click()
        cy.get(':nth-child(2) > .chk-mdt').click()
        cy.get('#mdtMembers').type("Dr. Test,Nurse Comrade")
        cy.get('#mdtInstructions').type("Should be observed more closely")
        cy.get(':nth-child(3) > .chk-grade').click()
        cy.get(':nth-child(4) > .chk-stage').click()
        cy.get('input[name="chk-program"').check(["Chemotherapy","Radiotherapy","Procedure/Surgery"])
        cy.get('.doing > ul > :nth-child(9) > span').click()
        cy.get(':nth-child(3) > .outcome > label > input').click()
        cy.get('#follow-up-date > .required').type("18/05/2023")

        cy.get('#confirmation_label').click()
        cy.get('.submitButton').click()
      })


    })
  })