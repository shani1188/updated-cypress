export class loginStealth{

    email='#email'
    password='#password'
    login ='#login'

    homePage(url){
        cy.visit(url)
    }
    loginCreds(){
        cy.get(this.email).type('waseem.ullah@dealershiptoolkit.com')
        cy.get(this.password).type('Allah@1.')
        cy.get(this.login).click()
    }

}
