describe("There are many fields on the pdt page, we need to ensure that all elements are working", () =>{
  it('Enter the product page', () => {
    cy.visit('http://localhost:3000/products')
  });

  it("The Countries, Lauguages, Product name and support name fields should be disabled", ()=>{
    cy.contains("Countries").find('input').should('be.disabled')
    cy.contains("Languages").find('input').should('be.disabled')
    cy.get("#input-8")
      .should('be.disabled')
    cy.get('#input-9')
      .should('be.disabled')   
  })

  it("Get the Master SKU text input and check if it is working", () =>{

    cy.get("#input-1").should('have.value', 'xxx')
    cy.get('#input-1').clear().type("product-name").should('have.value','product-name')
  })

  it("Check model text input", () =>{
    it("Get the Master SKU text input and check if it is working", () =>{

      cy.get("#input-2").should('have.value', 'A')
      cy.get('#input-2').clear().type("module-name").should('have.value','module-name')
    })
  })

  it("Check weight text input", () =>{
    cy.get("#input-3").should('have.value', '68')
      cy.get('input#input-3').clear().type("50kg").should('have.value','50kg')
  })

  it("Check EOSL selection input", () =>{
    // cy.get("select#input-3").select([0,1])
    cy.get("select#input-3").select(0).should("have.value", '1 - Active')
    cy.get("select#input-3").select(1).should("have.value", '2 - EOSL')
  })

  it("Check sites tag input field and the corresponding countries", () =>{
    cy.get(".v-select.vs--searchable .vs__selected-options ")
      .children('.btn')
      .should(($btn)=>{
        expect($btn).to.have.length(2)
        expect($btn.eq(0)).to.contain("nonpremiumstore.com")
        expect($btn.eq(1)).to.contain("premiumstore.com")
      })

    cy.get(".v-select.vs--searchable .vs__selected-options")
      .children('.btn')
      .should((children) => {
        const classList1 = Array.from(children[0].classList);
        const classList2 = Array.from(children[1].classList);
        return classList1.includes('white') && classList2.includes('white')
      })
      cy.get(".v-select.vs--searchable .vs__selected-options")
      .children('.btn')
      .contains(" nonpremiumstore.com ")
      .parent()
      .click()
      .should('have.class','green')
      cy.get(".v-select.vs--searchable .vs__selected-options")
      .children('.btn')
      .contains(" premiumstore.com ")
      .parent()
      .should('have.class','white')


      cy.contains("Countries").find(".btn").should((buttons) =>{
        expect(buttons).to.have.length(1)
        expect(buttons.eq(0)).to.contain("sg - Singapore")
      })

      cy.get(".v-select.vs--searchable .vs__selected-options")
      .children('.btn')
      .contains(" premiumstore.com ")
      .parent()
      .click()
      .should('have.class','green')
      cy.get(".v-select.vs--searchable .vs__selected-options")
      .children('.btn')
      .contains(" nonpremiumstore.com ")
      .parent()
      .should('have.class','white')

      cy.contains("Countries").children().children().children().children(".btn").should((buttons) =>{
        expect(buttons).to.have.length(3)
        expect(buttons.eq(0)).to.contain("sg - Singapore")
        expect(buttons.eq(1)).to.contain("uk - United Kingdom")
        expect(buttons.eq(2)).to.contain("jp - Japan")
  
      })
  })

  it("Add a new country to the country field", ()=>{
    cy.contains("Countries").find('input').click().type('Canada')
    cy.contains("Countries").find('ul').children('li').should((countries) => {
      expect(countries).to.have.length(65)
      expect(countries.eq(1)).to.have.length(1)
      expect(countries.eq(1).find('span')).to.contain("Canada")
      countries.eq(1).click()
    })
    cy.contains("Countries").find(".btn").should((buttons) =>{
      expect(buttons).to.have.length(4)
      expect(buttons.eq(0)).to.contain("sg - Singapore")
      expect(buttons.eq(1)).to.contain("uk - United Kingdom")
      expect(buttons.eq(2)).to.contain("jp - Japan")
      expect(buttons.eq(3)).to.contain("CA - Canada")

    })    
  })

  it("Check the languages input", ()=>{
    cy.contains("Languages").find('input').click()
    cy.contains("Languages").find('ul').children('li').should((lang) => {
      expect(lang).to.have.length(27)
      expect(lang.eq(0).find('span')).to.contain("English")
      lang.eq(0).click()
      // console.log(lang.eq(1))
    })
    cy.contains("Languages").find(".vs__selected-options").children().should((options) => {
      expect(options).to.have.length(2)
      expect(options.eq(0)).to.contain("en")
    })
  })

  it("Check both Product Name and Support Name are now working", () =>{
    cy.get("#input-8").should('not.be.disabled').click().type("Katana V2").should('have.value', 'Katana V2')
    cy.get("#input-9").should('not.be.disabled').click().type("Katana Version 2").should('have.value', 'Katana Version 2')
  })

  it("Now the form result at the bottom should match the info we placed in the fields above", () => {
    cy.get(".card").get('.m-0').should((text)=>{
      expect(text).to.contain('"site": "premiumstore.com"')
      expect(text).to.contain('"country": "ca"')
      expect(text).to.contain('"language": "en"')
      expect(text).to.contain('"productname": "Katana V2"')
      expect(text).to.contain('"supportname": "Katana Version 2"')

    })
  })

  it("Adding child elements", ()=>{
    cy.get('.container').contains("Add Child Products").click()
    cy.get("#__BVID__25___BV_modal_content_").should('be.visible').find('input').click().type("Audio Jack").should('have.value',"Audio Jack")
    cy.get("#__BVID__25___BV_modal_content_").should('be.visible').find('button').contains("Add").click()
    cy.get("#child-products").children().should((child) =>{
      expect(child).to.have.length(3)
      expect(child.eq(2)).to.contain("Audio Jack")
    })

    cy.get(".card").get('.m-0').should((text)=>{
          expect(text).to.contain('"Audio Jack"')    
        })
    
  })
  
  
})