const readline = require("readline");

function input(prompt: string, min: number = 1, max: number = 10): Promise<number> {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        const pergunta = () => {
            rl.question(prompt, (answer: string) => {
                const num = Number(answer.trim());
                if (!isNaN(num) && num >= min && num <= max) {
                    rl.close();
                    resolve(num);
                } else {
                    console.log(`Por favor, digite um número entre ${min} e ${max}.`);
                    pergunta();
                }
            });
        };
        pergunta();
    });
}

async function avaliacao() {
    console.log("Avalie o colaborador em cada questão, sendo 1 a nota mais baixa e 10 a mais alta.");
    const pergunta1 : number = await input("O colaborador atinge as metas e objetivos estabelecidos?");
    const pergunta2 : number = await input("O desempenho é consistente e está acima das expectativas?");
    const pergunta3 : number = await input("Ele entrega o trabalho com qualidade e no prazo?");
    const pergunta4 : number = await input("O profissional demonstra organização e iniciativa em suas tarefas?");
    const pergunta5 : number = await input("Ele lida bem com os desafios e situações inesperadas? ");
    const pergunta6 : number = await input("O colaborador demonstra disposição para aprender e crescer?");
    const pergunta7 : number = await input("Ele busca ativamente oportunidades de desenvolvimento profissional?");
    const pergunta8 : number = await input("Ele se mostra motivado e engajado com a missão da equipe e da empresa? ");
    const pergunta9 : number = await input("Ele é receptivo a feedback e os aplica em seu trabalho?");
    const pergunta10 : number = await input("Demonstra potencial de liderança, como aptidão ou desejo de assumir posições de liderança?");

    
    const desempenho = ((pergunta1+pergunta2+pergunta3+pergunta4+pergunta5) / 5);
    const potencial = ((pergunta6+pergunta7+pergunta8+pergunta9+pergunta10) / 5);

    if(potencial >= 7 && desempenho >= 7){
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
        } else if(potencial >=7 && desempenho >=4 && desempenho < 7){
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
        } else if(potencial > 7 && desempenho < 4){
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
        `)} else if(potencial < 7 && potencial >=4 && desempenho >= 7){
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
        } else if(potencial < 7 && potencial >=4 && desempenho < 7 && desempenho >= 4){
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
        } else if(potencial < 7 && potencial >=4 && desempenho < 4){
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
        `);} else if(potencial < 4 && desempenho >= 7){
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
        } else if(potencial <4 && desempenho >=4 && desempenho < 7){
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
        } else if(potencial < 7 && desempenho < 4){
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

avaliacao();


