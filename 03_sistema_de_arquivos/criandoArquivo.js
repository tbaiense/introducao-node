import fs from 'node:fs/promises';
import path from 'node:path';

let fp = path.join(import.meta.dirname, 'boas_vindas.txt');
let fh;
try {
    //fh = await fs.open(fp, 'w', 0o755);
    //await fh.writeFile('Olá mundo');

    fh = await fs.open(fp, 'a', 0o755);
    await fh.appendFile('\nNova linha');

    //await fs.writeFile(fh, 'Saudações!');
    //await fs.appendFile(fh, 'Saudações novamente!);
    console.log('Arquivo criado com sucesso.');
} catch (err) {
    console.error('Erro ao criar arquivo: ', err.name);
} finally {
    await fh?.close();
}