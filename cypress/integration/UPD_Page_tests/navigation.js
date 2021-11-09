describe("Checking the navigation between the front and pdt page", function(){
  it('Enter the product page', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#name')
      .type("katana")
    cy.wait(5000)
    cy.get('.autocomplete')
      .contains("Katana") //This is an assertion that will fail if the item is not found in the auto complete
      .click()
    cy.url().should("eq", "http://localhost:3000/products")
  });
})