import { click } from "../utils/command"

class SuccessAccPage{
    get successMsg(){return($('//b[text()="Account Created!"]'))}
    get continueButton(){return($('//a[text()="Continue"]'))}
    async validateSuccessMessage(){        
        expect(await this.successMsg).toHaveTextContaining("Account Created!")
    }
    async continueLogin(){
        await click(this.continueButton)
    }

}
export default new SuccessAccPage()