import fs from 'node:fs/promises';
import path from 'node:path';

const nomeArquivo = 'arquivo-criado.txt';
const conteudoArquivo = 'Hello, world!';
const caminhoArquivo = path.join(import.meta.dirname, nomeArquivo);

let fileHandle;
try {
  fileHandle = await fs.open(caminhoArquivo, 'w', 0o755); // Abre um arquivo para modo de escrita e retorna um FileHandle
  await fileHandle.writeFile(conteudoArquivo);
} finally {
  await fileHandle.close();
}

console.log('Arquivo criado com sucesso!');

