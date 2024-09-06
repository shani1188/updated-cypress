/// <reference types="cypress"/>
describe('Login the new project',()=>{

    beforeEach('login',()=>{
       // cy.intercept()
        cy.intercept('GET','**/tags',{fixture:'tags.json'})
        cy.logInToApplication()
        
    })

    it('Verify correct response and request',()=>{
       // cy.intercept()
        cy.intercept('POST','**/articles').as('postArticles')
        cy.contains(' New Article ').click()
        cy.get('[placeholder="Article Title"]').type('test Article')
        cy.get('[formcontrolname="description"]').type('noting in description')
        cy.get('[formcontrolname="body"]').type('Lorem ipsum test123')
        cy.contains(' Publish Article ').click()
        cy.contains(' Delete Article ').click()
        cy.wait('@postArticles')
        cy.get('@postArticles').then( xhr =>{
            console.log(xhr)
            expect(xhr.response.statusCode).to.equal(201)
            expect(xhr.request.body.article.body).to.equal('Lorem ipsum test123')
            expect(xhr.response.body.article.description).to.equal('noting in description')
        })
    })
    it('taglist',()=>{
        cy.get('.tag-list')
        .should('contain','Cypress')
        .and('contain','Testing')
        .and('contain','API')
    })

    it.only('verify global ',()=>{
       // cy.intercept()
        cy.intercept('Get','**/articles/feed*','{"articles":[],"articlesCount":0}')
        cy.intercept('GET','**/articles*',{fixture:'articles.json'})

        cy.contains('Global Feed').click()
        cy.get('app-favorite-button button').then(listOfButtons =>{
            expect(listOfButtons[0]).to.contain('1')
            expect(listOfButtons[1]).to.contain('5')
        })
        cy.fixture('articles').then(file=>{
            const articleLink = file.articles[1].slug
            cy.intercept('POST','**/articles/'+articleLink+'/favorite',file)
        })
        cy.get('app-favorite-button button').eq(1).click().should('contain','6')
    })

    it('Delete the article from API',()=>{
        const bodyRequest={
            "article":   {
                "title": "test article12",
                "description": "test about12 ",
                "body": "description test1",
                "tagList": []
            }
        }

        cy.get('@token').then(token=>{

            cy.request({
                url:Cypress.env('apiUrl')+'/api/articles/',
                headers:{'Authorization':'Token '+token},
                method: "POST",
                body:  bodyRequest
            }).then( response =>{
                expect(response.status).to.equal(201)
            })
            
            cy.contains('Global Feed').click()
            cy.wait(5000)
            cy.get('.article-preview').should('be.visible').first().click()
            cy.wait(500)
            cy.contains(' Delete Article ').click()
            cy.wait(500)

            cy.request({
                url:Cypress.env('apiUrl')+'/api/articles?limit=10&offset=0',
                headers:{'Authorization':'Token '+token},
                method:'GET'
            }).its('body').then(body=>{
                expect(body.articles[0].title).not.to.equal('test article')
            })
        })
 
    })
})