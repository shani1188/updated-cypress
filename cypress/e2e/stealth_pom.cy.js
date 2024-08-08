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
    it('Login using API',()=>{
        cy.StealthLogin()
       // cy.visit('http://localhost:3007/ghost/home')
        cy.get('#dealershipId').click().clear().type('Great American RV SuperStores')
    cy.get('#dealershipId-listbox').click()
    
    cy.contains('Visitors & Views').click()
    cy.wait(2000)
    cy.get(`[data-id="4612223"]`).find('[data-testid="VisibilityOutlinedIcon"]').click()
    cy.get('[data-testid="PostAddIcon"]').click()
    cy.get('#form-dialog-title button').click()
    })

    it.only('web page urls from env',()=>{
        cy.visit(Cypress.env('webUrl'),{headers:{"Accept-Encoding":"gzip, deflate"}})
        cy.get('#email').type('test@email.com')
        cy.get('.css-1ogakd7 > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('test123')
        cy.get('#login').click()
        

    })
})