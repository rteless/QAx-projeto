// Generated from: feature\CT002 - ValidacaoTela.feature
import { test } from "playwright-bdd";

test.describe('Validação da Tela de Login', () => {

  test('Validar elementos da tela de login', async ({ Given, Then, page }) => { 
    await Given('o usuario está na página de login', null, { page }); 
    await Then('os elementos da tela de login devem estar visíveis e corretos'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('feature\\CT002 - ValidacaoTela.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":2,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given o usuario está na página de login","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":4,"keywordType":"Outcome","textWithKeyword":"Then os elementos da tela de login devem estar visíveis e corretos","stepMatchArguments":[]}]},
]; // bdd-data-end