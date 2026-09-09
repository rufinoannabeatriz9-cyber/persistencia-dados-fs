# persistencia-dados-fs
# Persistencia de Dados no Sistema de Arquivos (FS)

<div align="center">
  <img src="https://img.shields.io/badge/Status-Concluido-ffb6c1?style=for-the-badge&labelColor=fff0f5" alt="Status" />
  <img src="https://img.shields.io/badge/Linguagem-JavaScript/Node.js-ff69b4?style=for-the-badge&labelColor=fff0f5" alt="Linguagem" />
  <img src="https://img.shields.io/badge/Tema-Rosa_Delicado-ff1493?style=for-the-badge&labelColor=fff0f5" alt="Tema" />
</div>

<br />

<div align="center">
  <p><i>Um projeto focado no aprendizado e manipulacao pratica de arquivos no ambiente Node.js utilizando o modulo nativo File System (FS).</i></p>
</div>

---

## Sobre o Projeto

Este repositorio foi desenvolvido para explorar os conceitos essenciais de **Persistencia de Dados em Arquivos Local**. O objetivo principal e demonstrar como criar, ler, atualizar e deletar arquivos (operacoes do ciclo CRUD) diretamente no sistema de arquivos do sistema operacional usando o modulo nativo `fs` (ou `fs/promises`) do Node.js.

Com essa abordagem, dados e informacoes da aplicacao permanecem salvos no disco rigido ou SSD, permitindo que a informacao nao seja perdida mesmo apos o encerramento do processo do servidor ou da aplicacao.

---

## O Que Foi Feito

Durante o desenvolvimento deste projeto, foram implementadas as seguintes funcionalidades e estruturas:

* **Leitura de Arquivos (Read):** Implementacao de rotas/funcoes para abrir e extrair informacoes de arquivos locais (formatos como JSON, TXT, etc.).
* **Escrita e Criacao (Create):** Mecanismos para gravar novas informacoes no disco, gerando novos arquivos estruturados.
* **Atualizacao de Conteudo (Update):** Adicao ou alteracao de dados em arquivos ja existentes sem sobrescrever completamente as informacoes anteriores quando necessario.
* **Remocao de Arquivos (Delete):** Implementacao de rotas/metodos para apagar arquivos com seguranca do armazenamento local.
* **Tratamento de Erros e Assincronismo:** Uso de funcoes assincronas (`async/await` ou `Promises`) para garantir que as operacoes de I/O nao bloqueiem a thread principal do sistema.

---

## Tecnologias Utilizadas

* **Node.js**: Ambiente de execucao JavaScript no lado do servidor.
* **File System (`fs` / `fs/promises`)**: Modulo nativo do Node.js utilizado para manipular pastas e arquivos.
* **JSON**: Formato de estruturacao de dados adotado para a persistencia leve de registros.

---

## Estrutura do Projeto

```text
persistencia-dados-fs/
├── data/              <-- Diretorio reservado para armazenamento dos arquivos persisitidos
├── src/               <-- Codigo fonte da aplicacao contendo as rotas e manipuladores do FS
├── package.json       <-- Dependencias e scripts da aplicacao
└── README.md          <-- Documentacao do projeto
```

---

## Como Executar o Projeto

### Pré-requisitos
Para executar o projeto localmente, certifique-se de ter instalado em sua maquina:
* **Node.js** (versao 14 ou superior)
* **Git**

### Passo a Passo

1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/rufinoannabeatriz9-cyber/persistencia-dados-fs.git
   ```

2. **Acessar a pasta do projeto:**
   ```bash
   cd persistencia-dados-fs
   ```

3. **Instalar as dependencias (se aplicavel):**
   ```bash
   npm install
   ```

4. **Executar a aplicacao:**
   ```bash
   npm start
   ```

---

<div align="center">
  <p>Desenvolvido por <b>Anna Beatriz Rufino</b></p>
</div>
