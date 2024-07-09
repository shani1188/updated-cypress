import { onDatePicker } from "./page_objects/datePickerPage"
import { formsubmit } from "./page_objects/formsubmit"
import { navigateTo } from "./page_objects/navigationPage"
import { onSmarttable } from "./page_objects/smartTable"
describe('test with page object',()=>{
beforeEach('',()=>{
  //  cy.visit('http://localhost:4300/')
  cy.openHomePage()
})
it('Verify Navigation across the pages',()=>{
    navigateTo.formLayoutPage()
    navigateTo.datePicker()
    navigateTo.dataTable()
    navigateTo.toaster()
    navigateTo.toolstip()

})

it('form and date',()=>{
    navigateTo.formLayoutPage()
    formsubmit.submitFormAndCalendar('shahrukh','shahrukh.asghar@email.com')
    formsubmit.submitBasicFormAndCalendar('shahrukh.asghar@email.com','admin1122')
    navigateTo.datePicker()
    onDatePicker.selectCommonDate(1)
    onDatePicker.selectRangeDate(7,14)
    navigateTo.dataTable()
    navigateTo.dataTable()
    onSmarttable.addNewRecord(1122,'shahrukh','asghar','shahrukh.asghar','shahrukh.asghar@gmail.com',28)
    onSmarttable.updateAge('shahrukh', 25)
    onSmarttable.deleteRow(1)

})


})