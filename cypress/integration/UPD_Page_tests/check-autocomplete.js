describe("Check if the auto correct works", function(){
  it('Enter the product page', () => {
    cy.visit('http://localhost:3000/')
  });

  it("Check that the database is loaded first", () =>{
    cy.request("http://localhost:3308/upd/v2/products/")
      .should((response) =>{
        expect(response.status).to.eq(200)
      })
    cy.request("http://localhost:3308/upd/v2/categories/")
      .should((response) =>{
        expect(response.status).to.eq(200)
      })
    cy.request("http://localhost:3308/upd/v2/sites/")
      .should((response) =>{
        expect(response.status).to.eq(200)
      })
  })

  it("Enter 'Katana' and check the autocomplete query, it should contain results that have Katana", () => {
    cy.get('#name')
      .type("katana")
    cy.wait(5000)
    cy.get('.autocomplete')
      .invoke('outerHeight')
      .should('be.gt',0)

    cy.get('.autocomplete')
      .contains("Katana") //This is an assertion that will fail if the item is not found in the auto complete
  });

  it("Clear field and check that the autocomplete is gone", () => {
    cy.get('#name')
      .clear() 
    cy.get('.autocomplete')
      .invoke('outerHeight')
      .should('be.lte',0)
  })
    
  it("Repeat the same with 'Pebble' query", ()=>{
    cy.get("#name")
      .type("pebble")
    cy.wait(5000)
    cy.get('.autocomplete')
      .contains('Creative Pebble')
    cy.get('#name').clear()
    cy.get('.autocomplete')
      .invoke('outerHeight')
      .should('be.gte',0)
  })

  it("Now we use an invalid query of 'Hello world' and we should not see an autocomplete query", () => {
    cy.get("#name").type("hello world")
    cy.wait(5000)
    cy.get('.autocomplete').invoke('outerHeight').should('eq', 0)
  })
})