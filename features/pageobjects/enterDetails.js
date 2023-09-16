import fs from 'fs'
import { click, select, selectByText, setText } from '../utils/command'

class EnterDetails{
//locator
get genderTitle(){return ($$('//input[contains(@id,"id_gender")]'))}
get password(){return ($('//input[@id="password"]'))}
get days(){ return($('//select[@id="days"]'))}
get months(){ return($('//select[@id="months"]'))}
get years(){ return($('//select[@id="years"]'))}
get firstName(){return ($('//input[@id="first_name"]'))}
get lastName(){return ($('//input[@id="last_name"]'))}
get company(){return($('//input[@id="company"]'))}
get address1(){return($('//input[@id="address1"]'))}
get address2(){return($('//input[@id="address2"]'))}
get country(){return($('//select[@id="country"]'))}
get state(){return($('//input[@id="state"]'))}
get city(){return($('//input[@id="city"]'))}
get zipcode(){return($('//input[@id="zipcode"]'))}
get mobileNumber(){return($('//input[@id="mobile_number"]'))}
get newsLetter(){return($('//input[@id="newsletter"]'))}
get optIn(){return($('//input[@id="optin"]'))}
get createAccount(){return($('//button[@data-qa="create-account"]'))}

async enterTitle(title){


(await this.genderTitle).every(async element => {
     let getTitleValue=await element.getAttribute("value")
     if(getTitleValue===title){
        await element.click();
        return false
     }else{
     return true
     }
});
}
async enterPassword(password){
    await setText(this.password,password)
}
async enterDOB(day,month,year){
    await selectByText(this.days,day)
    await selectByText(this.months,month)
    await selectByText(this.years,year)
}

async enterPersonalDetails(firstname,lastname,company){
    
    await setText(this.firstName,firstname)
    await setText(this.lastName,lastname)
    await setText(this.company,company)
}
async enterAddressDetails(address_1,address_2,country,state,city,zipcode){
    await setText(this.address1,address_1)
    await setText(this.address2,address_2)
     browser.pause(100000)
     await setText(this.state,state)
    await setText(this.city,city)
    await setText(this.zipcode,zipcode)
    await selectByText(this.country,country)
    
    browser.pause(10000)
    
}
async enterContactDetails(mobileNumber){
    await setText(this.mobileNumber,mobileNumber)
}
async checknewLetterAndOptin(){
    await select(this.newsLetter)
    await select(this.optIn)
}
async clickSubmitBtn(){
    await click(this.createAccount)
}


}export default new EnterDetails()