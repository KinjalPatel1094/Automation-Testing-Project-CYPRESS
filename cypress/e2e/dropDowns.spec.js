/// <reference types="cypress" />


describe('Second Test suite', () => {

    beforeEach('Open Application', () => {

        cy.openHomePage()
    })


    it('List and Dropdowns', () => {

       

        //1.
        cy.get('nav nb-select').click()
        cy.get('.options-list').contains('Dark').click()
        cy.get('nav nb-select').should('contain', 'Dark')

        //2.
        cy.get('nav nb-select').then(dropDown => {

            cy.wrap(dropDown).click()

            //using each() method to iterate through each list item
            cy.get('.options-list nb-option').each((listItem, index) => {

                const itemText = listItem.text().trim() // removing extra space using trim method
                cy.wrap(listItem).click()
                cy.wrap(dropDown).should('contain', itemText)
                if (index < 3) {
                    cy.wrap(dropDown).click()
                }
            })
        })

    })

})
