const perguntas = [
    {
        pergunta: "O que é NVDI?",
        correta: "Índice de vegetação",
        respostas: [
            "Índice de vegetação",
            "Tipo de satélite",
            "Tipo de mapas"
        ]
    }
];

let pontos = 0;

function finalizarQuiz(){
    resultado.innerHTML = `
    Você acertou ${pontos} de 10 perguntas
    `;
}