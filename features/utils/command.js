export const setText=async (element,value)=>{
    browser.waitUntil(async()=>{await element.isDisplayed()},{timeout:40000})
    await (element).setValue(value)

}
export const selectByText=async(element,value)=>{
    await element.selectByVisibleText(value)
}
export const select=async(element)=>{
    await element.click()
}
export const click=async(element)=>{
    await element.click()
}
