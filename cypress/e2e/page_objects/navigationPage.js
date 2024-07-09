
function menuNavigation(nameGroup) {
    cy.contains('a', nameGroup).then(form=>{
        cy.wrap(form).find('.expand-state').invoke('attr','ng-reflect-icon').then(attri=>{
            if(attri.includes('left')){
                cy.wrap(form).click()
            }
        })
    })
    
}
 class NavigationPage{

   
    formLayoutPage(){
      //  cy.contains("Forms").click()
       menuNavigation('Form')
        cy.contains("Form Layouts").click()
    }

    datePicker(){
        //cy.contains("Forms").click()

        menuNavigation('Form')

        cy.contains("Datepicker").click()
    }

    dataTable(){
    menuNavigation('Tables & Data') 
    cy.contains('Smart Table').click()
    }
    toaster(){
        menuNavigation('Modal & Overlays')
    cy.contains('Toastr').click()
    }
    
    toolstip(){
        menuNavigation('Modal & Overlays')
        cy.contains('Tooltip').click()
    }

}

export const navigateTo = new NavigationPage()