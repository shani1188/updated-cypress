/// <reference types="cypress" />

describe('Assersion Examples',()=>{

beforeEach('server',()=>{
    cy.visit('https://example.cypress.io/')
})

it('implicit examples',()=>{
    cy.contains('get').click()
    cy.get('#query-btn')
    .should('contain','Button')
    .and('have.class','btn-primary')
    .should('have.class','query-btn')


})

it('explicit Examples',()=>{
    cy.contains('get').click().then(button=>{
        cy.wrap(button)
        .get('#query-btn')
        .should('contain','Button')
        
    })
    cy.get('#query-btn').then( button=>{
    expect(button).to.contain('Button')
    expect(button).to.have.class('btn-primary')})
    cy.get('[data-test-id="test-example"]')
  .invoke('attr', 'data-test-id')
  .should('equal', 'test-example')

// or you can get an element's CSS property
cy.get('[data-test-id="test-example"]')
  .invoke('css', 'position')
  .should('equal', 'static')
})



})