Feature: Automate Amphora Application

Background: 
Given user Launch The Amphora Url

Scenario: Click Product One By One
When user Click The Product Button And It Will Show For All Product
And user Click The First Product And Navigate to Next Page
And user Click The Second Product And Navigate to Next Page
And user Click The Third Product And Navigate to Next Page
And user Click The Fourth Product And Navigate to Next Page
And user Click The Fiveth Product And Navigate to Next Page
And user Click The Sixth Product And Navigate to Next Page
Then user Check Finaly Assert

Scenario: Login functionallity
When user Click The Signup Button And It Will Go For Signup Page
And user Enter The Email In
And user Enter The Fname For
And user Enter The Lname For
And Finally Click The Submit Button And It Navigate To Next Page
Then user Take The Some Conform Assert