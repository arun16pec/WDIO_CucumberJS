import { Given,When,Then } from "@wdio/cucumber-framework";
import loginPage from "../pageobjects/loginPage.js"
import myAccountsPage from "../pageobjects/myAccounts.js"

Given(/^open the AutomationTestURL$/, async()=>{
    loginPage.openLoginPage()
})
When(/^login with username$/,async()=>{
await loginPage.enterUserDetails()
})
When(/^check the title$/,async()=>{
 await myAccountsPage.getPageTitle()
})