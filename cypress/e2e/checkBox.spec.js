/// <reference types="cypress" />

describe('Seventh Test suite', () => {
    
    beforeEach('Open Application', () => {

        cy.openHomePage()
    })


it(' Testing Checkboxes' , () => {

   
    cy.contains('Modal & Overlays').click()
    cy.contains('Toastr').click()


    cy.get('[type = "checkbox"]').check({force:true})
    cy.get('[type = "checkbox"]').uncheck({force:true})
    cy.get('[type = "checkbox"]').eq(0).check({force:true})



})

})