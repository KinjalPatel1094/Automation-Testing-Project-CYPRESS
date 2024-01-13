/// <reference types="cypress" />

describe('Seventh Test suite', () => {

    beforeEach('Open Application', () => {

        cy.openHomePage()
    })


    it(' Testing Radio Buttons', () => {

       
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.contains('nb-card', 'Using the Grid').find('[type ="radio"]').then(radioButtons => {
            cy.wrap(radioButtons).eq(0).check({force:true}).should('be.checked')
            cy.wrap(radioButtons).eq(1).should('not.be.checked')
            cy.wrap(radioButtons).eq(2).should('be.disabled')
    
        })


    })

    
    

})