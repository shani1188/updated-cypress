// function menuNavigate(tab){
//     cy.contains('a',tab).then(menu =>{
//         cy.wrap(menu).find('.oxd-icon-button').invoke('attr','class').then(attr =>{
//             if(attr.includes('left')){
//                 cy.wrap(menu).click()
//             }
//         })
//     })
// }

function verifyToggle(){
    cy.get('.oxd-main-menu-button').then(menu=>{
        cy.wrap(menu).find('.oxd-icon').invoke('attr','class').then(attr=>{
            if(attr.includes('right')){
                cy.wrap(menu).click()
            }
        })
    })
}

export class navigate{
    tabList(tab){
        verifyToggle()
        cy.contains('a',tab).click()
        
    }
}