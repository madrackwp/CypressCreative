describe("This is a test for visual testing", () =>{
  const imageConfig = {              
    "threshold": 0.2,                      // Amount in pixels or percentage before snapshot image is invalid
    "thresholdType": "percent",             // Can be either "pixel" or "percent"
  }

  it("Blog Body Screenshot Test", ()=>{
    cy.visit("https://us.creative.com/blog/")
    cy.get(".bg-blog-body")
      .toMatchImageSnapshot({
        "name":"Desktop: Blog body",
        "imageConfig": imageConfig
      });
  })

  it("Blog entry screenshot test", ()=>{
    cy.get(".blog-item").first()
      .toMatchImageSnapshot({
        "name":"Desktop: Blog Entry",
        "imageConfig": imageConfig
      })
  })

  it("Repeat the tests for tablet view", () =>{
    cy.viewport("ipad-2")
    cy.get(".bg-blog-body")
      .toMatchImageSnapshot({
        "name":"Tablet: Blog body",
        "imageConfig": imageConfig
      });
    cy.get(".blog-item").first()
      .toMatchImageSnapshot({
        "name":"Tablet: Blog Entry",
        "imageConfig": imageConfig
      })
  })

  it("Repeat tests for mobile view", ()=>{
    cy.viewport("iphone-xr")
    cy.get(".bg-blog-body")
      .toMatchImageSnapshot({
        "name":"Mobile: Blog body"
      });
    cy.get(".blog-item").first()
      .toMatchImageSnapshot({
        "name":"Mobile: Blog Entry",
        "imageConfig": imageConfig
      })
  })
})