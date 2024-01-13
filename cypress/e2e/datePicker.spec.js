/// <reference types="cypress" />


describe('Third Test suite', () => {

    beforeEach('Open Application', () => {

        cy.openHomePage()
    })


    it('Date Picker', () => {


        // recursive function to get correct future date

        function selectDayFromCurrent(day) {
            let date = new Date()  // js date object
            date.setDate(date.getDate() + day) // get cuurent date
            console.log(date)
            let futureDate = date.getDate()
            let futureMonth = date.toLocaleDateString('en-US', { month: 'short' })
            let futureYear = date.getFullYear()
            let dateToAssert = `${futureMonth} ${futureDate}, ${futureYear}`
            cy.get('nb-calendar-navigation').invoke('attr', 'ng-reflect-date').then(dateAttribute => {

                if (!dateAttribute.includes(futureMonth) || !dateAttribute.includes(futureYear)) {

                    cy.get('[data-name="chevron-right"]').click()
                    selectDayFromCurrent(day) // function call itself 

                } else {
                    cy.get('.day-cell').not('.bounding-month').contains(futureDate).click();
                }
            })
            return dateToAssert

        }

        
        cy.contains('Forms').click()
        cy.contains('Datepicker').click()

        cy.contains('nb-card', 'Common Datepicker').find('[placeholder="Form Picker"]').then(datePicker => {

            cy.wrap(datePicker).click()

            const dateToAssert = selectDayFromCurrent(200)

            cy.wrap(datePicker).invoke('prop', 'value').should('contain', dateToAssert)
            cy.wrap(datePicker).should('have.value', dateToAssert)

        })


    })
})