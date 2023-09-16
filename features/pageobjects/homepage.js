class HomePage{


async verifyTitle(){
    // browser.waitUntil(async()=>(browser.isLoading)
    const pageTitle= await browser.getTitle()
    await expect(pageTitle).toEqual("Automation Exercise")
}
async openAutomationPractiseURL()
{
 browser.url("https://automationexercise.com/");
  browser.pause(60000);
browser.maximizeWindow();
}

}export default new HomePage()