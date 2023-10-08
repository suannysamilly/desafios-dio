class hero {
	constructor (nome,idade,tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(){
        let ataque = "";

       switch (this.tipo){
        case "Guerreiro":
            ataque = "Uma espada";
            break;
        case "Mago":
            ataque = "Magia";
            break;
        case "Monge":
            ataque = "Artes marciais";
            break;
        case "Ninja":
            ataque = "Shuriken";
            break;
        default:
            ataque = "Sem ataques no momento";
        } 
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
    } 
}

const heroi1 = new hero("Kai-chan", 19, "Mago");
const heroi2 = new hero("Naruto", 34, "Ninja");

heroi1.atacar();
heroi2.atacar();