import { loginStealth } from "./pages/login_stealth";

const login_Stealth= new loginStealth()

describe('stealth using POM',()=>{
    it('POM stealth login only',()=>{

    login_Stealth.homePage('http://localhost:3007/')
    login_Stealth.loginCreds()
    cy.get('#dealershipId').click().clear().type('Great American RV SuperStores')
    cy.get('#dealershipId-listbox').click()
    
    cy.contains('Visitors & Views').click()
    cy.get('[data-id="4612223"]').find('[data-testid="VisibilityOutlinedIcon"]').click()

    })
    it.only('Login using API',()=>{
        cy.StealthLogin()
        cy.intercept('GET','/api/gshoppers/visitors*').as('visitor&views')
       // cy.visit('http://localhost:3007/ghost/home')
        cy.get('#dealershipId').click().clear().type('Great American RV SuperStores')
    cy.get('#dealershipId-listbox').click()
    
    cy.contains('Visitors & Views').click()
    cy.wait('@visitor&views').then(visitor=>{
        cy.get('[data-id="4626062"]').find('[data-testid="VisibilityOutlinedIcon"]').click()
    })
    cy.get('[data-testid="PostAddIcon"]').click()
    cy.get('#form-dialog-title button').click()
    })
})