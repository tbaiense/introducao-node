import fs from 'node:fs/promises';

const lerTexto = async () => {
	const caminho = './nomes.txt';	
	try {		
		return await fs.readFile(caminho, 'utf-8');
	} catch (err) {
		console.error('Não foi possível encontrar o arquivo ' + caminho);
	}
};

console.log(await lerTexto());
