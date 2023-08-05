function recebevalores(){
    let form = document.querySelector(".form");
    let resultado = document.querySelector(".resultado");

    let pessoas = [];

function recebeEventoForm(evento){
    evento.preventDefault();

    let nome = document.querySelector(".nome");
    let sobrenome = document.querySelector(".sobrenome");
    let peso = document.querySelector(".peso");
    let altura = document.querySelector(".altura");

    if(!nome){
        setResultado("Preencha o campo do nome!!", false);
        return;
    }
    if(!sobrenome){
        setResultado("Preencha o campo do sobrenome!!", false);
        return;
    }
    if(!peso){
        setResultado("Preencha o campo do peso!!", false);
        return;
    }
    if(!altura){
        setResultado("Preencha o campo do altura!!", false);
        return;
    }
    let inputPeso = Number(peso.value);
    let inputAltura = Number(altura.value);
    
    
    //chamada da função de calcular o IMC dentro de recebevalores()
    let imc = calcIMC(inputPeso,inputAltura);
    //chamada da função de verificar o nível do IMC dentro de recebevalores()
    let nivel = nivelIMC(imc);

    //acrescentar os objetos ao array
    pessoas.push({
        nome:nome.value,
        sobrenome:sobrenome.value,
        peso:inputPeso,
        altura:inputAltura,
        imc:imc,
        nivel:nivel}) 

    
    console.log(pessoas)
    
    resultado.innerHTML = (`Olá ${nome.value} ${sobrenome.value}! Você tem ${altura.value} de altura, seu peso corporal é de ${peso.value} Kg. Seu IMC é de ${imc} e você está ${nivel}. `)
}//fechamento da função recebeEventoForm

//adição do evento submit ao clicar no botao
form.addEventListener('submit',recebeEventoForm);

}//fechamento da função recebevalores


//função para calcular o IMC
function calcIMC(inputPeso,inputAltura){
    let imc = inputPeso / (inputAltura**2);
    return imc.toFixed(1); 
}
//função para verificar o nivel do IMC
function nivelIMC(imc){
    let nivel = ['Abaixo do peso', 'com peso normal', 'Sobrepeso',
    'com obesidade grau 1', 'com obesidade grau 2', 'com obesidade grau 3'];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];

}
//chamada da função recebevalores, valores recebidos dentro do formulário
recebevalores();
