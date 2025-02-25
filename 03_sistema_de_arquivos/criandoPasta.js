import path from 'path';
import url from 'url';
import {promises as fs} from 'node:fs';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename);
console.log(__dirname);

let pasta = path.join(__dirname, 'lojas', '201', 'funcionarios');
try {
    await fs.mkdir(pasta);
} catch (err) {
    console.error(`Erro ao criar:\n ${pasta} \n Código: ${err.code}`);
}