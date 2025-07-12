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
    uploadandDownload() {
        cy.fixture('asad.pdf', 'binary')
            .then(Cypress.Blob.binaryStringToBlob)
            .then(fileContent => {
                cy.get('.oxd-file-input').attachFile({
                    fileContent,
                    fileName: 'asad.pdf',
                    mimeType: 'file/pdf'
                });
            });
        }
    textfield(heading,value){
        cy.contains('.oxd-input-group',heading).find('[placeholder="Type here"]').type(value)
    }
}