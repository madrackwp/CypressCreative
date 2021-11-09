describe("Checking backend", function(){
  it("cy.request()", () => {
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
    
    cy.request("http://localhost:3308/upd/v2/countries/")
    .should((response) =>{
      expect(response.status).to.eq(200)
    })

    cy.request("http://localhost:3308/upd/v2/languages/")
      .should((response) =>{
        expect(response.status).to.eq(200)
      })

      cy.request("http://localhost:3308/upd/v2/categorytypes/")
      .should((response) =>{
        expect(response.status).to.eq(200)
      })


    
  })
})