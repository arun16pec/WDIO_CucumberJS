class MyAccountsPage{

   async getPageTitle(){
        console.log(await browser.getTitle())
        // await expect(await browser.getTitle()).toHaveText("My Account")
    }
}export default new MyAccountsPage()