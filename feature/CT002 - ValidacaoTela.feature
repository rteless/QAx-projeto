Feature: Validação da Tela de Login
  Scenario: Validar elementos da tela de login
    Given o usuario está na página de login
    Then os elementos da tela de login devem estar visíveis e corretos
    