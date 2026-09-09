# Sistema de Gerenciamento de Livros e Contatos

<div align="center">
  <img src="https://img.shields.io/badge/Status-Concluido-ff1493?style=for-the-badge&labelColor=ffe4e1" alt="Status" />
  <img src="https://img.shields.io/badge/Linguagem-TypeScript-ff69b4?style=for-the-badge&labelColor=ffe4e1" alt="Linguagem" />
  <img src="https://img.shields.io/badge/Node.js-File_System-db7093?style=for-the-badge&labelColor=ffe4e1" alt="Node.js FS" />
</div>

<br />

<div align="center">
  <p><i>Aplicação em TypeScript para modelagem de dados e manipulação de arquivos JSON locais através do módulo nativo FS do Node.js.</i></p>
</div>

---

<details>
<summary><b>CLIQUE PARA EXPANDIR A VISÃO GERAL DO PROJETO</b></summary>

<br />

Este repositório contém uma aplicação desenvolvida em **TypeScript** focada na demonstração prática de **Persistência de Dados Local**. O projeto exemplifica como criar modelos fortamente tipados, manipular dados em memória através de métodos de array modernos e persisti-los em arquivos no formato JSON utilizando o módulo nativo `fs` (File System) do Node.js.

</details>

---

## O Que Foi Desenvolvido

<table align="center" width="100%">
  <tr>
    <td width="50%">
      <b>Modelagem e Manipulação de Dados</b>
      <ul>
        <li><b>Tipagem Estática:</b> Definição de contratos com `type` para `Livro`, `Amigo`, `Hooby` e `FamosoFavorito`.</li>
        <li><b>Iteração de Listas:</b> Exibição formatada utilizando `forEach`.</li>
        <li><b>Filtragem de Registros:</b> Uso do método `filter` para selecionar livros lidos.</li>
        <li><b>Busca Específica:</b> Localização de itens por atributo usando `find`.</li>
      </ul>
    </td>
    <td width="50%">
      <b>Operações de Armazenamento Local (FS)</b>
      <ul>
        <li><b>Verificação de Diretório:</b> Validação da existência da pasta `data` com `existsSync`.</li>
        <li><b>Criação de Pastas:</b> Geração dinâmica do diretório usando `mkdirSync`.</li>
        <li><b>Escrita em Disco:</b> Serialização de dados (`JSON.stringify`) e salvamento com `writeFileSync`.</li>
        <li><b>Leitura de Dados:</b> Desserialização de arquivos JSON (`JSON.parse`) via `readFileSync`.</li>
      </ul>
    </td>
  </tr>
</table>

---

## Tecnologias e Módulos

| Tecnologia / Módulo | Descrição |
| :--- | :--- |
| **TypeScript** | Linguagem principal do projeto, fornecendo tipagem estática e segurança de código. |
| **Node.js (`fs`)** | Módulo nativo responsável pelas operações síncronas no sistema de arquivos. |
| **JSON** | Formato de dados adotado para a estruturação do arquivo de persistência. |

---

<details>
<summary><b>CLIQUE PARA VISUALIZAR A ESTRUTURA DO PROJETO</b></summary>

```text
.
├── data/
│   └── livros.json       <-- Arquivo JSON gerado automaticamente com os dados salvos
├── src/
│   └── index.ts          <-- Código-fonte principal com os tipos e manipuladores do FS
├── package.json          <-- Dependências e scripts de execução
├── tsconfig.json         <-- Configurações do compilador TypeScript
└── README.md             <-- Documentação técnica do projeto
```

</details>

---

## Exemplo do JSON Gerado

Quando o script é executado, os dados salvos em `data/livros.json` seguem a estrutura formatada abaixo:

```json
[
  {
    "titulo": "O Senhor dos Anéis",
    "autor": "J.R.R. Tolkien",
    "genero": "Fantasia",
    "ano": 1954,
    "lido": true
  },
  {
    "titulo": "1984",
    "autor": "George Orwell",
    "genero": "Ficção Científica",
    "ano": 1948,
    "lido": false
  },
  {
    "titulo": "O Pequeno Príncipe",
    "autor": "Antoine de Saint-Exupéry",
    "ano": 1943,
    "lido": true
  }
]
```

---

## Guia de Execução

<details>
<summary><b>PASSO 1: Pré-requisitos</b></summary>

<br />

Certifique-se de ter instalado em seu ambiente:
* **Node.js** (versão 14 ou superior)
* **npm** ou **yarn**
* **ts-node** (para execução direta de arquivos TypeScript)

</details>

<details>
<summary><b>PASSO 2: Instalar Dependências</b></summary>

```bash
# Instalar dependências do projeto
npm install

# Caso precise instalar o ts-node globalmente/localmente para rodar o script
npm install -D ts-node typescript @types/node
```

</details>

<details>
<summary><b>PASSO 3: Executar o Script</b></summary>

```bash
# Execução direta com ts-node
npx ts-node src/index.ts

# Ou executando o script configurado no package.json
npm start
```

</details>

---

<div align="center">
  <br />
  <p><b>Desenvolvido par
