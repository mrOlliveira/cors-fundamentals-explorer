# 🌐 Demonstração: Entendendo o CORS (Cross-Origin Resource Sharing)

Este repositório contém um exercício prático focado em segurança web. O objetivo é simular o bloqueio padrão dos navegadores (SOP) e implementar a solução correta via backend.

## 📋 Sobre o Projeto

A aplicação consiste em dois ambientes distintos simulando servidores diferentes:
1.  *Servidor de API (Backend):* Hospedado na porta 8080.
2.  *Cliente Web (Frontend):* Hospedado na porta 3000.

O navegador, por padrão, impede que o Cliente (3000) leia dados do Servidor (8080) sem permissão explícita.

### 💻 Stack Tecnológica
* *Runtime:* Node.js
* *Framework:* Express.js
* *Middleware de Segurança:* cors
* *Interface:* HTML/JS Puro (Vanilla)

---

## 🚀 Guia de Instalação e Execução

Siga os passos abaixo para levantar o ambiente de testes.

### Passo 1: Configurando a API (Backend)
Primeiro, vamos instalar as dependências e iniciar o servidor.

```bash
# Entre na pasta do servidor
cd backend

# Instale o Express e o CORS
npm install express cors

# Inicie o serviço
node server.js
