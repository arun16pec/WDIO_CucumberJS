import fs from 'fs'
import { JSONParser } from '../utils/JSONparser'
// import userregisterData from "../testdata/userregistration.json"

class SignUpPage{
    get logInButton(){return $('//a[contains(@href,"login")]')}
    get newUserSignup(){return $('//h2[text()="New User Signup!"]')}
    get name(){return $('//input[@name="name"]')}
    get emailId(){return $('//input[@data-qa="signup-email"]')}
    get signUpButton(){return $('//button[@data-qa="signup-button"]')}
    async clickSignUpButton(){
    // browser.pause(50000)
    await (await this.logInButton).click()
    }
    async verifyTitle(){
        const pageTitle=await(browser.getTitle())
        await expect(pageTitle).toEqual("Automation Exercise - Signup / Login")
    }
    async enterUserDetails(name,email_address){
    //    let testData=JSONParser(datapath)
       await (await this.name).setValue(name)
       console.log(name)
       await(await this.emailId).setValue(email_address)
       await (await this.signUpButton).click()

    }

}export default new SignUpPage()