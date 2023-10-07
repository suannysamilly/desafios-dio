
//entrada

let nameHero= "My Lady";
let quantXp= 7001;
let nivelHero;



if (quantXp <= 1000){
	nivelHero = "Ferro";
} else if ((quantXp >= 1001) && (quantXp <= 2000)){
	nivelHero = "Bronze";
} else if ((quantXp >= 2001) && (quantXp <= 6000)) {
	nivelHero = "Prata";
} else if ((quantXp >= 6001) && (quantXp <= 7000)) {
	nivelHero = "Ouro";
} else if ((quantXp >= 7001) && (quantXp <= 8000)) {
	nivelHero = "Platina";
} else if ((quantXp >= 8001) && (quantXp <= 9000)) {
	nivelHero = "Ascendente";
} else if ((quantXp >= 9001) && (quantXp <= 10000)) {
	nivelHero = "Imortal";
} else if (quantXp >= 10001){
	nivelHero = "Radiante";
} 

//saída
console.log(`A Heronína ${nameHero}, está no nível de ${nivelHero}.`)