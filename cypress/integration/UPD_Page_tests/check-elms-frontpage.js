describe("Check if all elements in the form is working", function(){
  it('This will check if the form is responding', ()=>{
    cy.visit('http://localhost:3000/')
    cy.contains("UPD")
    cy.contains("Manage Products, Categories and Filters")
    cy.get("#name.form-control").type("abcd1234").should("have.value", "abcd1234")
    cy.get('.autocomplete') // This checks the height of the autocomplete element, if it is zero, that means that there is zero products returned based on the query in the field
      .invoke('outerHeight')
      .should('eq',0)
    
    cy.get("#name.form-control").type(" input 123").should("have.value", "abcd1234 input 123")
    cy.get('.autocomplete') // This checks the height of the autocomplete element, if it is zero, that means that there is zero products returned based on the query in the field
      .invoke('outerHeight')
      .should('eq',0)
    cy.get(".btn")
  })
})