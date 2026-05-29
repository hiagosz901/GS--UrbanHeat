const perguntas = [

    {
        pergunta: "O que é uma ilha de calor urbana?",
        respostas: [
            "Área urbana mais quente",
            "Área rural fria",
            "Área coberta por rios"
        ],
        correta: 0
    },

    {
        pergunta: "O que o NDVI mede?",
        respostas: [
            "Cobertura vegetal",
            "Velocidade do vento",
            "Quantidade de carros"
        ],
        correta: 0
    },

    {
        pergunta: "Qual satélite é usado no UrbanHeat?",
        respostas: [
            "Starlink",
            "Landsat",
            "GPS"
        ],
        correta: 1
    },

    {
        pergunta: "O que aumenta as ilhas de calor?",
        respostas: [
            "Plantio de árvores",
            "Áreas verdes",
            "Asfalto e concreto"
        ],
        correta: 2
    },

    {
        pergunta: "O que significa LST?",
        respostas: [
            "Temperatura da superfície",
            "Nível do mar",
            "Tipo de vegetação"
        ],
        correta: 0
    },

    {
        pergunta: "Qual tecnologia o UrbanHeat utiliza para processamento?",
        respostas: [
            "Google Earth Engine",
            "Photoshop",
            "Excel"
        ],
        correta: 0
    },

    {
        pergunta: "Qual é um benefício da arborização urbana?",
        respostas: [
            "Aumento do calor",
            "Redução da temperatura",
            "Mais poluição"
        ],
        correta: 1
    },

    {
        pergunta: "Quem pode utilizar o UrbanHeat?",
        respostas: [
            "Apenas programadores",
            "Somente astronautas",
            "Gestores, urbanistas e cidadãos"
        ],
        correta: 2
    },

    {
        pergunta: "Qual ODS o UrbanHeat ajuda?",
        respostas: [
            "ODS 11 e 13",
            "ODS 1 e 2",
            "ODS 5 apenas"
        ],
        correta: 0
    },

    {
        pergunta: "O objetivo do UrbanHeat é:",
        respostas: [
            "Aumentar áreas industriais",
            "Mapear calor urbano e ajudar cidades",
            "Criar jogos"
        ],
        correta: 1
    }

];

let perguntaAtual = 0;

let pontos = 0;

const pergunta = document.getElementById("pergunta");

const respostas = document.getElementById("respostas");

const resultado = document.getElementById("resultado");


function carregarPergunta(){

    const atual = perguntas[perguntaAtual];

    pergunta.innerHTML = `
        <h3>${atual.pergunta}</h3>
    `;

    respostas.innerHTML = "";

    atual.respostas.forEach((resposta, index) => {

        respostas.innerHTML += `
            <button onclick="responder(${index})">
                ${resposta}
            </button>
        `;

    });

}


function responder(index){

    if(index === perguntas[perguntaAtual].correta){

        pontos++;

    }

    perguntaAtual++;

    if(perguntaAtual < perguntas.length){

        carregarPergunta();

    }else{

        finalizarQuiz();

    }

}


function finalizarQuiz(){

    pergunta.innerHTML = "";

    respostas.innerHTML = "";

    resultado.innerHTML = `
        <h2>
            Você acertou ${pontos} de ${perguntas.length} perguntas
        </h2>
    `;
}


carregarPergunta();