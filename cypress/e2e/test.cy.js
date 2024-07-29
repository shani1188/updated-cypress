/// <reference types="cypress" />
describe("Testing the Cypress on new Laptop",()=>{
  beforeEach(()=>{
      cy.visit("/")
      cy.contains("Forms").click()
      cy.contains("Form Layouts").click()
  })
  it("first test case of Basic form",()=>{
      // cy.visit('/')
      // cy.contains('Forms').click()
      // cy.contains('Form Layouts').click()
      cy.contains('Basic form')
      cy.get('#exampleInputEmail1').type('shahrukh@email.com')
      cy.get('#exampleInputPassword1').type('pwdtest123##')
      const basicform = cy.contains('nb-card', 'Basic form')
      basicform.find('.custom-checkbox').click()
  })
  
  it("Testing the first run",()=>{
  
      // cy.visit('/')
      // cy.contains('Forms').click()
      // cy.contains('Form Layouts').click()
  
      //by tag Name
  cy.get('input')
  
  // by ID
  
  cy.get('#inputEmail1')
  
  // by Class
  
  cy.get('.input-full-width')
  
  
  // by Attribute Name
  
  cy.get('[placeholder]')
  
  // by Attribut Name and value
  
  cy.get('[placeholder="Email"]')
  
  // by class value
  
  cy.get('[class="input-full-width size-medium shape-rectangle"]')
  
  // by tag name and attribute with value
  
  cy.get('input[placeholder="Email"]')
  
  // by multiple attributes
  
  cy.get('[placeholder="Email"][type="email"]')
  
  
  // by tag name, attribute with value and Id and class name
  
  cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')
  
  // the most recommended way by Cypress
  
  
  cy.get('[data-cy="imputEmail1"]')
  
  cy.get('[data-cy="signInButton"]')
  
  cy.contains('Sign in')
  
  cy.contains('[status="warning"]','Sign in')
  
  cy.get('#inputEmail3')
      .parents('form')
      .find('button')
      .should('contain','Sign in')
      .parents('form')
      .find('[class="custom-checkbox"]')
      .click()
  
  cy.contains('nb-card','Horizontal form').find('[type="email"]').type('shahrukh.asghar.92@gmail.com')
  cy.contains('Horizontal form').parents('nb-card').find('[placeholder="Password"]').type('test123')
  cy.contains('nb-card','Form without labels').find('[placeholder="Message"]').type('I"m typing this message')
  })
  
  it('then and wrap',()=>{
      cy.contains('nb-card','Using the Grid').find('[for="inputEmail1"]').should('contain','Email')
      cy.contains('nb-card','Using the Grid').find('[for="inputPassword2"]').should('contain','Password')
      cy.contains('nb-card','Basic form').find('[for="exampleInputEmail1"]').should('contain','Email address')
      cy.contains('nb-card','Basic form').find('[for="exampleInputPassword1"]').should('contain','Password')
  
      cy.contains('nb-card','Using the Grid').then( firstForm=>{
          const emailLabelFirst= firstForm.find('[for="inputEmail1"]').text()
          const passwordLabelFirst= firstForm.find('[for="inputPassword2"]').text()
          expect(emailLabelFirst).to.equal('Email')
          expect(passwordLabelFirst).to.equal('Password')
  
          cy.contains('nb-card','Basic form').then(secondForm =>{
              const passwordLabelSecond= secondForm.find('[for="exampleInputPassword1"]').text()
              const emailLabelSecond= secondForm.find('[for="exampleInputEmail1"]').text()
              expect(passwordLabelSecond).to.equal(passwordLabelFirst)
              expect(emailLabelSecond).to.equal('Email address')
  
              cy.wrap(secondForm).find('[for="exampleInputEmail1"]').should('contain','Email address')
  
          })
  
  
      })
  
     
  
  })
  it("Invoke command",() => {
  
      //1 
      cy.get('[for="exampleInputEmail1"]').should('contain','Email address')
      .should('have.class','label')
      .and('have.text','Email address')
  
  
      //2
      cy.get('[for="exampleInputEmail1"]').then(label =>{
          expect(label.text()).to.eql('Email address')
          expect(label).to.have.class('label')
          expect(label).to.have.text('Email address')
      })
      cy.get('[for="exampleInputEmail1"]').then(label =>{
          expect(label.text()).to.eqls('Email address')
      })
      cy.get('[for="exampleInputEmail1"]').then(label =>{
          expect(label.text()).to.equals('Email address')
      })
      
      cy.get('[for="exampleInputEmail1"]').invoke('text').then( textEx =>{
          expect(textEx).to.equal('Email address')
      })
    
      cy.contains('nb-card','Basic form')
      .find('nb-checkbox')
      .click()
      .find('.custom-checkbox')
      .invoke('attr','class')
      .should('contain','checked')
      .then( classValue =>{
          expect(classValue).to.contains('checked')
      })
  
      
  
  })
  
  it('assert property',()=>{
      cy.visit('/')
      cy.contains("Forms").click()
      cy.contains("Datepicker").click()
  
      cy.contains('nb-card','Common Datepicker').find('input')
      .then(input =>{
          cy.wrap(input).click()
          cy.get('nb-calendar-picker').contains('17').click()
          cy.wrap(input).invoke('prop','value').should('contain','Nov 17, 2023')
      })
  
  })
  
  it('radio buttons',()=>{
      cy.contains('nb-card','Using the Grid').find('[type="radio"]').then(radioButtons =>{
          cy.wrap(radioButtons).first().check({force:true})
          .should('be.checked')
  
          cy.wrap(radioButtons).eq(1).check({force:true})
          cy.wrap(radioButtons)
          .first()
          .should('not.be.checked')
  
          cy.wrap(radioButtons)
              .eq(2)
              .should('be.disabled')
  
      })
          cy.contains('nb-card', 'Using the Grid').find('.inner-circle').eq(0).click()
          cy.contains('nb-card', 'Using the Grid').find('.inner-circle').eq(1).should('be.empty')
  })
  it('check boxes',()=>{
      cy.contains('Modal & Overlays').click()
      cy.contains('Toastr').click()
      cy.contains('nb-checkbox','Hide on click').find('[type="checkbox"]').click({force:true})
      cy.contains('nb-checkbox','Prevent arising of duplicate toast').find('[type="checkbox"]').click({force:true})
      cy.contains('nb-checkbox','Show toast with icon').find('[type="checkbox"]').click({force:true})
      cy.get('[type="checkbox"]').eq(1).click({force:true})
      //check() method will only be usable for radio and check-boxes
  
  
  
  })
  it('drop down',()=>{
  
      //1
      cy.get('.select-button').click()
      cy.contains('Dark').click()
      cy.get('.select-button').should('contain','Dark')
      cy.get('nb-layout-header nav').should('have.css', 'background-color', 'rgb(34, 43, 69)')
  
      //2
  
      cy.get('.select-button').then(dropdowns =>{
          cy.wrap(dropdowns).click()
          cy.get('.options-list nb-option').each( (listItem, index) =>{
              const itemText = listItem.text().trim()
  
              const color = {
                  "Light":"rgb(255, 255, 255)",
                  "Dark":"rgb(34, 43, 69)",
                  "Cosmic":"rgb(50, 50, 89)",
                  "Corporate":"rgb(255, 255, 255)"
              }
              cy.wrap(listItem).click()
              cy.wrap(dropdowns).should('contain',itemText)
              cy.get('nb-layout-header nav').should('have.css', 'background-color', color[itemText])
              if(index <3 ){
                  cy.wrap(dropdowns).click()
              }
              
  
  
          })
      })
  })
  
  it('clicking twitter button',()=>{
      cy.get('.ion-social-twitter').click();
  
  })
  
  it('Web Tables',()=>{
  
      
      cy.contains('Tables & Data').click()
      cy.contains('Smart Table').click()
  
      //1
      cy.get('tbody').contains('tr','Larry').then( tableRow=>{
      cy.wrap(tableRow).find('.nb-edit').click()
      cy.wrap(tableRow).find('[placeholder="Age"]').clear().type('25')
      cy.wrap(tableRow).find('.nb-checkmark').click()
      cy.wrap(tableRow).find('td').eq(6).should('contain','29')
      })
  
      //2
      cy.get('thead').find('.nb-plus').click()
      cy.get('thead').find('tr').eq(2).then(tableRow=>{
          cy.wrap(tableRow).find('[placeholder="ID"]').type('1122')
          cy.wrap(tableRow).find('[placeholder="First Name"]').type('Shahrukh')
          cy.wrap(tableRow).find('[placeholder="Last Name"]').type('Asghar')
          cy.wrap(tableRow).find('[placeholder="Username"]').type('shahrukh.asghar')
          cy.wrap(tableRow).find('[placeholder="E-mail"]').type('shahrukh.asghar.92@gmail.com')
          cy.wrap(tableRow).find('[placeholder="Age"]').type('28')
          cy.wrap(tableRow).find('.nb-checkmark').click()
          
      })
          cy.get('tbody tr').eq(0).find('td').then(tableColumn=>{
          cy.wrap(tableColumn).eq(1).should('contain','1122')
          cy.wrap(tableColumn).eq(2).should('contain','Shahrukh')
          cy.wrap(tableColumn).eq(3).should('contain','Asghar')
          cy.wrap(tableColumn).eq(4).should('contain','shahrukh.asghar')
          cy.wrap(tableColumn).eq(5).should('contain','shahrukh.asghar.92@gmail.com')
          cy.wrap(tableColumn).eq(6).should('contain','28')
  
      })
      //3
  
      const age =[20,30,40,200]
      cy.wrap(age).each( age=>{
          cy.get('thead [placeholder="Age"]').clear().type(age)
          cy.wait(500)
          cy.get('tbody tr').each(tableRow=>{
              if(age==200){
                  cy.wrap(tableRow).should('contain','No data found')
              } else {
                  cy.wrap(tableRow).find('td').eq(6).should('contain', age)
              }
          })
  
      
      })
  
  
  
  })
  it.only('Date picker',()=>{
      function selectDayFromCurrent(day){
          let date = new Date()
          date.setDate(date.getDate()+day)
          let futureDay= date.getDate()
          let futureMonth= date.toLocaleDateString('default',{month: 'short'})
          let assertDate= futureMonth+' '+futureDay+', '+date.getFullYear()
          cy.get('nb-calendar-navigation').invoke('attr','ng-reflect-date').then(dateAttribute =>{
              if(!dateAttribute.includes(futureMonth)){
                  cy.get('[data-name="chevron-right"]').click()
                  selectDayFromCurrent(day)
              }else{
                  cy.get('nb-calendar-picker [class="day-cell ng-star-inserted"]').contains(futureDay).click()
              }
          })
          return assertDate
      }
      cy.visit('/')
      cy.contains("Forms").click()
      cy.contains("Datepicker").click()
      cy.contains('nb-card','Common Datepicker').find('input')
      .then(input =>{
          cy.wrap(input).click()
          let assertDate=selectDayFromCurrent(90)
          cy.wrap(input).invoke('prop','value').should('contain',assertDate)
          cy.wrap(input).should('have.value',assertDate)
      })
  
  })
  
  it('tooltip',()=>{
      cy.visit('/')
      cy.contains('Modal & Overlays').click()
      cy.contains('Tooltip').click()
      cy.contains('nb-card', 'Colored Tooltips')
      .contains('Default').click()
      cy.get('nb-tooltip').should('contain','This is a tooltip')
  })
  
  it('dialog box',()=>{
      cy.contains('Tables & Data').click()
      cy.contains('Smart Table').click()
      //1
      // cy.get('tbody tr').eq(0).find('.nb-trash').click()
      // cy.on('window:confirm',(confirm)=>{
      // expect(confirm).to.equal('Are you sure you want to delete?')
      // })
      //2
      const stub = cy.stub()
      cy.on('window:confirm',stub)
      cy.get('tbody tr').eq(0).find('.nb-trash').click().then(()=>{
          expect(stub.getCall(0)).to.be.calledWith('Are you sure you want to delete?')
      })
      //3
      cy.get('tbody tr').first().find('.nb-trash').click()
      cy.on('window:confirm',()=>false)
  })
  })