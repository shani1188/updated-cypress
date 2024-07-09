/// <reference types="cypress"/>
describe('Learning API Intercept/ SPY API', ()=>{

    it('Intercept API',()=>{
        cy.visit('https://dummyapi.io/explorer')
        cy.intercept({
            path:'/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10'
        }).as('comment')
        cy.contains('Comments List').click()
        cy.wait('@comment').then(intercept=>{
            expect(intercept.response.body.limit).eq(10)
        })
    })

    it('Mock API',()=>{
        cy.visit('https://dummyapi.io/explorer')
        cy.intercept('GET','/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10',{limit:10, Name: 'Shahrukh Asghar'}).as('comment')
        cy.contains('Comments List').click()
        cy.wait('@comment').then(intercept=>{
            expect(intercept.response.body.limit).eq(10)
            expect(intercept.response.body.Name).eq('Shahrukh Asghar')
        })
    })

    it('Data Driven Mock API',()=>{
        cy.visit('https://dummyapi.io/explorer')
        cy.intercept('GET','/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10',{fixture:'example.json'}).as('comment')
        cy.contains('Comments List').click()
        cy.wait('@comment').then(intercept=>{
           // expect(intercept.response.body.limit).eq(10)
            expect(intercept.response.body.name).eq('Using fixtures to represent data')
        })
    })

    
})