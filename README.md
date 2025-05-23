# Validador de Notas com Integração Contínua

Este projeto consiste no desenvolvimento de uma aplicação web simples para lançamento e validação de notas de alunos, cálculo de médias e determinação da situação (aprovado, reprovado, recuperação). O projeto integra conceitos de programação web, testes automatizados com Jest e um pipeline de Integração Contínua (CI) com GitHub Actions e análise de qualidade de código pelo SonarCloud.

## 📊 Status do Projeto e Qualidade

[![Status da CI (GitHub Actions)](https://github.com/GabrielDanteCandido/Atividade-CI/actions/workflows/ci.yml/badge.svg)](https://github.com/GabrielDanteCandido/Atividade-CI/actions)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=GabrielDanteCandido_Atividade-CI&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=GabrielDanteCandido_Atividade-CI)
[![Cobertura de Testes (SonarCloud via Jest)](https://sonarcloud.io/api/project_badges/measure?project=GabrielDanteCandido_Atividade-CI&metric=coverage)](https://sonarcloud.io/summary/overall?id=GabrielDanteCandido_Atividade-CI)

## 🎯 Objetivo do Projeto

Desenvolver um projeto completo que integre conceitos de programação web, testes automatizados e integração contínua. Você deverá construir uma aplicação simples que permita o lançamento de notas de alunos, com validações, cálculos e exibição de resultados, além da configuração de um pipeline CI com verificação automática de qualidade de código.

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Para a estrutura do formulário web.
* **CSS3:** Para estilização da interface (arquivo `style.css`).
* **JavaScript (ES6+):** Para a lógica de validação, cálculos e manipulação do DOM (arquivos `logic.js` e `app.js`).
* **Jest:** Framework de testes para garantir a qualidade da lógica principal do sistema (arquivo `logic.test.js`).
* **GitHub Actions:** Para automação do pipeline de Integração Contínua (CI) - instalação de dependências, execução de testes e envio de dados para o SonarCloud.
* **SonarCloud:** Para análise estática de código, verificação de qualidade, cobertura de testes e detecção de code smells.

## ✨ Funcionalidades

* **Formulário Web:**
    * Campo para Nome do Aluno.
    * Campos para Nota 1 e Nota 2.
    * Botão para calcular a média.
* **Validações:**
    * Notas devem ser valores numéricos entre 0 e 10.
* **Cálculos:**
    * Cálculo da média aritmética simples das duas notas.
* **Determinação da Situação:**
    * Média < 5: **Reprovado**
    * Média >= 5 e < 7: **Recuperação**
    * Média >= 7: **Aprovado**
* **Exibição de Resultados:**
    * A média calculada e a situação do aluno são exibidas na tela.

## 🚀 Instruções para Execução Local

1.  **Pré-requisitos:**
    * Node.js e npm (ou yarn) instalados.
    * Git instalado.
2.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/GabrielDanteCandido/Atividade-CI.git](https://github.com/GabrielDanteCandido/Atividade-CI.git)
    cd Atividade-CI
    ```
3.  **Instale as dependências do projeto:**
    ```bash
    npm install
    ```
4.  **Para visualizar a aplicação:**
    Abra o arquivo `index.html` em seu navegador web de preferência.
5.  **Para executar os testes (Jest):**
    ```bash
    npm test
    ```
    Este comando executará os testes definidos em `logic.test.js` e exibirá os resultados no terminal. Um relatório de cobertura será gerado na pasta `coverage/` (você pode abrir `coverage/lcov-report/index.html` no navegador para ver detalhes).

## ☁️ Projeto no SonarCloud

A análise de qualidade de código deste projeto pode ser acompanhada através do seguinte link:
[https://sonarcloud.io/project/overview?id=GabrielDanteCandido_Atividade-CI](https://sonarcloud.io/project/overview?id=GabrielDanteCandido_Atividade-CI)
