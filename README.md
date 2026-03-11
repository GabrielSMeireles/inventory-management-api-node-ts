# 📦 Inventory Management API

![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-Auth-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![Status](https://img.shields.io/badge/status-concluído-brightgreen?style=for-the-badge)

> API REST desenvolvida em **Node.js + TypeScript** para gerenciar usuários, clientes, produtos, vendas e embalagens, com autenticação **JWT** e persistência em **PostgreSQL via TypeORM** 🗄️.

---

## 📄 Sumário

1. [Visão Geral](#-visão-geral)
2. [Principais Funcionalidades](#-principais-funcionalidades)
3. [Arquitetura e Organização](#-arquitetura-e-organização)
4. [Estrutura do Projeto](#-estrutura-do-projeto)
5. [Tecnologias Utilizadas](#-tecnologias-utilizadas)
6. [Pré-requisitos](#-pré-requisitos)
7. [Como Executar](#-como-executar)
8. [Fluxo de Uso](#-fluxo-de-uso)
9. [Endpoints](#-endpoints)
10. [Autor](#-autor)

---

## 🔍 Visão Geral

A **Inventory Management API** é uma aplicação back-end que simula um sistema real de gerenciamento de estoque e vendas, contemplando:

* Autenticação segura com JWT
* Gerenciamento completo de usuários e clientes
* Cadastro e controle de produtos por categoria
* Registro de vendas e embalagens (packing)
* Arquitetura limpa com separação de responsabilidades

O projeto foi desenvolvido com foco em boas práticas de Back-end, utilizando **TypeScript**, **TypeORM** e **PostgreSQL** com sincronização automática de entidades.

---

## ⭐ Principais Funcionalidades

1. **Autenticação JWT**

   * Criação de usuários com perfil admin.
   * Login com geração de Bearer Token.
   * Proteção de rotas via middleware de autenticação.

2. **Gestão de Usuários**

   * CRUD completo: criar, listar, atualizar e deletar usuários.

3. **Gestão de Clientes**

   * CRUD completo para cadastro e controle de clientes.

4. **Gestão de Produtos e Categorias**

   * Cadastro de produtos vinculados a categorias.
   * CRUD completo para produtos e categorias.

5. **Gestão de Vendas**

   * Registro e controle de vendas realizadas.
   * CRUD completo para o módulo de vendas.

6. **Gestão de Embalagens (Packing)**

   * Cadastro e gerenciamento de tipos de embalagem.
   * CRUD completo para embalagens.

---

## 🏗️ Arquitetura e Organização

O projeto segue o padrão **Controller → Service → Repository**, promovendo separação de responsabilidades e facilitando manutenção e testes:

* **Controllers** — recebem as requisições HTTP e delegam para os serviços.
* **Services** — contêm a lógica de negócio da aplicação.
* **Repositories** — lidam com o acesso ao banco de dados via TypeORM.
* **Entities** — mapeiam as tabelas do PostgreSQL como classes TypeScript.
* **Middlewares** — validam o token JWT antes de processar rotas protegidas.

---

## 📂 Estrutura do Projeto

```
inventory-management-api-node-ts/
│
├── src/
│   ├── controllers/        # Handlers das rotas HTTP
│   ├── services/           # Lógica de negócio
│   ├── repositories/       # Acesso ao banco via TypeORM
│   ├── entities/           # Entidades/tabelas do banco de dados
│   ├── middlewares/        # Autenticação JWT e outros
│   ├── routes/             # Definição das rotas da API
│   └── database/
│       └── migrations/     # Migrations do banco
│
├── ormconfig.json          # Configuração do TypeORM + PostgreSQL
├── tsconfig.json           # Configuração do TypeScript
├── package.json
└── yarn.lock
```

---

## 🔧 Tecnologias Utilizadas

| Camada             | Tecnologia                          |
| ------------------ | ----------------------------------- |
| **Linguagem**      | TypeScript 5.8                      |
| **Runtime**        | Node.js 18+                         |
| **Framework**      | Express                             |
| **ORM**            | TypeORM (sinc. automática)          |
| **Banco de Dados** | PostgreSQL 15                       |
| **Autenticação**   | JWT (JSON Web Token)                |
| **Gerenciador**    | Yarn                                |
| **Testes**         | Thunder Client / Postman            |

---

## ✅ Pré-requisitos

Antes de rodar o projeto, certifique-se de ter instalado:

* [Node.js](https://nodejs.org/) **18+**
* [Yarn](https://yarnpkg.com/)
* [PostgreSQL](https://www.postgresql.org/) rodando local ou remotamente

---

## 🚀 Como Executar

### 1. Clone o repositório

```bash
git clone https://github.com/GabrielSMeireles/inventory-management-api-node-ts.git
cd inventory-management-api-node-ts
```

### 2. Instale as dependências

```bash
yarn install
```

### 3. Configure o banco de dados

Crie o banco de dados no PostgreSQL:

```sql
CREATE DATABASE postgres;
```

Verifique as credenciais em `ormconfig.json` e ajuste conforme seu ambiente:

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

### 4. Inicie o servidor

```bash
yarn dev
```

A API estará disponível em:

```
http://localhost:3000
```

> As tabelas são criadas automaticamente pelo TypeORM com `synchronize: true`.

---

## 🔄 Fluxo de Uso

1. Crie um usuário via `POST /users`.
2. Faça login via `POST /auth` para obter o **Bearer Token**.
3. Insira o token no header `Authorization` de todas as demais requisições.
4. Utilize os endpoints de categorias, produtos, clientes, vendas e embalagens.

### Exemplo de autenticação

**Criar usuário:**
```http
POST /users
Content-Type: application/json

{
  "name": "Admin",
  "email": "admin@example.com",
  "admin": true,
  "password": "123456"
}
```

**Login:**
```http
POST /auth
Content-Type: application/json

{
  "email": "admin@example.com",
  "password": "123456"
}
```

**Usar token nas rotas protegidas:**
```http
Authorization: Bearer <TOKEN>
```

---

## 📌 Endpoints

### Autenticação
| Método | Rota    | Descrição              | Auth? |
|--------|---------|------------------------|-------|
| POST   | /users  | Criar usuário          | ❌    |
| POST   | /auth   | Login e obtenção de token | ❌  |

### Usuários
| Método | Rota         | Descrição         | Auth? |
|--------|--------------|-------------------|-------|
| GET    | /users       | Listar usuários   | ✅    |
| PUT    | /users/:id   | Atualizar usuário | ✅    |
| DELETE | /users/:id   | Deletar usuário   | ✅    |

### Clientes
| Método | Rota         | Descrição         | Auth? |
|--------|--------------|-------------------|-------|
| POST   | /client      | Criar cliente     | ✅    |
| GET    | /client      | Listar clientes   | ✅    |
| PUT    | /client/:id  | Atualizar cliente | ✅    |
| DELETE | /client/:id  | Deletar cliente   | ✅    |

### Categorias
| Método | Rota           | Descrição          | Auth? |
|--------|----------------|--------------------|-------|
| POST   | /category      | Criar categoria    | ✅    |
| GET    | /category      | Listar categorias  | ✅    |
| PUT    | /category/:id  | Atualizar categoria| ✅    |
| DELETE | /category/:id  | Deletar categoria  | ✅    |

### Produtos
| Método | Rota          | Descrição         | Auth? |
|--------|---------------|-------------------|-------|
| POST   | /product      | Criar produto     | ✅    |
| GET    | /product      | Listar produtos   | ✅    |
| PUT    | /product/:id  | Atualizar produto | ✅    |
| DELETE | /product/:id  | Deletar produto   | ✅    |

### Vendas
| Método | Rota        | Descrição       | Auth? |
|--------|-------------|-----------------|-------|
| POST   | /sales      | Criar venda     | ✅    |
| GET    | /sales      | Listar vendas   | ✅    |
| PUT    | /sales/:id  | Atualizar venda | ✅    |
| DELETE | /sales/:id  | Deletar venda   | ✅    |

### Embalagens (Packing)
| Método | Rota           | Descrição          | Auth? |
|--------|----------------|--------------------|-------|
| POST   | /packing       | Criar embalagem    | ✅    |
| GET    | /packing       | Listar embalagens  | ✅    |
| PUT    | /packing/:id   | Atualizar embalagem| ✅    |
| DELETE | /packing/:id   | Deletar embalagem  | ✅    |

---

## 👨‍💻 Autor

**Gabriel Meireles**
Desenvolvedor em formação com foco em Back-end e Fullstack.

[![GitHub](https://img.shields.io/badge/GitHub-GabrielSMeireles-181717?style=for-the-badge&logo=github)](https://github.com/GabrielSMeireles)

---

> Projeto desenvolvido com foco em aplicar boas práticas de arquitetura REST, TypeScript e autenticação segura com JWT.
