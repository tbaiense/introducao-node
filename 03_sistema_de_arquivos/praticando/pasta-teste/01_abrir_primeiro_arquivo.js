import fs from 'node:fs/promises';
import path from 'node:path';

const caminho = path.join(import.meta.dirname, 'pasta-teste', '.');
const dirEnts = await fs.readdir(caminho, { withFileTypes: true });

if (dirEnts) {
	let primeiro;

	for (let e of dirEnts) {
		if (e.isFile()) {
			primeiro = e;
			break;
		}
	}
	let nomePrimeiro = primeiro.name;
	primeiro = path.join(caminho, primeiro.name);
	primeiro = await fs.readFile(primeiro, 'utf-8');
	console.log(`Conteúdo do primeiro arquivo '${nomePrimeiro}':\n${primeiro}`);
}
