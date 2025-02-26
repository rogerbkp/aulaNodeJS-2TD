
const readline = require('readline-sync');
let idade = Number(readline.question("Qual sua idade? "))

if (idade<1 || idade>120) {
    console.log('Idade inválida');          
} else if (idade<18) {
        console.log('Menor de idade');
} else {
    console.log('Maior de idade');
}      
