// FEITO UTILIZANDO FUNÇÃO

// OBSERVAÇÕES

// Menor do que 10 = Ferro
// Entre 11 e 20 = Bronze
// Entre 21 e 50 = Prata
// Entre 51 e 80 = Ouro
// Entre 81 e 90 = Diamante
// Entre 91 e 100= Lendário
// Maior ou igual a 101 = Imortal

// SAÍDA

// Exibir O saldo de vitórias e seu nível
 

calculoSaldo(347,276)

function calculoSaldo(vitorias, derrotas) {
    let pontos = vitorias - derrotas
    let nivel;

    if (pontos <=10){}
    else if ((pontos >=11) && (pontos <=20)){
        nivel = "Bronze";
    }
    else if ((pontos >=21) && (pontos <=50)){
        nivel = "Prata";
    }
    else if ((pontos >=51) && (pontos <=80)){
        nivel ="Ouro";
    }
    else if ((pontos >=81) && (pontos <=90)){
        nivel="Diamante";
    }
    else if ((pontos >=91) && (pontos <=100)){
        nivel ="Lendario";
    }
    else {
        nivel= "Imortal";
      }
    console.log(`Você tem ${pontos} ponto(s) e seu nível é: ${nivel} `)
}