# Criação de Component Button - Lemon Energia

Este repositório foi criado para o teste de vaga Frontend Jr. da Lemon Energia 🍋

Nele você encontra a criação de um Componente Button

## Para Começar.

### `npm install`

Ao clonar este repositório, execute `npm install` para adicionar todos os node_modules necessários para rodar em modo de desenvolvimento.

### `npm start`

Com este comando você inicia o app no modo de desenvolvimento.
Abra [http://localhost:3000](http://localhost:3000) para ver em seu navegador.

Nesta página você verá uma simples execução de um contador usando o Button que foi criado, eles recebem diferentes props para terem diferentes estilos.

Obs: a página irá recarregar quando detectar qualquer mudança no código.

## Onde Encontrar o Código do Componente.

O código do componente Button pode ser visto dentro da pasta components. Todos os SVGs utilizados podem ser encontrados na pasta assets, segue uma demonstração dos diretórios para exemplificar.

```bash
───src
   └───components
       └───assets
       └───Button.jsx
```

## Sobre o Código.

Ele foi inteiramente construido utilizando Styled-Components.

Todas as propriedades solicitadas estão presentes. ['color', 'icon', 'disabled'].

Ainda falando sobre as props, foi usado propTypes para definir seus devidos valores default (color: 'primary', icon: none, disabled: false). Também foram realizados tratamentos de erros, caso uma própriedade receba um valor desconhecido.

## Página Inicial.

Essa é uma página simples, com a intenção de somente demonstrar o funcionamento do componente que foi criado.
Ao executar `npm start` você irá visualizar uma página com um contador e 5 botões que realizam diferentes ações.
- Incrementar: aumenta o valor do contador.
- Decrementar: diminui o valor do contador.
- Resetar: volta o contador para zero.
- Finalizar: encerra todas as ações que os botões poderiam realizar, atribuindo a propriedade disabled a eles.
- Retomar: devolve as ações aos botões, retirando a propriedade disabled deles.
