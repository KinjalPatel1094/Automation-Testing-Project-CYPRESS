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

export class datePickerPage{


selectCommonDatepickerDate(dayFromToday){

        cy.contains('nb-card', 'Common Datepicker').find('[placeholder="Form Picker"]').then(datePicker => {
            cy.wrap(datePicker).click()
            const dateToAssert = selectDayFromCurrent(dayFromToday)
            cy.wrap(datePicker).invoke('prop', 'value').should('contain', dateToAssert)
            cy.wrap(datePicker).should('have.value', dateToAssert)

        })
 }

 selectDatepickerRange(firstDay,secondDay){

    cy.contains('nb-card', 'Datepicker With Range').find('[placeholder="Range Picker"]').then(datePicker => {
        cy.wrap(datePicker).click()
        const dateToAssertFirst = selectDayFromCurrent(firstDay)
        const dateToAssertSecond = selectDayFromCurrent(secondDay)
        const finalDate = dateToAssertFirst + ' - ' + dateToAssertSecond
        cy.wrap(datePicker).invoke('prop', 'value').should('contain', finalDate)
        cy.wrap(datePicker).should('have.value', finalDate)

    })
}
}

export const onDatePickerPage = new datePickerPage()