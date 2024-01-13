/// <reference types="cypress" />


describe('Fifth Test suite', () => {

    beforeEach('Open Application', () => {

        cy.openHomePage()
    })


    it('Tooltip', () => {

      
        cy.contains('Modal & Overlays').click()
        cy.contains('Tooltip').click()

        cy.contains('nb-card', 'Colored Tooltips')
            .contains('Default').click()
        cy.get('nb-tooltip').should('contain','This is a tooltip')


    })

})