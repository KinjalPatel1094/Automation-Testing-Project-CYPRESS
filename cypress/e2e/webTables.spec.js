/// <reference types="cypress" />


describe('Forth Test suite', () => {


    beforeEach('Open Application', () => {

        cy.openHomePage()
    })


    it('Web Tables', () => {

       
        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()

        //1. Get the row by text
        cy.get('tbody').contains('tr', 'Larry').then(tableRow => {

            cy.wrap(tableRow).find('.nb-edit').click()
            cy.wrap(tableRow).find('[placeHolder = "Age"]').clear().type('35')
            cy.wrap(tableRow).find('.nb-checkmark').click()
            cy.wrap(tableRow).find('td').eq(6).should('contain', '35')
        })

        //2. Get row by index
        cy.get('thead .nb-plus').click()
        cy.get('thead').find('tr').eq(2).then(tableRow => {

            cy.wrap(tableRow).find('[placeholder="First Name"]').type("Kinjal")
            cy.wrap(tableRow).find('[placeholder="Last Name"]').type("Patel")
            cy.wrap(tableRow).find('.nb-checkmark').click()

        })

        //3. using cypress method 
        cy.get('tbody tr').first().find('td').then(tableColumns => {

            cy.wrap(tableColumns).eq(2).should('contain','Kinjal')
            cy.wrap(tableColumns).eq(3).should('contain','Patel')

        })

        //4. Get each row validation
        const age = [20,30,40,200]

        cy.wrap(age).each( age => {

            cy.get('thead [placeholder= "Age"]').clear().type(age)
            cy.wait(500)
            cy.get('tbody tr').each(tableRow => {

                if(age == 200)
                {
                    cy.wrap(tableRow).should('contain','No data found')

                }else{
                    cy.wrap(tableRow).find('td').eq(6).should('contain',age)
                }
            })

        })

    })

})