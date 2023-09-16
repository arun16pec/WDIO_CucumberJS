import { click } from "../utils/command"

class HomeAccountPage{

    get loginMessage(){$('//*[contains(text(),"Logged in")]')}
    get deleteAccountlink(){return($('//a[contains(@href,"/delete_account")]'))}
     
    

    async validateLoginUser(firstName,lastName){
        expect(this.loginMessage).toHaveText(firstName+" "+lastName)
    }
    async deleteAccount(){
        await click(this.deleteAccountlink)
    }

}export default new HomeAccountPage()