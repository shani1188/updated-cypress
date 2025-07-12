import { LoginPage } from "./pages/login_pages"
import { navigate } from "./pages/navigate"

const loginPage = new LoginPage()
const Navigate = new navigate()

describe('All Login Tests',()=>{

    beforeEach('visit websit',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
    })

    it('Login 1',()=>{
        cy.intercept('GET','**/pim/employees/*').as('employee')
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        Navigate.tabList('Admin')
        cy.wait(2000)
        Navigate.tabList('Performance')
        cy.wait(2000)
        Navigate.tabList('Dashboard')
        cy.wait(2000)
        Navigate.tabList('Admin')
        //cy.contains('a','Admin').click()
        cy.contains('.oxd-input-group','-- Select --').click()
        cy.contains('.oxd-select-dropdown','Admin').click()
        cy.get('.oxd-form').find('.oxd-input').type('Abcde')
        cy.get('[placeholder="Type for hints..."]').type('Ravi B{enter}')
        cy.wait(2000)
        cy.get('.oxd-autocomplete-option').click()
        cy.contains('.oxd-grid-item','Status').then( ()=>{
            cy.contains('-- Select --').click()
        })
        cy.contains('Enabled').click()
        cy.get('[type="submit"]').click()
    })
    
    it('Login 2',()=>{
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
    })
    it('leaves',()=>{
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        Navigate.tabList('Leave')
        cy.contains('Apply').click()
        cy.get('.oxd-select-text--arrow').click()
        cy.contains('.oxd-select-option','CAN - Bereavement').should('be.visible').click()
        cy.get('.oxd-select-text--arrow').click()
        cy.contains('.oxd-select-option','CAN - Bereavement').then(value=>{
            expect(value).to.have.class('--selected')
        })
        cy.contains('.oxd-select-option','CAN - Bereavement').should('have.class','--selected')
        cy.get('.oxd-select-text--arrow').click()
        cy.contains('.oxd-grid-item','From Date').then(date=>{
            cy.wrap(date).click()
            cy.wrap(date).contains('11')
            .parent()
            .should('not.have.class','--non-working-day')
            .children()
            .click()
        })
        cy.contains('.oxd-grid-item','To Date').then(date=>{
            cy.wrap(date).click()
            cy.wrap(date).contains('13').click()
        })
        cy.contains('.oxd-input-group','Partial Days').then(partialDay=>{
            cy.wrap(partialDay).click()
            cy.contains('.oxd-select-option','Start and End Day').click()
            cy.contains('.oxd-grid-item','Start Day').should('be.visible')
            cy.contains('.oxd-grid-item','Start Day')
            .find('.oxd-select-text-input')
            .click()
            cy.contains('Half Day - Afternoon').click()
            })
    })

    it.only('Add new Candidate',()=>{
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        Navigate.tabList('Recruitment')
        cy.contains(' Add ').click()
        cy.get('[name="firstName"]').type('Shahrukh')
        cy.get('[name="lastName"]').type('Asghar')
        cy.get('.oxd-select-text-input').click()
        cy.contains('Senior QA Lead').click()
        Navigate.textfield('Email','shahrukh.asghar.92@gmail.com')
        Navigate.textfield('Contact Number','03027871188')
        cy.get('.oxd-file-button').click()
        cy.get('.oxd-file-input').selectFile('cypress/fixtures/asad.pdf',{force: true})
        // cy.wait(5000);
        //Navigate.uploadandDownload()
        cy.get('[placeholder="Enter comma seperated words..."]').type('A new candidate is onboarded')
        cy.get('[placeholder="yyyy-dd-mm"]').click()
        cy.contains('.oxd-calendar-date-wrapper','12').click()
        cy.get('div > textarea[placeholder="Type here"]').type('This is a strong candidate please take a look at it.')
        cy.get('.oxd-checkbox-input > .oxd-icon').click()
        cy.contains(' Save ').click()
    })
})
