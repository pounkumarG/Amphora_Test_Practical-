class SignUp{
    constructor(){
        this.button='[class="pre-footer__btn-wrap"] [class="btn btn--dark"]',
        this.useremail='[type="email"]',
        this.userfname='[name="contact[first_name]"]',
        this.userlname='[name="contact[last_name]"]',
        this.subbutton='[class="fserv-button-submit"]',
        this.assert='Thank you for signing up for our newsletter. We are thrilled to have you join our community. Every quarter, you will receive exclusive content designed to keep you informed about generic topics within the CTRM industry.'
    }
    clickSignupButtonClick(){
        cy.get(this.button).click()
    }
    enterUserEmail(email){
        cy.get(this.useremail).type(email)
    }
    enterFirstName(fname){
        cy.get(this.userfname).type(fname)
    }
    enterLastName(lname){
        cy.get(this.userlname).type(lname)
    }
    clickSubmitButton(){
        cy.get(this.subbutton).click()
    }
    textAssert(){
        cy.contains(this.assert).should("be.visible")
    }
}
export default new SignUp; 
  