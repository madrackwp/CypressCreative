describe("This is a test for visual testing", () =>{
  it("Blog Body Screenshot Test", ()=>{
    cy.visit("https://us.creative.com/blog/")
    cy.get(".bg-blog-body").toMatchImageSnapshot({"name":"Desktop: Blog body"});
  })

  it("Blog entry screenshot test", ()=>{
    cy.get(".blog-item").first().toMatchImageSnapshot({"name":"Desktop: Blog Entry"})
  })

  it("Repeat the tests for tablet view", () =>{
    cy.viewport("ipad-2")
    cy.get(".bg-blog-body").toMatchImageSnapshot({"name":"Tablet: Blog body"});
    cy.get(".blog-item").first().toMatchImageSnapshot({"name":"Tablet: Blog Entry"})
  })

  it("Repeat tests for mobile view", ()=>{
    cy.viewport("iphone-xr")
    cy.get(".bg-blog-body").toMatchImageSnapshot({"name":"Mobile: Blog body"});
    cy.get(".blog-item").first().toMatchImageSnapshot({"name":"Mobile: Blog Entry"})
  })
})