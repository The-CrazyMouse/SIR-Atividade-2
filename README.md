[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/5qMbUIxC)
[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=16871681)
# Atividade Prática #2 (RESTful API)
This info in english [README.EN.md](README.EN.md)

## Objetivo:

Neste atividade prática, pretende-se que desenvolva uma API RESTful para gerir informações de uma aplicação fictícia. 

A API deverá suportar operações CRUD (Create, Read, Update, Delete) e pode ser implementada utilizando a biblioteca lowDB, uma base de dados baseada em documentos gerida diretamente em JavaScript. 

Esta atividade tem como objetivo reforçar o domínio de conceitos como manipulação de rotas e desenvolvimento de APIs RESTful.

------

## Requisitos do Projeto

1. **Setup do Projeto**
   - Configure um projeto Node.js com Express
   - Instale a biblioteca lowDB https://github.com/typicode/lowdb
   - Estruture a aplicação de forma modular, organizando as rotas
     - considere usar **routers** do express
2. **Modelo de Dados**
   - A API deve simular a gestão de um recurso, como, por exemplo, "Students" ou "Books" ou "Courses". Defina um modelo de dados básico, incluindo:
     - **ID**: Um identificador único (string ou número).
     - **Nome**: Um campo representando o nome do recurso.
     - **Atributos adicionais**: Adicione pelo menos mais dois atributos relevantes ao tipo de recurso escolhido (e.g., para Students, adicione "Course" e "Year").
3. **Implementação de Rotas CRUD**
   - Implemente as seguintes rotas na API (supondo **students**):
     - **GET /students** - Retorna todos os itens.
     - **GET /students/{id}** - Retorna um item específico por **id**.
     - **POST /students** - Cria um novo item.
     - **PUT /students/{id}** -  Atualiza os dados de um item existente por **id**.
     - **DELETE /students/{id}** - Remove um item específico por **id**.
   - A aplicação deverá ainda ter rotas para outras páginas html estáticas
     - **GET /** - retorna uma página de demo da API (index.html) 
     - **GET /about** - retorna uma página com informação dos autores
     - **GET /doc** - retorna uma página com breve documentação
4. **Validação e Tratamento de Erros**
   - Implemente validações de dados garantindo que todos os campos obrigatórios são fornecidos.
   - Retorne http status codes apropriados https://www.restapitutorial.com/introduction/httpmethods
5. **Persistência de Dados com [lowdb](https://github.com/typicode/lowdb)**
   1. use um ficheiro JSON para um estrutura de dados
   2. inicialize a DB com alguns dados.
   3. utilize ***lowDB*** para armazenar os dados. Configure o lowDB para guardar os dados num ficheiro JSON local.
   4. as operações de leitura e escrita devem manipular o ficheiro JSON, garantindo a persistência dos dados.
6. **Teste**
   * teste a API com ferramentas como o **cURL** ou **PostMan**
   * teste localmente
8. **Demo**
   - implemente uma página que faça o consumo da API e demonstre todas as rotas
   -  **veja a pasta sampledemo** para um possível código base da página de **Demo**
9. **Publicação**
   * O trabalho deve ser deployed no render.com
   * nota: no render.com, as alteraçoes ao sistema de ficheiros (neste caso o ficheiro json  que implementa a base de dados lowdb) são perdidas em cada redeploy/restart
10. **Entrega**
   * O código do trabalho é suportado pelo repositórios gitHub.com classroom
   * Deverá refazer o ficheiro README.md para incluir documentação minima do projeto
     * autoria, onde está deployed, que dados usa, que rotas estão implementadas, outras informações
   * no moodle será solicitado o endereço de publicação e o mome do repositório
   * data limite 10.11.2024

------



## checklist

1. **Funcionalidade da API:**
   A API deverá estar completamente funcional, suportando todas as operações CRUD e garantindo a persistência dos dados.
2. **Estrutura e Organização do Código:**
   O código deverá estar organizado de forma modular, fácil de ler e seguir boas práticas de desenvolvimento.
3. **Tratamento de Erros e Validação de Dados:**
   A API deve lidar adequadamente com erros e validações de entrada, retornando mensagens apropriadas ao cliente.
4. **Documentação e Testes:**
   A documentação deve ser clara, detalhando o uso de cada rota. Os testes devem assegurar o funcionamento correto da API em cenários comuns e extremos.
5. **Utilização de lowdb:**
   Utilização eficaz do lowdb para garantir a persistência de dados.
