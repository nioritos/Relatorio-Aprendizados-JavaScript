var nomeVariavel; //var é um tipo de variável que pode ter seu valor trocado, porém com "destinos/modos de usar o escopo" e "funcções internas" e uma certa liberdade. Como o hosting, podendo ter 2 variáveis com o mesmo nome "sem problemas (sem retornar que a variaável com o nome já existe)"=.
let nameVariavel; //let é um tipo de variável que pode ter seu valor trocado, porém com restrições que o var tem a liberdade de usar. Mas especificamente, o let é posto em um bloco de código, ele irá trabalhar apenas neste bloco .
// exemplo : 

//hoisting do var

console.log(aMenssage)
var aMenssage = 'oi';


// o que acontece : 

// var aMenssage;
// console.log(aMenssage); 
//o que acontece é a elevação da váriavel sem o seu valor para antes do console.log(), que assim, não retorna um ReferenceError (erro de referência).
function retEscopo() {
    for(var i = 4;i < 5; i++) {
        console.log(i)
    }

console.log('////////////////////////////////////////////////////////////////////////////////////////// separation')

    if(i === 3) {
        return(
            console.log(true)
        )
    }else {
        return (
            console.log(false)
        )
    }

    //retorna um dos argumentos, pois o var e seu valor, estão disponíveis.
}

retEscopo();

console.log('////////////////////////////////////////////////////////////////////////////////////////// separation')


function retLetEscopo() {
    for(let i = 0; i < 5; i++) {
        console.log(i)
    }

console.log('////////////////////////////////////////////////////////////////////////////////////////// separation')


    /*     if(i === 0) {
        return(
            console.log(true)
        )
    }else{
        return(
            console.log(false)
        )
    }       */

    // retorna undenifed, pois o let e seu valor não estão disponíveis

};

retLetEscopo();


/*A diferença é que  (recomendo rodar o código):
    O var, fora do bloco de código (neste caso, é o for()), eu posso acessa-la e consequentemente, se eu quiser, eu posso trata-la.
    Porém, com o let, fora do bloco de código, eu NÃO posso acessa-la, pois o let quando posto em um bloco de código, ele apenas fica acessível, dentro do bloco. Diferente do var, que fica sim disponivél, já que trabalha apenas com escopo local e global.
    */


const nomeVariavelConstante = 0; // const é um tipo de variável que não pode ter seu valor trocado.

/*nomeVariavelConstante = 1; */
console.log(nomeVariavelConstante);

//retorna ERROR de substituição de valor de uma variável constante, pois não pode ser trocada.
