describe('Checks whether the navigation works correctly', () => {
  it("Visit the site", () =>{
    cy.visit("https://us.creative.com/blog/")
  })


  var title;
  it("Click the first post", ()=>{

    cy.get('#__nuxt').find('h3').first().then((text) => {
      test = text.text()
      console.log(title)
    }).click()
  })
  
  it("The page should be the correct blog post", ()=>{
    cy.get("h1").should('have.text', title)

  })

  it("Go back", () =>{
    cy.visit("https://us.creative.com/blog/")
  })
  it("Click the first post, using the image instead of the title ", ()=>{
    cy.get('#__nuxt').find("img").first().click()
  })
  
  it("The page should be the correct blog post", ()=>{
    cy.get("h1").should('have.text', title)
  })

});