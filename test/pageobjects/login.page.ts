import Page from './page';

class LoginPage extends Page {

    get inputEmail () { return $('[data-e2e="emailInput"] input') }
    get inputPassword () { return $('[data-e2e="passwordInput"] input') }
    get btnSubmit () { return $('#loginBtn') }

    async login(email: string, password: string) {
        await (await this.inputEmail).setValue(email);
        await (await this.inputPassword).setValue(password);
        await (await this.btnSubmit).click();
    }

    open() {
        return super.open('login');
    }
}

export default new LoginPage();
