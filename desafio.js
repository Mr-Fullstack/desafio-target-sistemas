console.log(`\n\n\n=====================================================`)
console.log(`1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
Imprimir(SOMA);
Ao final do processamento, qual será o valor da variável SOMA? 
`)

console.log(`Resposta: \n`)

console.log(`
  /*Enquanto K < INDICE faça { 

  K = K + 1; 1+0  = (1) => 
  K = K + 1  1+1  = (2) => 
  K = K + 1  2+1  = (3) => 
  K = K + 1  3+1  = (4) => 
  K = K + 1  4+1  = (5) => 
  K = K + 1  5+1  = (6) => 
  K = K + 1  6+1  = (7) => 
  K = K + 1  7+1  = (8) => 
  K = K + 1  8+1  = (9) => 
  K = K + 1  9+1  = (10) => 
  K = K + 1  10+1 = (11) => 
  K = K + 1  11+1 = (12) 
  
  SOMA = SOMA + K;  0+1   = (1)  => 
  SOMA = SOMA + K   2+1   = (3)  => 
  SOMA = SOMA + K   3+3   = (6)  => 
  SOMA = SOMA + K   6+4   = (10) => 
  SOMA = SOMA + K   10+5  = (15) => 
  SOMA = SOMA + K   15+6  = (21) => 
  SOMA = SOMA + K   21+7  = (28) =>  
  SOMA = SOMA + K   28+8  = (36) => 
  SOMA = SOMA + K   36+9  = (45) => 
  SOMA = SOMA + K   45+10 = (55) => 
  SOMA = SOMA + K   55+11 = (66) => 
  SOMA = SOMA + K   66+12 = (78) => 
  SOMA = SOMA + K   78+13 = (91)

}

Imprimir(SOMA) // SOMA IGUAL A 91;

*/`)

console.log(`\n\n\n=====================================================`)

function isFibonacci(num){

  const fibonacci = [0,1]
 
  for (let currentNum = 0; currentNum < num ; currentNum++ ){
    let nextNum = fibonacci[fibonacci.length -1]+fibonacci[fibonacci.length -2]
    fibonacci.push(nextNum)
  }

  if( fibonacci.includes(num) )
    console.log(`Número atual ${num} - este número pertence a sequência fibonacci.`)
  else
    console.log(`Número atual ${num} - este número NÃO pertence a sequência fibonacci.`)
}


console.log(`2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
  
`)

console.log(`Resposta: \n`)
isFibonacci(2)

console.log(`\n\n\n=====================================================`)

const faturamentoDiario = [
  6736.43,
  9421.76,
  5712.37,
  571.19,
  398.93,
  786.78,
  136.83,
  6124.11,
  636.13,
  8936.03,
  2836.08,
  3625.40,
  7936.79
]


function calcularFaturamentoDiario(faturamentoDiario){
  total = faturamentoDiario.reduce((acc,next)=> acc+next)
  media = total/faturamentoDiario.length
  maiorFaturamento =  Math.max(...faturamentoDiario)
  menorFaturamento =  Math.min(...faturamentoDiario)
  valorSuperadoAMediamensal = faturamentoDiario.filter((value)=> value > media )

  console.log(`1- O menor valor de faturamento ocorrido em um dia do mês : ${ new Intl.NumberFormat('pt-BR',{ style: 'currency', currency: 'BRL' }).format(menorFaturamento)}
    2- O maior valor de faturamento ocorrido em um dia do mês : ${ new Intl.NumberFormat('pt-BR',{ style: 'currency', currency: 'BRL' }).format(maiorFaturamento)}
    3- Número de dias no mês em que o valor de faturamento diário foi superior à média mensal : ${valorSuperadoAMediamensal.length}   
  `)

}

console.log(` 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
  • O menor valor de faturamento ocorrido em um dia do mês;
  • O maior valor de faturamento ocorrido em um dia do mês;
  • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.
`)

console.log(`Resposta: \n`)
calcularFaturamentoDiario(faturamentoDiario)

console.log(`\n\n\n=====================================================`)
const faturamentoMensal = { 
 SP :67836.43,
 RJ :36678.66,
 MG :29229.88,
 ES :27165.48,
 Outros : 19849.53
}

function calcularFaturamentoMensal(faturamentoMensal){
  estados = Object.keys(faturamentoMensal)
  faturamentos = Object.values(faturamentoMensal)
  total = faturamentos.reduce((acc,next)=> acc+next)

  console.log('Percentual de representação: do valor total de ' + new Intl.NumberFormat('pt-BR',{ style: 'currency', currency: 'BRL' }).format(total))
  faturamentos.map((faturamento,index)=>{
    console.log(`${estados[index]} = ${new Intl.NumberFormat('pt-BR',{ style: 'currency', currency: 'BRL' }).format(faturamento)} => ${((faturamento / total) * 100).toFixed(2)}%`)
  })

}

console.log(`(4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
  
• SP – R$67.836,43
• RJ – R$36.678,66
• MG – R$29.229,88
• ES – R$27.165,48
• Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora. \n `)

console.log(`Resposta: \n`)

calcularFaturamentoMensal(faturamentoMensal)

// 5) Escreva um programa que inverta os caracteres de um string.
console.log(`\n\n\n=====================================================`)
console.log(`5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse; \n `)

function inverteCaracteres(caracteres){
  let novoCaractereInvertido=''
  for(let caractere = caracteres.length - 1; caractere > -1; caractere--) {
    novoCaractereInvertido += caracteres[caractere]
  }
  return novoCaractereInvertido
}

const entradaCaractere = 'arieuqreC oinotnA socraM' 
console.log(`Resposta: \n`)
console.log(`entrada => ${entradaCaractere} \nsaida => ${inverteCaracteres(entradaCaractere)}`)
console.log(`\n\nFIM\n\n`)