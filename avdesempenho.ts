
const prompt = require("prompt-sync")();

let desempenhoAvaliacaoGestor: number;
let potencialAvaliacaoGestor: number;
let pesoGestor = 7;

let desempenhoAvaliacaoColaborador: number;
let potencialAvaliacaoColaborador: number;
let pesoColaborador = 3;

function input(mensagem: string, min: number = 1, max: number = 5): Promise<number> {
    return new Promise((resolve) => {
        const perguntar = () => {
            const answer = prompt(mensagem);
            const num = Number(answer.trim());

            if (!isNaN(num) && num >= min && num <= max) {
                resolve(num);
            } else {
                console.log(`Por favor, digite um número entre ${min} e ${max}.`);
                perguntar();
            }
        };

        perguntar();
    });
}

async function avaliacaoGestor() {
    console.log(`Avalie o colaborador em cada questão de 1 a 5,sendo:
         1-Discordo totalmente.
         2-Discordo parcialmente.
         3-Não concordo, nem discordo.
         4-Concordo parcialmente.
         5-Concordo totalmente.`);
    const pergunta1 : number = await input("O colaborador atinge as metas e objetivos estabelecidos?");
    const pergunta2 : number = await input("O desempenho é consistente e está acima das expectativas?");
    const pergunta3 : number = await input("Ele entrega o trabalho com qualidade e no prazo?");
    const pergunta4 : number = await input("O profissional demonstra organização e iniciativa em suas tarefas?");
    const pergunta5 : number = await input("Ele lida bem com os desafios e situações inesperadas?");
    const pergunta6 : number = await input("O colaborador demonstra disposição para aprender e crescer?");
    const pergunta7 : number = await input("Ele busca ativamente oportunidades de desenvolvimento profissional?");
    const pergunta8 : number = await input("Ele se mostra motivado e engajado com a missão da equipe e da empresa? ");
    const pergunta9 : number = await input("Ele é receptivo a feedback e os aplica em seu trabalho?");
    const pergunta10 : number = await input("Demonstra potencial de liderança, como aptidão ou desejo de assumir posições de liderança?");

    
    desempenhoAvaliacaoGestor = ((pergunta1+pergunta2+pergunta3+pergunta4+pergunta5) / 5);
    potencialAvaliacaoGestor = ((pergunta6+pergunta7+pergunta8+pergunta9+pergunta10) / 5);
    pesoGestor = 6;

}

async function avaliacaoColaborador() {
    console.log(`Avalie a si mesmo em cada questão de 1 a 5,sendo:
         1-Discordo totalmente.
         2-Discordo parcialmente.
         3-Não concordo, nem discordo.
         4-Concordo parcialmente.
         5-Concordo totalmente.`);
    const pergunta1 : number = await input("Estou atingindo as metas e objetivos estabelecidos?");
    const pergunta2 : number = await input("Meu desempenho é consistente e está acima das expectativas?");
    const pergunta3 : number = await input("Estou entregando o trabalho com qualidade e no prazo?");
    const pergunta4 : number = await input("Demonstro organização e iniciativa em suas tarefas?");
    const pergunta5 : number = await input("Estou lidando bem com os desafios e situações inesperadas?");
    const pergunta6 : number = await input("Tenho disposição para aprender e crescer?");
    const pergunta7 : number = await input("Estou buscando ativamente oportunidades de desenvolvimento profissional?");
    const pergunta8 : number = await input("Me mantenho motivado e engajado com a missão da equipe e da empresa? ");
    const pergunta9 : number = await input("Sou receptivo a feedback e os aplica em meu trabalho?");
    const pergunta10 : number = await input("Demonstro potencial de liderança, como aptidão ou desejo de assumir posições de liderança?");

    
    desempenhoAvaliacaoColaborador = ((pergunta1+pergunta2+pergunta3+pergunta4+pergunta5) / 5);
    potencialAvaliacaoColaborador = ((pergunta6+pergunta7+pergunta8+pergunta9+pergunta10) / 5);
    pesoColaborador = 4;
}


async function calcularNinebox(){
    await avaliacaoGestor();
    await avaliacaoColaborador();

    const desempenho = ((desempenhoAvaliacaoGestor * pesoGestor) + (desempenhoAvaliacaoColaborador * pesoColaborador)) / (pesoGestor + pesoColaborador);
    const potencial = ((potencialAvaliacaoGestor * pesoGestor) + (potencialAvaliacaoColaborador * pesoColaborador)) / (pesoGestor + pesoColaborador);

    if(potencial >=3.66 && desempenho >=3.66){
        console.log(`
                |============|============|============|
    Potencial   |            |            |Sua Posição |
    Alto        |            |            |            | 
                |============|============|============|
    Potencial   |            |            |            | 
    Médio       |            |            |            | 
                |============|============|============|
    Potencial   |            |            |            | 
    Baixo       |            |            |            | 
                |============|============|============|
                Desempenho   Desempenho    Desempenho
                Baixo        Médio         Alto
        `);
        } else if(potencial >=3.66 && desempenho >=2.33 && desempenho <3.66){
             console.log(`
                |============|============|============|
    Potencial   |            |Sua Posição |            |
    Alto        |            |            |            | 
                |============|============|============|
    Potencial   |            |            |            | 
    Médio       |            |            |            | 
                |============|============|============|
    Potencial   |            |            |            | 
    Baixo       |            |            |            | 
                |============|============|============|
                Desempenho   Desempenho    Desempenho
                Baixo        Médio         Alto
        `);
        } else if(potencial >3.66 && desempenho <2.33){
             console.log(`
                |============|============|============|
    Potencial   |Sua Posição |            |            |
    Alto        |            |            |            | 
                |============|============|============|
    Potencial   |            |            |            | 
    Médio       |            |            |            | 
                |============|============|============|
    Potencial   |            |            |            | 
    Baixo       |            |            |            | 
                |============|============|============|
                Desempenho   Desempenho    Desempenho
                Baixo        Médio         Alto
        `)} else if(potencial < 3.66 && potencial >=2.33 && desempenho >=3.66){
        console.log(`
                |============|============|============|
    Potencial   |            |            |            |
    Alto        |            |            |            | 
                |============|============|============|
    Potencial   |            |            |Sua Posição | 
    Médio       |            |            |            | 
                |============|============|============|
    Potencial   |            |            |            | 
    Baixo       |            |            |            | 
                |============|============|============|
                Desempenho   Desempenho    Desempenho
                Baixo        Médio         Alto
        `);
        } else if(potencial < 3.66 && potencial >=2.33 && desempenho < 3.66 && desempenho >= 2.33){
             console.log(`
                |============|============|============|
    Potencial   |            |            |            |
    Alto        |            |            |            | 
                |============|============|============|
    Potencial   |            |Sua Posição |            | 
    Médio       |            |            |            | 
                |============|============|============|
    Potencial   |            |            |            | 
    Baixo       |            |            |            | 
                |============|============|============|
                Desempenho   Desempenho    Desempenho
                Baixo        Médio         Alto
        `);
        } else if(potencial < 3.66 && potencial >=2.33 && desempenho < 2.33){
             console.log(`
                |============|============|============|
    Potencial   |            |            |            |
    Alto        |            |            |            | 
                |============|============|============|
    Potencial   |Sua Posição |            |            | 
    Médio       |            |            |            | 
                |============|============|============|
    Potencial   |            |            |            | 
    Baixo       |            |            |            | 
                |============|============|============|
                Desempenho   Desempenho    Desempenho
                Baixo        Médio         Alto
        `);} else if(potencial < 2.33 && desempenho >= 3.66){
        console.log(`
                |============|============|============|
    Potencial   |            |            |            |
    Alto        |            |            |            | 
                |============|============|============|
    Potencial   |            |            |            | 
    Médio       |            |            |            | 
                |============|============|============|
    Potencial   |            |            |Sua Posição | 
    Baixo       |            |            |            | 
                |============|============|============|
                Desempenho   Desempenho    Desempenho
                Baixo        Médio         Alto
        `);
        } else if(potencial <2.33 && desempenho >=2.33 && desempenho < 3.66){
             console.log(`
                |============|============|============|
    Potencial   |            |            |            |
    Alto        |            |            |            | 
                |============|============|============|
    Potencial   |            |            |            | 
    Médio       |            |            |            | 
                |============|============|============|
    Potencial   |            |Sua Posição |            | 
    Baixo       |            |            |            | 
                |============|============|============|
                Desempenho   Desempenho    Desempenho
                Baixo        Médio         Alto
        `);
        } else if(potencial < 3.66 && desempenho < 2.33){
             console.log(`
                |============|============|============|
    Potencial   |            |            |            |
    Alto        |            |            |            | 
                |============|============|============|
    Potencial   |            |            |            | 
    Médio       |            |            |            | 
                |============|============|============|
    Potencial   |Sua Posição |            |            | 
    Baixo       |            |            |            | 
                |============|============|============|
                Desempenho   Desempenho    Desempenho
                Baixo        Médio         Alto
        `)}

}
calcularNinebox()

