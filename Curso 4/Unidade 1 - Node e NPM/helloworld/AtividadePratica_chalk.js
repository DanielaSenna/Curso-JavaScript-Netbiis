// npm install chalk
// O Chalk é uma biblioteca para colorir o texto no terminal. É muito simples e divertida para mostrar como pacotes npm podem melhorar a experiência visual de projetos no terminal.
// • Para começar, busque essa biblioteca no site do npm e tente entender o básico dela.
// • Crie um novo projeto npm, instale nele o chalk e escreva algumas mensagens coloridas no console.

import chalk from 'chalk';

console.log(chalk.blue('Este texto é azul!'));
console.log(chalk.bold.red('Este texto é vermelho e em negrito!'));
console.log(chalk.bgYellow.black('Texto com fundo amarelo e letras pretas!'));
console.log(chalk.underline.green('Este texto é verde e sublinhado!'));

console.log(chalk.magentaBright.bold.italic('Texto magenta, negrito e itálico!'));
