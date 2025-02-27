import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";
import ProductDetails from "../../support/POM/product";
import SignUp from "../../support/POM/signup";
import testData from "../../fixtures/testData.json";

Given("user Launch The Amphora Url", ()=>{
     ProductDetails.visit();
})

When("user Click The Product Button And It Will Show For All Product",()=>{
     ProductDetails.productButtonClick();
})

And("user Click The First Product And Navigate to Next Page",()=>{
     ProductDetails.clickFirstProduct();
})

And("user Click The Second Product And Navigate to Next Page",()=>{
     ProductDetails.clickSecondProduct();
})

And("user Click The Third Product And Navigate to Next Page",()=>{
     ProductDetails.clickThirdProduct();
})

And("user Click The Fourth Product And Navigate to Next Page",()=>{
     ProductDetails.clickFourthProduct();
})

And("user Click The Fiveth Product And Navigate to Next Page",()=>{
     ProductDetails.clickFivethProduct();
})

And("user Click The Sixth Product And Navigate to Next Page",()=>{
     ProductDetails.clickSixthProduct();
})

Then("user Check Finaly Assert",()=>{
     ProductDetails.toCheckAssert();
})

When("user Click The Signup Button And It Will Go For Signup Page",()=>{
     SignUp.clickSignupButtonClick();
})

And("user Enter The Email In",()=>{
     SignUp.enterUserEmail(testData.useremail);
})

And("user Enter The Fname For",()=>{
     SignUp.enterFirstName(testData.firstname);
})

And("user Enter The Lname For",()=>{
     SignUp.enterLastName(testData.lastname);
})

And("Finally Click The Submit Button And It Navigate To Next Page",()=>{
     SignUp.clickSubmitButton();
})

Then("user Take The Some Conform Assert",()=>{
     SignUp.textAssert();
})