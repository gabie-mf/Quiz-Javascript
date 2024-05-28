export function game() {
    const jogador = prompt("Qual o seu nome?");

    let opcao = 10;
    let pontuacao = 0;
    
    while (opcao !== 0) {
        opcao = parseInt(prompt(`Bem-vindo ao Quiz Nerd, ${jogador}! Escolha uma opção para jogar: 1 - Harry Potter; 2 - Star Wars; 3 - Senhor dos Anéis ou 0 - Sair`));
    
        switch (opcao) {
            case 1:
                pontuacao += harryPotter();
                break;
    
            case 2:
                pontuacao += starWars();
                break;
    
            case 3:
                pontuacao += senhorDosAneis();
                break;
    
            case 0:
                alert("Você saiu!");
                break;
    
            default:
                alert("Digite uma opção válida.");
                break;
        }
    }
    
    alert(`Obrigado por jogar, ${jogador}! Sua pontuação foi: ${pontuacao}`); 
}

export function starWars() {
    let pontuacao = 0;
    let resposta;

    resposta = prompt("Darth Vader é o pai de Luke Skywalker. Verdadeiro ou falso? ");
    if (resposta.toLowerCase() === "verdadeiro") {
        console.log("Parabéns!");
        pontuacao++;
    } else {
        console.log("Resposta incorreta. Darth Vader é o pai de Luke Skywalker.");
    }

    resposta = prompt("O planeta natal de Han Solo é Naboo. Verdadeiro ou falso? ");
    if (resposta.toLowerCase() === "falso") {
        console.log("Parabéns!");
        pontuacao++;
    } else {
        console.log("Resposta incorreta, o planeta natal dele é Corellia.");
    }

    resposta = prompt("A Estrela da Morte foi destruída duas vezes ao longo da trilogia original. Verdadeiro ou falso? ");
    if (resposta.toLowerCase() === "verdadeiro") {
        console.log("Parabéns!");
        pontuacao++;
    } else {
        console.log("Resposta incorreta. ");
    }

    resposta = prompt("Yoda é da mesma espécie que Chewbacca. Verdadeiro ou falso? ");
    if (resposta.toLowerCase() === "falso") {
        console.log("Parabéns!");
        pontuacao++;
    } else {
        console.log("Resposta incorreta. O Chewbacca é um Wookie e a espécie do Yoda é desconhecida.");
    }

    resposta = prompt("Leia Organa é a irmã gêmea de Luke Skywalker. Verdadeiro ou falso? ");
    if (resposta.toLowerCase() === "verdadeiro") {
        console.log("Parabéns!");
        pontuacao++;
    } else {
        console.log("Resposta incorreta. ");
    }

    resposta = prompt("O verdadeiro nome do Imperador Palpatine é Sheev. Verdadeiro ou falso? ");
    if (resposta.toLowerCase() === "verdadeiro") {
        console.log("Parabéns!");
        pontuacao++;
    } else {
        console.log("Resposta incorreta. ");
    }

    resposta = prompt("Kylo Ren é filho de Luke Skywalker. Verdadeiro ou falso? ");
    if (resposta.toLowerCase() === "falso") {
        console.log("Parabéns!");
        pontuacao++;
    } else {
        console.log("Resposta incorreta. Ele é filho do Han Solo.");
    }

    resposta = prompt("Jar Jar Binks é um Sith Lord disfarçado. Verdadeiro ou falso? ");
    if (resposta.toLowerCase() === "falso") {
        console.log("Parabéns!");
        pontuacao++;
    } else {
        console.log("Resposta incorreta. ");
    }

    resposta = prompt("A nave de Han Solo se chama Millennium Falcon. Verdadeiro ou falso? ");
    if (resposta.toLowerCase() === "verdadeiro") {
        console.log("Parabéns!");
        pontuacao++;
    } else {
        console.log("Resposta incorreta. ");
    }

    resposta = prompt("Os Ewoks ajudam a Aliança Rebelde na Batalha de Endor. Verdadeiro ou falso? ");
    if (resposta.toLowerCase() === "verdadeiro") {
        console.log("Parabéns!");
        pontuacao++;
    } else {
        console.log("Resposta incorreta. ");
    }

    return pontuacao;
}

export function harryPotter() {
    let pontuacao = 0;
    let resposta;

    resposta = prompt("Albus Dumbledore tem uma irmã chamada Ariana. Verdadeiro ou falso? ");
    if (resposta.toLowerCase() === "verdadeiro") {
        console.log("Parabéns!");
        pontuacao++;
    } else {
        console.log("Resposta incorreta. ");
    }

    resposta = prompt("Os Dementadores são guardiões de Azkaban. Verdadeiro ou falso? ");
    if (resposta.toLowerCase() === "verdadeiro") {
        console.log("Parabéns!");
        pontuacao++;
    } else {
        console.log("Resposta incorreta.");
    }

    resposta = prompt("Ninfadora Tonks pode mudar sua aparência à vontade. Verdadeiro ou falso? ");
    if (resposta.toLowerCase() === "verdadeiro") {
        console.log("Parabéns!");
        pontuacao++;
    } else {
        console.log("Resposta incorreta. ");
    }

    resposta = prompt("A professora Minerva McGonagall pode se transformar em um gato. Verdadeiro ou falso? ");
    if (resposta.toLowerCase() === "verdadeiro") {
        console.log("Parabéns!");
        pontuacao++;
    } else {
        console.log("Resposta incorreta.");
    }

    resposta = prompt("Hagrid é meio-gigante. Verdadeiro ou falso? ");
    if (resposta.toLowerCase() === "verdadeiro") {
        console.log("Parabéns!");
        pontuacao++;
    } else {
        console.log("Resposta incorreta. ");
    }

    resposta = prompt("O nome verdadeiro de Lord Voldemort é Tom Marvolo Riddle. Verdadeiro ou falso? ");
    if (resposta.toLowerCase() === "verdadeiro") {
        console.log("Parabéns!");
        pontuacao++;
    } else {
        console.log("Resposta incorreta. ");
    }

    resposta = prompt("Hermione Granger é filha de bruxos. Verdadeiro ou falso? ");
    if (resposta.toLowerCase() === "falso") {
        console.log("Parabéns!");
        pontuacao++;
    } else {
        console.log("Resposta incorreta. Ela é filha de trouxas.");
    }

    resposta = prompt("O Patrono de Harry Potter é um cervo. Verdadeiro ou falso? ");
    if (resposta.toLowerCase() === "verdadeiro") {
        console.log("Parabéns!");
        pontuacao++;
    } else {
        console.log("Resposta incorreta. ");
    }

    resposta = prompt("Severus Snape era o professor de Defesa Contra as Artes das Trevas em todos os anos em que Harry estava em Hogwarts. Verdadeiro ou falso? ");
    if (resposta.toLowerCase() === "falso") {
        console.log("Parabéns!");
        pontuacao++;
    } else {
        console.log("Resposta incorreta. ");
    }

    resposta = prompt("Dobby é um elfo doméstico que Harry liberta. Verdadeiro ou falso? ");
    if (resposta.toLowerCase() === "verdadeiro") {
        console.log("Parabéns!");
        pontuacao++;
    } else {
        console.log("Resposta incorreta. ");
    }

    return pontuacao;
}

export function senhorDosAneis() {
    let pontuacao = 0;
    let resposta;

    resposta = prompt("Frodo Bolseiro é o personagem principal da trilogia O Senhor dos Anéis. Verdadeiro ou falso? ");
    if (resposta.toLowerCase() === "verdadeiro") {
        console.log("Parabéns!");
        pontuacao++;
    } else {
        console.log("Resposta incorreta. ");
    }

    resposta = prompt("Gandalf é um elfo. Verdadeiro ou falso? ");
    if (resposta.toLowerCase() === "falso") {
        console.log("Parabéns!");
        pontuacao++;
    } else {
        console.log("Resposta incorreta, ele é um mago.");
    }

    resposta = prompt("O Um Anel foi destruído na Montanha da Perdição. Verdadeiro ou falso? ");
    if (resposta.toLowerCase() === "verdadeiro") {
        console.log("Parabéns!");
        pontuacao++;
    } else {
        console.log("Resposta incorreta. ");
    }

    resposta = prompt("Legolas é o rei de Rohan. Verdadeiro ou falso? ");
    if (resposta.toLowerCase() === "falso") {
        console.log("Parabéns!");
        pontuacao++;
    } else {
        console.log("Resposta incorreta. Théoden é o Rei de Rohan.");
    }

    resposta = prompt("Aragorn é o herdeiro do trono de Gondor. Verdadeiro ou falso? ");
    if (resposta.toLowerCase() === "verdadeiro") {
        console.log("Parabéns!");
        pontuacao++;
    } else {
        console.log("Resposta incorreta. ");
    }

    resposta = prompt("Gollum costumava ser um Hobbit chamado Sméagol. Verdadeiro ou falso? ");
    if (resposta.toLowerCase() === "verdadeiro") {
        console.log("Parabéns!");
        pontuacao++;
    } else {
        console.log("Resposta incorreta. ");
    }

    resposta = prompt("Saruman é um aliado de Sauron. Verdadeiro ou falso? ");
    if (resposta.toLowerCase() === "verdadeiro") {
        console.log("Parabéns!");
        pontuacao++;
    } else {
        console.log("Resposta incorreta. ");
    }

    resposta = prompt("A Sociedade do Anel é composta por nove membros. Verdadeiro ou falso? ");
    if (resposta.toLowerCase() === "verdadeiro") {
        console.log("Parabéns!");
        pontuacao++;
    } else {
        console.log("Resposta incorreta. ");
    }

    resposta = prompt("Galadriel é a Rainha dos Elfos de Lothlórien. Verdadeiro ou falso? ");
    if (resposta.toLowerCase() === "verdadeiro") {
        console.log("Parabéns!");
        pontuacao++;
    } else {
        console.log("Resposta incorreta. ");
    }

    resposta = prompt("O dragão Smaug aparece na trilogia O Senhor dos Anéis. Verdadeiro ou falso? ");
    if (resposta.toLowerCase() === "falso") {
        console.log("Parabéns!");
        pontuacao++;
    } else {
        console.log("Resposta incorreta, ele aparece em O Hobbit. ");
    }

    return pontuacao;
}
