import path from 'node:path';
import { readdir, } from 'node:fs/promises';
import url from 'node:url';

// Exibindo o caminho do diretório atual
// 1. forma:
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log('Exibindo diretório na primeira forma:\n' + __dirname);

// 2. forma:
let dname = import.meta.dirname;
console.log('\n\nExibindo o diretório na 2a forma:\n' + dname);

// Exibindo o conteúdo do diretório atual
// 1. forma: exibindo apenas os nomes
const dirEntNames = await readdir(/*path[, options]*/ import.meta.dirname); // É possível usar 'await' sozinho dentro de um módulo ES6

console.log('\nArquivos contidos no diretório atual (1a forma):'); 
for (const entName of dirEntNames) {
	console.log(entName);
}

// 2. forma: recebendo objetos Dirent e printando o nome
console.log('\nArquivos no diretório atual (2a forma):');
const dirEnts = await readdir(import.meta.dirname, { withFileTypes: true });
for (const de of dirEnts) {
	console.log(` ${(de.isFile) ? 'Arq. ' : 'Dir. '} ${de.name} `);
}
