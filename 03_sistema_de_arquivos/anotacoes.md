# Anotações dos módulos
    - ```node:fs/promises```
    - ```node:url```
    - ```node:path```

## fs/promises
Funcionam retornando uma Promise, que resolve para um arquivo, diretório, etc.
Ex.:
    ```import fs from 'node:fs/promises';
    const texto = async () => { return await fs.readFile('./nomes.txt', 'utf-8')};
    console.log('Conteúdos do arquivo:\n' + texto);```
