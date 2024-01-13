const { onDatePickerPage } = require("../support/page_objects/datepickerPage")
const { onFormLayoutsPage } = require("../support/page_objects/formLayoutsPage")
const { navigateTo } = require("../support/page_objects/navigationPage")
const { onSmartTablePage } = require("../support/page_objects/smartTablePage")

describe('Test with Page Objects', () => {

    beforeEach('Open Application', () => {

        cy.openHomePage()
    })

    it('Verify navigations across the pages', () => {

        navigateTo.formLayoutsPage()
        navigateTo.datePickerPage()
        navigateTo.smartTablePage()
        navigateTo.toasterPage()
        navigateTo.tooltipPage()
    })

    it.only('Submit Inline and Basic form and select tomorrow date in the calender', () =>{

        navigateTo.formLayoutsPage()
        onFormLayoutsPage.submitInlineForm('Kinjal','kinjal.test@test.com')
        onFormLayoutsPage.submitBasicForm('kinjal.test@test.com','123456')

        navigateTo.datePickerPage()
        onDatePickerPage.selectCommonDatepickerDate(1)
        onDatePickerPage.selectDatepickerRange(5,10)

        navigateTo.smartTablePage()
        onSmartTablePage.addNewRecordWithFirstAndLastName('Kinjal','Patel')
        onSmartTablePage.updateAgeByFirstName('Kinjal' , 28)
        onSmartTablePage.deleteRowByIndex(3)

    })
})