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
            cy.get('.day-cell').not('.bounding-month').contains(futureDay).click()
        }
    })
    return assertDate
}

export class datePicker{

    selectCommonDate(dayFromToday){
        cy.contains('nb-card','Common Datepicker').find('input')
        .then(input =>{
            cy.wrap(input).click()
            let assertDate=selectDayFromCurrent(dayFromToday)
            cy.wrap(input).invoke('prop','value').should('contain',assertDate)
            cy.wrap(input).should('have.value',assertDate)
        })
    }

    selectRangeDate(firstDate, secondDate){
        cy.contains('nb-card','Datepicker With Range').find('input')
        .then(input =>{
            cy.wrap(input).click()
            let assertFirstDate=selectDayFromCurrent(firstDate)
            let assertSecondDate=selectDayFromCurrent(secondDate)
            const finalDate= assertFirstDate+' - '+assertSecondDate
            cy.wrap(input).invoke('prop','value').should('contain',finalDate)
            cy.wrap(input).should('have.value',finalDate)
        })
    }

}
export const onDatePicker= new datePicker()