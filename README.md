<h1 align="center" style="color:#7f5cd1; font-size:45px;">Culture Power API</h1>

O Culture Power é uma aplicação de gamificação para a empresa “Exemplo”. Este projeto foi desenvolvido como parte do Projeto Final do Módulo 2, focando no back-end da aplicação. A data de entrega foi 18/02/2024 e o projeto foi publicado no Railway.

## Índice
- [Descrição do Projeto](#descrição-do-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Executar o Projeto](#como-executar-o-projeto)
- [Autor](#autor)

## Descrição do Projeto
O Culture Power é uma API desenvolvida para suportar uma aplicação de gamificação, permitindo o cadastro e gerenciamento de usuários e produtos, autenticação e autorização, e a execução de transações de resgate de produtos com joias.

## Funcionalidades

### Autenticação
- **Cadastro de Usuário:**
  - Nome, email, senha, joias, resgate de produtos, foto.
  - Validação de email único.
  - Criptografia de senha.
- **Login de Usuário:**
  - Validação de credenciais.
  - Geração de token de acesso.
- **Login de Administrador:**
  - Geração de token de acesso diferenciado.

### Gerenciamento de Produtos
- **Cadastro de Produto (Rota privada - Admin):**
  - Nome, valor, quantidade, descrição e foto.
  - Validação de permissão de administrador.
- **Edição de Produto (Rota privada - Admin):**
  - Mesma validação do Cadastro de Produto.
- **Listar Todos os Produtos (Rota privada)**
- **Buscar Produto por ID (Rota privada)**
- **Enviar Joia para Usuário (Rota privada - Admin):**
  - Quantidade de joias e ID do usuário.
- **Resgatar Produto (Rota privada):**
  - ID do produto e ID do usuário.
  - Validação de produto e usuário existentes.
  - Validação de quantidade de joias suficiente.
  - Atualização do estoque e joias do usuário.

## Tecnologias Utilizadas
- **Node.js**
- **Express**
- **MongoDB**
- **Mongoose**
- **Bcryptjs**
- **JWT**

## Como Executar o Projeto
1. Clone o repositório:
   ```bash
   git clone https://github.com/dev-anderson-rodrigues/culture-power-api.git
   ```
2. Instale as dependências:
   ```bash
   cd culture-power-api
   npm install
   ```
3. Configure as variáveis de ambiente no arquivo `.env`:
   ```env
   MONGO_URI=sua_uri_do_mongodb
   JWT_SECRET=sua_chave_secreta_jwt
   ```
4. Inicie o servidor:
   ```bash
   npm start
   ```
5. Acesse a aplicação em seu navegador:
   ```
   http://localhost:3000
   ```

## Autor
Desenvolvido por [Anderson Rodrigues].

---

Este projeto foi criado como parte das qualificações do módulo 2 do curso de programação, demonstrando habilidades em desenvolvimento backend, gerenciamento de banco de dados, e implementação de autenticação e autorização.
