describe( "", () =>{

    beforeEach(()=>{

        cy.visit("http://localhost:4300/")
        cy.contains("Forms").click()
        cy.contains("Form Layouts").click()
    })
    it("first test case of Basic form",()=>{
        cy.contains('Basic form')
        cy.get('#exampleInputEmail1').type('shahrukh@email.com')
        cy.get('#exampleInputPassword1').type('pwdtest123##')
        const basicform = cy.contains('nb-card', 'Basic form')
        basicform.find('.custom-checkbox').click()
    })
    it("this is the second test case for grid",()=>{
        cy.contains('Using the Grid')
        cy.get('#inputEmail1').type('shahrukh@email.com')
        cy.get('#inputPassword2').type('test123')
        cy.contains('Option 1').click()
        cy.contains('Option 2').click()
        cy.contains('Sign in').click()
    })
    it("third test case form without label",()=>{
        cy.contains('Form without labels')
        cy.get('input[placeholder*="Recipients"]').type('sharukh')
        cy.get('input[placeholder*="Subject"]').type('Cypress Automation')
        cy.get('textarea[placeholder*="Message"]').type('Hello world this is the message from noman ')
        cy.contains('Send').click()

        // this is test asdfasdf

    })
    it.only("fourth test case Horizontal form",()=>{
        cy.contains('Horizontal form')
        cy.get('#inputEmail3').type('noman@email.com')
        cy.get('#inputPassword3').type('noman123')
        const horizontal = cy.contains('nb-card', 'Horizontal form')
        horizontal.find('.custom-checkbox').click()
        cy.get('[ng-reflect-status="warning"]').click()

       

    })
    it("test case number five block form",()=>{
        cy.contains('nb-card', 'Block form')
        cy.get('#inputFirstName').type('Shahrukh')
        cy.get('#inputLastName').type('Asghar')
        cy.get('#inputEmail').type('shahrukh.asghar.92@gmail.com')
        cy.get('#inputWebsite').type('www.youtube.com')
        cy.get('#block-form-button').click()
        cy.get('#inputFirstName').should('be.empty')
        cy.get('#inputLastName').should('be.empty')
        cy.get('#inputWebsite').should('be.empty')
        cy.get('#inputEmail').should('be.empty')
    })
    it("Using the grid by assertions",()=>{
        cy.fixture('user_data.json').its(0).as('correctCredentials')
        cy.fixture('user_data.json').its(1).as('incorrectCredentials')
        cy.get('@correctCredentials').then(user =>{
            cy.get('#inputEmail1').type(user.email)
            cy.get('#inputPassword2').type(user.password)
            cy.contains('nb-card', 'Using the Grid').find('.inner-circle').eq(0).click()
           
            cy.contains('nb-card', 'Using the Grid').find('.inner-circle').eq(1).click()
        
            cy.contains('nb-card', 'Using the Grid').find('.inner-circle').eq(2)
           
            cy.contains('nb-card', 'Using the Grid').find('[type="submit"]').click()
            cy.get('#inputEmail1').should('be.empty')
          
            cy.get('#inputPassword2').should('be.empty')
        })
        cy.get('@incorrectCredentials').then(user =>{
            cy.get('#inputEmail1').type(user.email)
            cy.get('#inputPassword2').type(user.password)
            cy.contains('nb-card', 'Using the Grid').find('.inner-circle').eq(0).click()
            cy.contains('nb-card', 'Using the Grid').find('.inner-circle').eq(1).should('be.empty')
           
            cy.contains('nb-card', 'Using the Grid').find('.inner-circle').eq(1).click()
            cy.contains('nb-card', 'Using the Grid').find('.inner-circle').eq(0).should('be.empty')
           
            cy.contains('nb-card', 'Using the Grid').find('.inner-circle').eq(2)
            cy.contains('nb-card', 'Using the Grid').find('[type="submit"]').click()
            
            cy.get('#inputEmail1').should('not.be.empty')
            cy.get('#inputPassword2').should('not.be.empty')
        })
    })
    it("Selecting Dark theme",()=>{
        cy.get('[class="select-button"]').click()
        cy.contains('Dark').click()

    })
    it('test class value update',()=>{
        
        cy.get('nb-search').click()
        cy.get('nb-search-field').should('have.class','show')
        .should('have.attr','ng-reflect-show','true')
        cy.get('.close-button').click()
        cy.get('nb-search-field')
        .should('have.attr','ng-reflect-show','false')
        .should('not.have.class','show')
    })
})