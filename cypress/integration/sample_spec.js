describe("My First test", function(){
  it('Click an element', function(){
    //Arrange - Set up the initial app state
    cy.visit('https://example.cypress.io')
    //Act - take an action
    cy.contains('type').click()
    //Assert - make an assertion
    cy.url().should('include', '/commands/actions')

    cy.get('.action-email')
      .type('helloworld')
      .should('have.value', 'helloworld')
  })
})