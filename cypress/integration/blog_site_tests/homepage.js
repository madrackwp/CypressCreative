describe("This test looks at the format of the blogs posts. There must be an image, blog date, blog tag, a title and a short paragraph describing the post ",()=>{
  it("Visit the site", () =>{
    cy.visit("https://us.creative.com/blog/")

    
  })

  it("Check the website for the appropriate elements", ()=>{
    cy.get("h1")
    cy.get(".bg-blog-body")

    cy.get('#__nuxt').find(".blog-item").each($event => {
      cy.wrap($event).within(()=>{
        cy.get(".blog-date")
        cy.get("h3")
        cy.get("p")
        cy.get(".blog-tags")
        cy.get('img')
      })
    })
  })
})