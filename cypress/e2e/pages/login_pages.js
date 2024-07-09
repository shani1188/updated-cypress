export class LoginPage{

    username_textbox='[name="username"]'  //class variables.. Variables for object locators
    password_textbox='[name="password"]'
    login_button=' Login '

    enterUsername(username){
        cy.get(this.username_textbox).type(username)

    }

    enterPassword(password){
        cy.get(this.password_textbox).type(password)

    }

    clickLogin(){
        cy.contains(this.login_button).click()

    }

}
