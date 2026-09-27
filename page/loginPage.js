import { expect } from "@playwright/test";
export class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator("#user-name");
    this.passwordInput = page.locator("#password");
    this.loginButton = page.locator("#login-button");
    this.expectedTitle = page.getByText("Products");
    this.errorMessage = page.locator(".error-message-container");
  }

  async navegarParaLogin() {
    await this.page.goto("https://www.saucedemo.com/");
  }

  async preencherUsuario(usuario) {
    await this.usernameInput.fill(usuario);
  }

  async preencherSenha(senha) {
    await this.passwordInput.fill(senha);
  }

  async clicarBotaoLogin() {
    await this.loginButton.click();
  }

  async verificarLoginBemSucedido() {
    await expect(this.expectedTitle).toBeVisible();
  }

  async verificarMensagemErro(mensagem) {
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toHaveText(mensagem);
  }

  async verificarElementosVisiveis() {
    await expect(this.usernameInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
    await expect(this.loginButton).toBeVisible();
  }
}
