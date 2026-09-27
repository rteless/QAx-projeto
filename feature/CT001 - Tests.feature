Feature: Login Functionality

  Scenario: Sucesso login com credenciais válidas
    Given o usuario está na página de login
    When o usuario entra com credenciais válidas
    And clica no botão de login
    Then o usuario deve ser redirecionado para a página de produtos

  Scenario: Falha no login com credenciais inválidas
    Given o usuario está na página de login
    When o usuario entra com credenciais inválidas
    And clica no botão de login
    Then uma mensagem de erro deve ser exibida indicando credenciais inválidas