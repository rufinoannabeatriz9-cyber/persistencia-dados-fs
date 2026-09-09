import { existsSync, mkdirSync, writeFileSync,readFileSync, write } from 'fs';
// Models:
type Livro = {
    titulo: string;
    autor: string;
    genero?: string;
    ano: number;
    lido: boolean;
};
type Hooby = string;
type FamosoFavorito = {
    nome: string;

};

type Amigo = {
    nome: string;
    ondeConheci: string;
    hobbies: Hooby[];
    famososFavoritos: FamosoFavorito[];
};

// Manipulação de arquivos JSON:
// 1. Função para adicionar um livro a um arquivo JSON
const livros : Livro[] = [];
livros.push({ 
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    genero: "Fantasia", 
    ano: 1954, 
    lido: true 
});
livros.push({ 
    titulo: "1984",
    autor: "George Orwell",
    genero: "Ficção Científica",
    ano: 1948,
    lido: false
});
livros.push({
    titulo: "O Pequeno Príncipe",
    autor: "Antoine de Saint-Exupéry",
    ano: 1943,
    lido: true
}); 

// 2. Percorrer o array (listas) de livros e imprimir os títulos
livros.forEach((livro) => {
    console.log(`Título: ${livro.titulo} (${livro.ano}) - Autor: ${livro.autor} - Lido: ${livro.lido ? "Sim" : "Não"}`);
});

// 3. Filtrar a lista (ex: Apenas os livros lidos)
const livrosLidos = livros.filter((livro) => livro.lido === true);

// 4. Encontrar um livro específico (ex: Por um campo)
const livroEspecifico = livros.find((livro) => livro.titulo === "1984");

// Salvar no disco (em um arquivo JSON) 
const diretorio = 'data';
if (!existsSync(diretorio)) {
    mkdirSync(diretorio);
}
writeFileSync (`${diretorio}/livros.json`, JSON.stringify(livros, null, 2), 'utf-8');
// Os parâmetros null, 2 servem para indentar e deixar visualmente legível o arquivo JSON gerado. O 'utf-8' é a codificação do arquivo.

// 6. Ler do disco (de um arquivo JSON)
const livrosLidosDoArquivo:
Livro[] = JSON.parse(readFileSync(`${diretorio}/livros.json`, 'utf-8'));
console.log("Livros lidos do arquivo JSON:", livrosLidosDoArquivo);