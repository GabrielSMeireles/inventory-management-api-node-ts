# Inventory Management API (Node.js + TypeScript)

[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue)](https://www.typescriptlang.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-blue)](https://www.postgresql.org/)
[![JWT](https://img.shields.io/badge/JWT-Auth-yellowgreen)](https://jwt.io/)
[![License](https://img.shields.io/badge/license-MIT-blue)](#license)

API REST para gerenciar **usuários**, **clientes**, **produtos**, **vendas** e **embalagens**, com **autenticação JWT** e **TypeORM + PostgreSQL**.

---

## 🔥 Destaques

- 🔐 Autenticação JWT (login / token)
- 🧠 CRUD completo para Users / Clients / Products / Sales / Packing / Category
- ✅ TypeORM com entidades e migrations (sinc. automática)
- 🧪 Fácil de testar com Thunder Client / Postman
- ⚡️ Ambiente rápido com `yarn dev`

---

## ✅ Pré-requisitos

Antes de rodar:

- Node.js **18+**
- Yarn
- PostgreSQL (rodando local ou remoto)

---

## 🛠️ Configuração do PostgreSQL

1. Instale o PostgreSQL e rode o serviço.
2. Crie o banco de dados (exemplo usando `psql`):

```sql
CREATE DATABASE postgres;
```

3. Confirme credenciais em `ormconfig.json` (atualmente):

```json
{
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "postgres",
  "password": "1234",
  "database": "postgres",
  "synchronize": true,
  "logging": false,
  "entities": ["src/entities/**/*.ts"],
  "migrations": ["src/database/migrations/**/*.ts"]
}
```
---

## 🏁 Como rodar o projeto

```bash
yarn install
yarn dev
```

A API ficará disponível em:

✅ `http://localhost:3000`

---

## 🔐 Autenticação (JWT)

### 1) Criar usuário (sem token)

`POST /users`

Body:
```json
{
  "name": "Admin",
  "email": "admin@example.com",
  "admin": true,
  "password": "123456"
}
```

### 2) Login (obter token)

`POST /auth`

Body:
```json
{
  "email": "admin@example.com",
  "password": "123456"
}
```

Resposta:
```json
{ "message": "eyJhbGc..." }
```

### 3) Usar token nas demais rotas

Adicionar header (para todas as rotas protegidas):

```
Authorization: Bearer <TOKEN>
```

---

## 🧪 Testando com Thunder Client (VS Code)

1. Instale a extensão **Thunder Client**
2. Crie uma coleção (ex: `Inventory API`)
3. Adicione requests:
   - `POST /users`
   - `POST /auth`
   - `GET /users` (faça depois do login)
   - `POST /product`, `GET /product`, etc.
4. Configure o header `Authorization` como `Bearer <token_obtido>` nas requests protegidas.

---

## 📌 Endpoints principais

### Usuários
- `POST /users`
- `GET /users`
- `PUT /users/:id`
- `DELETE /users/:id`

### Autenticação
- `POST /auth`

### Categoria
- `POST /category`
- `GET /category`
- `PUT /category/:id`
- `DELETE /category/:id`

### Produtos
- `POST /product`
- `GET /product`
- `PUT /product/:id`
- `DELETE /product/:id`

### Vendas
- `POST /sales`
- `GET /sales`
- `PUT /sales/:id`
- `DELETE /sales/:id`

### Embalagens (Packing)
- `POST /packing`
- `GET /packing`
- `PUT /packing/:id`
- `DELETE /packing/:id`

### Clientes
- `POST /client`
- `GET /client`
- `PUT /client/:id`
- `DELETE /client/:id`

---

## ✅ O que ver no projeto

- Autenticação JWT funcionando (login + Bearer token)
- Uso de TypeScript + TypeORM + PostgreSQL
- Estrutura limpa de controllers/services/repositories
- Rotas REST organizadas e fáceis de testar (Thunder / Postman)

---
