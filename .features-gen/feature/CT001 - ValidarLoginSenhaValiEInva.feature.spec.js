// Generated from: feature\CT001 - ValidarLoginSenhaValiEInva.feature
import { test } from "playwright-bdd";

test.describe('Login Functionality', () => {

  test('Sucesso login com credenciais válidas', async ({ Given, When, Then, And, page }) => { 
    await Given('o usuario está na página de login', null, { page }); 
    await When('o usuario entra com credenciais válidas'); 
    await And('clica no botão de login'); 
    await Then('o usuario deve ser redirecionado para a página de produtos'); 
  });

  test('Falha no login com credenciais inválidas', async ({ Given, When, Then, And, page }) => { 
    await Given('o usuario está na página de login', null, { page }); 
    await When('o usuario entra com credenciais inválidas'); 
    await And('clica no botão de login'); 
    await Then('uma mensagem de erro deve ser exibida indicando credenciais inválidas'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('feature\\CT001 - ValidarLoginSenhaValiEInva.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given o usuario está na página de login","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When o usuario entra com credenciais válidas","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And clica no botão de login","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then o usuario deve ser redirecionado para a página de produtos","stepMatchArguments":[]}]},
  {"pwTestLine":13,"pickleLine":9,"tags":[],"steps":[{"pwStepLine":14,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given o usuario está na página de login","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When o usuario entra com credenciais inválidas","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"And clica no botão de login","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then uma mensagem de erro deve ser exibida indicando credenciais inválidas","stepMatchArguments":[]}]},
]; // bdd-data-end