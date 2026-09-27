import { LoginPage } from "../page/loginPage.js";
import { createBdd } from "playwright-bdd";

const { Given, Then, When } = createBdd();

let loginPage;

Given("o usuario está na página de login", async ({ page }) => {
  loginPage = new LoginPage(page);
  await loginPage.navegarParaLogin();
});

When("o usuario entra com credenciais válidas", async () => {
  await loginPage.preencherUsuario("standard_user");
  await loginPage.preencherSenha("secret_sauce");
});

When("clica no botão de login", async () => {
  await loginPage.clicarBotaoLogin();
});

Then("o usuario deve ser redirecionado para a página de produtos", async () => {
  await loginPage.verificarLoginBemSucedido();
});
