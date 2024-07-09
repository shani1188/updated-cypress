export class formSubmit{

    submitFormAndCalendar(name,email){
        cy.contains('nb-card', 'Inline form').find('form').then(form=>{
            cy.wrap(form).find('[placeholder="Jane Doe"]').type(name)
            cy.wrap(form).find('[placeholder="Email"]').type(email)
            cy.wrap(form).find('.custom-checkbox').click()
            cy.wrap(form).submit()


        })

    }
    submitBasicFormAndCalendar(email,password){
        cy.contains('nb-card', 'Basic form').find('form').then(form=>{
            cy.wrap(form).find('[placeholder="Email"]').type(email)
            cy.wrap(form).find('[placeholder="Password"]').type(password)
            cy.wrap(form).find('.custom-checkbox').click()
            cy.wrap(form).submit()


        })

    }

}
export const formsubmit = new formSubmit()