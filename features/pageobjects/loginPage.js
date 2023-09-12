class LogInPage{
    get loginName(){return $("//input[@id='loginFrm_loginname']")}
    get loginPassword(){ return $("//input[@id='loginFrm_password']")}
    get submitBtn(){ return $("//button[@title='Login']")}
    async openLoginPage(){
        await browser.url("https://automationteststore.com/index.php?rt=account/login")
        await browser.maximizeWindow();
    }
    async enterUserDetails(){
        // await browser.waitUntil(async()=>(await (await this.loginName).isDisplayed),{timeout:50000})
         await (await this.loginName).setValue("Arun16pec");
         await (await this.loginPassword).setValue("Nalina1692!")
         await (await this.submitBtn).click()
    }

}export default new LogInPage()