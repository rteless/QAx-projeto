import { LoginPage } from "../page/loginPage.js";
import { createBdd } from "playwright-bdd";

const { Given, Then, When } = createBdd();

let loginPage;

Given("o usuario está na página de login", async ({ page }) => {
  loginPage = new LoginPage(page);
  await loginPage.navegarParaLogin();

  console.log("✅Página de login carregada com sucesso.");
});

When("o usuario entra com credenciais válidas", async () => {
  await loginPage.preencherUsuario("standard_user");
  console.log("✅ Usuário preenchido com sucesso.");
  await loginPage.preencherSenha("secret_sauce");
  console.log("✅ Senha preenchida com sucesso.");
});

When("clica no botão de login", async () => {
  await loginPage.clicarBotaoLogin();
  console.log("✅ Botão de login clicado com sucesso.");
});

Then("o usuario deve ser redirecionado para a página de produtos", async () => {
  await loginPage.verificarLoginBemSucedido();
});

When("o usuario entra com credenciais inválidas", async ({}) => {
  await loginPage.preencherUsuario("Rodrigo Teles");
  console.log("✅ Usuário preenchido com sucesso.");
  await loginPage.preencherSenha("123456");
  console.log("✅ Senha preenchida com sucesso.");
});

Then(
  "uma mensagem de erro deve ser exibida indicando credenciais inválidas",
  async ({}) => {
    await loginPage.verificarMensagemErro();
    console.log("✅ Mensagem de erro exibida com sucesso.");
  },
);

Then(
  "os elementos da tela de login devem estar visíveis e corretos",
  async ({}) => {
    await loginPage.verificarElementosVisiveis();
    console.log("✅ Elementos da tela de login verificados com sucesso.");
  },
);

Then("a mensagem {string} deve ser exibida", async ({}, arg) => {
  await loginPage.verificarMensagemErro(arg);
  console.log("✅ Mensagem de erro exibida com sucesso.");
});
