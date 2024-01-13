// Finding web elements in different ways
//finding Email field from forms > form layout section.

/// <reference types="cypress" />


describe('First Test suite', () => {

    beforeEach('Open Application', () => {

        cy.openHomePage()
    })


    it('find web elements', () => {

       
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        // find by Tag name
        cy.get('input')

        // find by ID
        cy.get('#inputEmail1')

        // find by class value
        cy.get('.input-full-width')

        //find by attribute name
        cy.get('[fullWidth]')

        //find by attribute name and value 
        cy.get('[placeHolder = "Email"]')

        //find by entire class value
        cy.get('[class="input-full-width size-medium shape-rectangle"]')

        //by two attributes
        cy.get('[fullWidth][placeHolder = "Email"]')

        //by tag,attribute,id and class
        cy.get('input[placeHolder = "Email"]#inputEmail1.input-full-width')

        //by cypress test id => custom command
        cy.get('[data-cy ="imputEmail1"]')


        //finding Sign in buttons on same page 
        cy.contains('Sign in') //find 1st sign in button
        cy.contains('[status = "warning"]', 'Sign in') //find 2nd sign in button
        cy.contains('nb-card', 'Horizontal form').find('button') //another way
        cy.contains('nb-card', 'Horizontal form').contains('Sign in')

        //cypress chains and DOM => finding checkbox here
        cy.get('#inputEmail3')
            .parents('form')
            .find('button')
            .should('contain', 'Sign in')
            .parents('form')
            .find('nb-checkbox')
            .click()


    })

    it.only('Save subject of the command', () => {

       
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        // 1. Cypress Alias

        cy.contains('nb-card', 'Using the Grid').as('usingTheGrid')
        cy.get('@usingTheGrid').find('[for=inputEmail1]').should('contain', 'Email')
        cy.get('@usingTheGrid').find('[for=inputPassword2]').should('contain', 'Password')

        //2. Cypress then() method

        cy.contains('nb-card', 'Using the Grid').then(usingTheGridForm => {

            cy.wrap(usingTheGridForm).find('[for=inputEmail1]').should('contain', 'Email')
            cy.wrap(usingTheGridForm).find('[for=inputPassword2]').should('contain', 'Password')

        })

    })


    it('extract text values', () => {

       
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()


        //1. extracting text value from basic form on Form layout page
        cy.get('[for="exampleInputEmail1"]').should('contain', 'Email address')

        //2.
        cy.get('[for="exampleInputEmail1"]').then(label => {

            const labelText = label.text()
            expect(labelText).to.equal('Email address')
            cy.wrap(labelText).should('contain', 'Email address')

        })

        //3.
        cy.get('[for="exampleInputEmail1"]').invoke('text').then(text => {
            expect(text).to.equal('Email address')
        })

        cy.get('[for="exampleInputEmail1"]').invoke('text').as('labelText').should('contain', 'Email address')


        //4.
        cy.get('[for="exampleInputEmail1"]').invoke('attr', 'class').then(classValue => {
            expect(classValue).to.equal('label')
        })


        //5.
        cy.get('#exampleInputEmail1').type('test@test.com')
        cy.get('#exampleInputEmail1').invoke('prop', 'value').should('contain', 'test@test.com')

    })
})