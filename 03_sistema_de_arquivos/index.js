import { promises as fs } from 'node:fs'; // Importa o módulo de FileSystem do Node.js, que trabalha com Promises

var main = /* 'async' é necessário para funções de FileSystem do tipo Promises */ async () => {
    var items = /* 'await' recebe a Promise de <fs.readdir> e aguarda a resolução ou rejeição, retornando o valor em seguida*/ await fs.readdir('lojas', { withFileTypes: true });

    for (let i of items) {
        let type = i.isDirectory() ? "pasta" : "arquivo";
        console.log(`${items.name}: ${type}`);
    }
};

main();
