# Support Service
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/devsuperior/sds1-wmazoni/blob/master/LICENSE) 

# About Project / Sobre o projeto

https://supportservice.test

O Support Service é um sistema abrangente de gerenciamento de chamados projetado para otimizar e simplificar o processo de suporte ao cliente. Desde a abertura inicial de tickets até o encerramento e o gerenciamento dos usuários, o Support Service oferece uma solução eficaz para garantir uma experiência de suporte excepcional.

Com uma interface intuitiva e fácil de usar, o Support Service permite que os usuários registrem e acompanhem facilmente o progresso de seus tickets. Os clientes podem criar novos tickets, descrever o problema com detalhes e até mesmo anexar arquivos relevantes para uma melhor compreensão.

## Layout web
![Web 1](https://github.com/acenelio/assets/raw/main/sds1/web1.png)

![Web 2](https://github.com/acenelio/assets/raw/main/sds1/web2.png)

## Modelo conceitual

![Modelo Conceitual](https://github.com/acenelio/assets/raw/main/sds1/modelo-conceitual.png)

# Tecnologias utilizadas
## Back end
- Java
- Spring Boot versão 3.0
- JPA / Hibernate
- Maven
- OAuth 2.0
- Swagger
## Front end
- HTML5 / CSS3 / JS / TypeScript
- ReactJS 18.0
- Google Charts
- 
## Implantação Homologação 
- Backend (API) - Docker 24.0
- FrontEnd : ....
- Banco de dados: Postgresql com Docker compose em um ambiente de WSL Linux Ubuntu 22.04

# Como executar o projeto

## Back end
Pré-requisitos: Java 11

```bash
# clonar repositório
git clone https://github.com/devsuperior/sds1-wmazoni

# entrar na pasta do projeto back end
cd backend

# executar o projeto
./mvnw spring-boot:run
```

## Front end web
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/devsuperior/sds1-wmazoni

# entrar na pasta do projeto front end web
cd front-web

# instalar dependências
yarn install

# executar o projeto
yarn start
```

# Autor

Franklyn Destro Damaceno.
https://www.linkedin.com/in/franklyn-damaceno-441baa143/

