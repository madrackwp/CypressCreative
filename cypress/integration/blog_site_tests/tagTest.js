describe("This test will check the functionality of the blog tags", ()=>{
  it("Visit the site", () =>{
    cy.visit("https://us.creative.com/blog/")
  })
  var tag;
  it("Find the first tag", ()=>{
    cy.get('#__nuxt').find('.blog-tags').last().then((elm)=>{
      tag = elm.text()
    }).click('left')
    
  })

  it(`the page H2 should have tag selected`, () =>{
    cy.get("h2 > span").should('have.text', tag)
  })

  it(`The page should have filtered to have the selected tag`, ()=>{
    cy.get(".blog-item").each($event =>{
      cy.wrap($event).within(()=>{
        cy.get(".blog-tags").should('have.text', tag)
      })
    })
  })
})