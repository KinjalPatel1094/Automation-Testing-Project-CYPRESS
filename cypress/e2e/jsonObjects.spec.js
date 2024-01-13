///  <reference types = "cypress" />
describe('JSON objects' , () => {

    it('JSON object' , () => {

            cy.openHomePage()

            const simpleObject = { "firstName": "kinjal" , "lastName" : "Patel"}

            const arrayOfValues = [1,2,3,4,5]

            const arrayOfObjects = [{"hobby":"yoga"},{"job":"QA Engineer"},{"age": 29}]

            const mix = {
                "day" : "monday",
                "month" : "January",
                "year" : 2024,
                "holidays" : [
                    {
                        "canadaDay" : "july",
                        "date" : 1
                    },
                    {
                        "christmasDay" : "december",
                        "date" : 25
                    }
                ]
            }

            console.log(simpleObject.firstName)
            console.log(simpleObject["lastName"])
            console.log(arrayOfValues[0])
            console.log(arrayOfObjects[1].job)
            console.log(mix.holidays[0].date)
    })
})