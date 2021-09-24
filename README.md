# IBM INTENTS GENERATOR

Gera arquivo de inteções do IBM Watson.

## Requerimentos

É necessário que você tenha o Node JS em seu ambiente de trabalho para que possa instalar as bibliotecas necessárias do script.

### Como instalar as dependências?

Você pode usar o npm ou yarn para instalar as dependências. Utilize um terminal ou prompt de comandos (em ambiente Windows):

```bash
yarn install ou npm install
```

### Como funciona?

O script gera um CSV de inteções, no formato esperado pelo IBM Watson. Para isso basta rodar o script **ibm-intents** (em ambiente Unix) ou **ibm-intents** (em ambiente Windows) na raiz do projeto.

```bash
./ibm-intents --file=/full/path/of/intents.txt
```

O seu arquivo de inteções deve conter uma inteção por linha, pode ser um arquivo simples de texto. Ex.:

```text
Intenção 1
Intenção 2
Intenção 3
Intenção X
```

No argumento **--file** passe o caminho completo do arquivo de inteções.

O arquivo de saída é gerado na pasta **/storage** da raíz do projeto.
