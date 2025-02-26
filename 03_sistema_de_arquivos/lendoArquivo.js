import fs from 'node:fs/promises';
import path from 'node:path';

const __dirname = import.meta.dirname;
const __filename = path.join(__dirname, 'totalVendas.json');

let buffer;
let fileContent;
try {
    buffer = await fs.readFile(__filename); // Retorno de <Buffer>
    fileContent = await fs.readFile(__filename, 'utf-8');
    console.log("Conteúdo do Buffer:\n", buffer, "\n\nConteúdo do arquivo:\n", fileContent);
} catch (err) {
    console.error('Erro ao ler arquivo: ', err.name);
}