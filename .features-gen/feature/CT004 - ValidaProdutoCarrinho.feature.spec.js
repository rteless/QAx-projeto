// Generated from: feature\CT004 - ValidaProdutoCarrinho.feature
import { test } from "playwright-bdd";

test.describe('Validar produto no carrinho', () => {

  test('Validar produto no carrinho', async ({ Given, When, Then, And, page }) => { 
    await Given('o usuario está na página de produtos', null, { page }); 
    await When('adicionar o produto "Sauce Labs Backpack" ao carrinho'); 
    await And('clica no ícone do carrinho'); 
    await Then('o produto "Sauce Labs Backpack" deve estar presente no carrinho', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('feature\\CT004 - ValidaProdutoCarrinho.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given o usuario está na página de produtos","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When adicionar o produto \"Sauce Labs Backpack\" ao carrinho","stepMatchArguments":[{"group":{"start":20,"value":"\"Sauce Labs Backpack\"","children":[{"start":21,"value":"Sauce Labs Backpack","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And clica no ícone do carrinho","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then o produto \"Sauce Labs Backpack\" deve estar presente no carrinho","stepMatchArguments":[{"group":{"start":10,"value":"\"Sauce Labs Backpack\"","children":[{"start":11,"value":"Sauce Labs Backpack","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end