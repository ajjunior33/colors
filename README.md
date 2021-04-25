# Info
Acessibilidade. Parece que é a palavra do momento em alguns fóruns sobre tecnologia. Legal e entender que estamos separando um tempo para atender uma parcela de clientes que não eram vistas antes. Para definir minha parcela de trabalho nesse projeto, resolvi criar o projeto das cores, que pode ser que vire um SDK no futuro ( vai que comunidade open source curte a ideia haha ). Na ideia que tive eu aplico um padrão de cores e o meu sistema define se tem que aplicar um filtro para pessoas com daltonismo. E a partir disso, as fontes da página seguem a coloração do fundo. O legal e brincar com isso sem e com o modo Daltonismo.

Existem três tipos de daltonismo que conhecemos atualmente:

### Protanopia

Pessoas com protanopia enxergam vermelho como verde musgo, cinza ou marrom. Uma forma de contornar o problema e substituir vermelho por verde. Faço isso convertendo o hexadecimal em RGB e depois pego o valor da variável R (red) e armazeno na variável G ( green ) . 

Exemplo: 

```jsx
De: 255,0,0
Para: 0,255,0
```