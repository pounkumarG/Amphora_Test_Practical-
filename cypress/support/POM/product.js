class ProductDetails{
    constructor(){
        this.Url="https://amphora.net/",
        this.clickproductbuttton='nav [id="menu-item-32"]',
        this.productone='Symphony CTRM',
        this.producttwo='Alchemy CTRM',
        this.productthree='Trade confirmations manager',
        this.productfour='Freight manager',
        this.productfive='Claims manager',
        this.productsix='Symphony Credit',
        this.assert='https://amphora.net/product/symphony-credit/'

    }
    visit(){
        cy.viewport(1920,1080)
        cy.visit(this.Url);
    }
    productButtonClick(){
        cy.get(this.clickproductbuttton).invoke('show').click()
  }
   clickFirstProduct(){
       cy.contains(this.productone).click({force:true})
       cy.go('back');
  }
   clickSecondProduct(){
      cy.contains(this.producttwo).click({force:true})
      cy.go('back');
  }
   clickThirdProduct(){
      cy.contains(this.productthree).click({force:true})
      cy.go('back');
  }
   clickFourthProduct(){
      cy.contains(this.productfour).click({force:true})
      cy.go('back');
  }
   clickFivethProduct(){
      cy.contains(this.productfive).click({force:true})
      cy.go('back');
  }
   clickSixthProduct(){
      cy.contains(this.productsix).click({force:true})
  }
   toCheckAssert(){
      cy.url().should('include',this.assert)
  }

}
export default new ProductDetails();