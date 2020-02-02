# Burger Queen - API REST

## Índice

- [1. Resumo do Projeto](#1-resumo-do-projeto)
- [2. Considerações Técnicas](#2-considerações-técnicas)
- [3. Futuras Implantações](#3-futuras-implantações)

---

## 1. Resumo do Projeto

Esse projeto é uma API _REST_ desenvolvida durante o bootcamp da Laboratória, para introduzir o funcionamento de back-end.

Com o contexto de produzir uma API para um restaurante, por meio dessa API, é possivel interagir com os dados do cardápio e dos pedidos, sendo inicialmente inseridos 5 e 7 dados respectivamente.

## 2. Considerações Técnicas

A API foi feita com [Node.js](https://nodejs.org/) e o framework do [Express](https://expressjs.com/), sendo  desenvolvido na plataforma [Docker](https://www.docker.com/).

Foi utilizado o [PostgreSQL](https://www.postgresql.org/docs/) para gerenciar o banco de dados, por meio do [Sequelize](https://sequelize.org), entre outras bibliotecas. Para realização dos testes foi utilizado o [Jest](https://jestjs.io/) e [supertest](https://www.npmjs.com/package/supertest).

### 2.1 Funcionamento

A aplicação foi hospedada no [Heroku](https://www.heroku.com/home) e pode ser acessada pelo link
<https://api-bq.herokuapp.com>

Temos os _endpoints_ dos itens do cardápio (products) e dos pedidos (orders).

As _requests_ disponíveis são as seguintes:

#### `/products`

- `GET /products`
- `GET /products/:productid`
- `POST /products`
- `PUT /products/:productid`
- `DELETE /products/:productid`

#### `/orders`

- `GET /orders`
- `GET /orders/:orderid`
- `POST /orders`
- `PUT /orders/:orderid`
- `DELETE /orders/:orderid`

Obs.: Alguns dados podem ser obrigatórios para poder dar _POST_.

## 3. Futuras Implantações

- Endpoint de mesas
- Endpoint de histórico de pedidos
- Endpoint de criação de usuário
- Endpoint de alteração de usuário
- Endpoint de exclusão de usuário
- Autenticação com _JSON Web Token_ (JWT)
- Acrescentar níveis de permissão de usuário
- Testes _e2e_
