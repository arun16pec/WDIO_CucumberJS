import { Given,When,Then } from "@wdio/cucumber-framework";
import successAccountpage from "../pageobjects/successAccountpage";
import { JSONParser } from "../utils/JSONparser";
import homeaccountpage from "../pageobjects/homeaccountpage";

Then(/^verify the account is created as per (.*)$/,async(datapath)=>{
    let testdata=JSONParser(datapath)
    successAccountpage.validateSuccessMessage()
    successAccountpage.continueLogin()
    homeaccountpage.validateLoginUser(testdata.first_name,testdata.last_name)
    browser.pause(150000)
    homeaccountpage.deleteAccount()
})