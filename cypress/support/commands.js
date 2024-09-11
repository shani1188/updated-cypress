// ***********************************************
/// <reference types="cypress" />

// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('logInToApplication',()=>{
    const userCredentials={
             "user":{ 
               "email":Cypress.env('username'),
               "password":Cypress.env('apiPassword')
               }
           }
           cy.log(userCredentials)
        
       cy.request('POST',Cypress.env('apiUrl')+'/api/users/login', userCredentials)
           .its('body').then(body=>{
               const token=body.user.token
               cy.wrap(token).as('token')
               
               cy.visit('http://localhost:4200/',{
                   onBeforeLoad(win){
                       win.localStorage.setItem('jwtToken',token)
                   }
               })
           })
   
       // cy.visit('http://localhost:4200/login')
       // cy.get('[placeholder="Email"]').type('shahrukh.asghar.92@gmail.com')
       // cy.get('[placeholder="Password"]').type('test123!')
       // cy.get('[type="submit"]').click()
   })

   Cypress.Commands.add('StealthLogin',()=>{
     const credentials={
        "email": Cypress.env('email'),
        "password": Cypress.env('password'),
        "staySignedIn": Cypress.env('staySignedIn')
     }
     cy.log(credentials)
     cy.log(credentials.email)
     cy.log(credentials.password)
     cy.request('POST',Cypress.env('url')+'api/users/login', credentials)
     .its('body').then(body =>{
        const data= body.data
        const token =body.data.token
        cy.wrap(token).as('token1')
        cy.visit(Cypress.env('webUrl')+'ghost/home',{
            onBeforeLoad(win){
                win.localStorage.setItem('user',JSON.stringify({data,token: token, isAuthenticated: true}))
            }
        })
     })
   })

   Cypress.Commands.add('registerApplication',()=>{
       cy.visit('http://localhost:4200/register')
       cy.get('[placeholder="Username"]').type('test123_456')
       cy.get('[placeholder="Email"]').type('shah@gmail.com')
       cy.get('[placeholder="Password"]').type('password123')
       cy.get('[type="submit"]').click()
   })

   Cypress.Commands.add('openHomePage',()=>{
    cy.visit('http://localhost:4300/')
})