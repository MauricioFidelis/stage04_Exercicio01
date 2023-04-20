/*

Stage 04

Desafio:

Exercício 01

O que será abordado nesse desafio:

- Variáveis;
- Operações matemáticas;
- Operadores comparativos;
- Condicional.

Nesse desafio, você irá solicitar ao usuário que ele insira dois números e, a partir daí, calcular:

- A soma dos dois números;
- A subtração dos dois números;
- A multiplicação dos dois números;
- A divisão dos dois números;
- O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar?

- Verifique se a soma dois números é par (ou ímpar);
- Verifique se os dois números inseridos são iguais(ou diferentes).




*/ 

let firstNumber = prompt('Digite o primeiro número: ');
let secondNumber = prompt('Digite o segundo número');

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

const sum = firstNumber + secondNumber;
const subt = firstNumber - secondNumber;
const mult = firstNumber * secondNumber;
const div = (firstNumber / secondNumber).toFixed(2);
const restDiv = firstNumber % secondNumber;



alert('A soma dos dois números é: ' + sum);
alert('A subtração dos dois números é: ' + subt);
alert('A multiplicação dos dois números é: ' + mult);
alert('A divisão dos dois números é: ' + div);
alert('O resto da divisão dos dois números é: ' + restDiv);

if(sum % 2 == 0){
    alert(`A soma dos números ${firstNumber} e ${secondNumber} é igual a ${sum} que é um número par`);
}else {
    alert(`A soma dos números ${firstNumber} e ${secondNumber} é igual a ${sum} que é um número ímpar`); 
};

const comparison = firstNumber == secondNumber?  'iguais' : 'diferentes';

alert(`Os números ${firstNumber} e ${secondNumber} são ${comparison}`);