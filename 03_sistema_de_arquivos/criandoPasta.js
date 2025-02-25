import path from 'path';
import url from 'url';
import {promises as fs} from 'node:fs';
/* Uma alternativa é utilizar a propriedade 'import.meta.dirname' no Node >=20*/
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename);
console.log(__dirname);

let pasta = path.join(__dirname, 'lojas', '201', 'funcionarios');
try {
    await fs.mkdir(pasta); // 'await' permitido fora de função 'async' por estar dentro de um módulo
} catch (err) {
    console.error(`Erro ao criar:\n ${pasta} \n Código: ${err.code}`);
}
