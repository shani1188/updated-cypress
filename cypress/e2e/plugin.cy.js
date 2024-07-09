/// <reference types="cypress"/>
describe('Plugin work',()=>{

    beforeEach(()=>{
        cy.eyesOpen()
    })

    it('plugin',()=>{
        cy.eyesCheckWindow()
    })
    afterEach(()=>{
        cy.eyesClose()
    })
})