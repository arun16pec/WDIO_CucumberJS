import{Given,When,Then} from "@wdio/cucumber-framework"
import homepage from "../pageobjects/homepage"
import signupPage from "../pageobjects/signupPage"
import enterDetailsPage from "../pageobjects/enterDetails"
import { JSONParser } from "../utils/JSONparser"



Given(/^Launch the AutomationExerciseURL$/,async()=>{
    homepage.openAutomationPractiseURL()
    browser.pause(10000)
    await signupPage.clickSignUpButton();
    // homepage.verifyTitle()
})
When(/^Click the signup button and enter (.*) user details$/,async(datapath)=>{
    let testdata=JSONParser(datapath)
    // signupPage.verifyTitle()
    // signupPage.clickSignUpButton()
    await signupPage.enterUserDetails(testdata.name,testdata.email_address);
})
Then(/^enter the user details (.*) for registration$/,async(datapath)=>{
let testdata=JSONParser(datapath)
await enterDetailsPage.enterTitle(testdata.title)
await enterDetailsPage.enterPassword(testdata.password)
await enterDetailsPage.enterDOB(testdata.birthDay,testdata.birthMonth,testdata.birthYear)
await enterDetailsPage.enterPersonalDetails(testdata.first_name,testdata.last_name,testdata.company)
await enterDetailsPage.enterAddressDetails(testdata.Address,testdata.Address_2,testdata.Country,testdata.State,testdata.City,testdata.zipCode)
await enterDetailsPage.enterContactDetails(testdata.mobileNumber)
await enterDetailsPage.checknewLetterAndOptin()
await enterDetailsPage.clickSubmitBtn()



})

