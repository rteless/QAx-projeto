Feature: Validar produto no carrinho

Scenario: Validar produto no carrinho
    Given o usuario está na página de produtos
    When adicionar o produto "Sauce Labs Backpack" ao carrinho
    And clica no ícone do carrinho
    Then o produto "Sauce Labs Backpack" deve estar presente no carrinho