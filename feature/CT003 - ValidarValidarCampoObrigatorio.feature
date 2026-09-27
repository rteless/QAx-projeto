Feature: Validar login com campos obrigatórios vazios

Scenario: Validar login com campos obrigatórios vazios
    Given o usuario está na página de login
    And clica no botão de login
    Then a mensagem "Epic sadface: Username is required" deve ser exibida