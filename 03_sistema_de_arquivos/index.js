import { promises as fs } from 'node:fs';

var main = async () => {
    var items = await fs.readdir('lojas', { withFileTypes: true });

    for (let i of items) {
        let type = i.isDirectory() ? "pasta" : "arquivo";
        console.log(`${items.name}: ${type}`);
    }
};

main();