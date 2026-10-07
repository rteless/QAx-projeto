// Generated from: feature\CT003 - ValidarValidarCampoObrigatorio.feature
import { test } from "playwright-bdd";

test.describe('Validar login com campos obrigatórios vazios', () => {

  test('Validar login com campos obrigatórios vazios', async ({ Given, Then, And, page }) => { 
    await Given('o usuario está na página de login', null, { page }); 
    await And('clica no botão de login'); 
    await Then('a mensagem "Epic sadface: Username is required" deve ser exibida'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('feature\\CT003 - ValidarValidarCampoObrigatorio.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given o usuario está na página de login","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"And clica no botão de login","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then a mensagem \"Epic sadface: Username is required\" deve ser exibida","stepMatchArguments":[{"group":{"start":11,"value":"\"Epic sadface: Username is required\"","children":[{"start":12,"value":"Epic sadface: Username is required","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end