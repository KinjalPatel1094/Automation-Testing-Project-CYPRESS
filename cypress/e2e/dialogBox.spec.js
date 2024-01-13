/// <reference types="cypress" />


describe('sixth Test suite', () => {

    beforeEach('Open Application', () => {

        cy.openHomePage()
    })


    it('Dialog box', () => {

        
        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()


        //1.
        cy.get('tbody tr').first().find('.nb-trash').click()
        cy.on('window:confirm', (confirm) => {
            expect(confirm).to.equal('Are you sure you want to delete?')

        })

        //2. 
        const stub = cy.stub() // using stub method
        cy.on('window:confirm', stub)
        cy.get('tbody tr').first().find('.nb-trash').then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Are you sure you want to delete?')
        })


        //3.
        cy.get('tbody tr').first().find('.nb-trash').click()
        cy.on('window:confirm', () => false)


    })

})

