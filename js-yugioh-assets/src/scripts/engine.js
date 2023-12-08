const state ={
    score: {
        playerScore: 0,
        computerScore: 0,
        scoreBox: document.getElementById("score_points"),
    },
    cardScriptes: {
        avatar: document.getElementById("card-image"),
        name: document.getElementById("card-name"),
        type: document.getElementById("card-type"),
    },
    fieldCards: {
        player: document.getElementById("player-field-card"),
        computer: document.getElementById("computer-field-card"),
    },
    playerSides:{
        player1: "player-cards",
        player1BOX:document.querySelector("#computer-cards"),
        computer: "computer-cards",
        computerBOX: document.querySelector("#player-cards"),
    },
    actions: {
        button: document.getElementById("next-duel"),
    },
};

const pathImages = "./src/assets/icons/";
const cardData = [
    {
        id:0,
        name: "Blue Eyes White Dragon",
        type:"Paper",
        img:`${pathImages}dragon.png`,
        WinOf: [1],
        LoseOf: [2],
    },
    {
        id:1,
        name: "Dark Magician",
        type:"Rock",
        img:`${pathImages}magician.png`,
        WinOf: [2],
        LoseOf: [0],
    },
    {
        id:2,
        name: "Exodia",
        type:"Scissors",
        img:`${pathImages}exodia.png`,
        WinOf: [0],
        LoseOf: [1],
    },
];

async function getRandomCardId(){
    const randomIndex = Math.floor(Math.random() * cardData.length);
    return cardData[randomIndex].id;
}

async function createCardImage(IdCard, fieldSide){
    const cardImage = document.createElement("img");
    cardImage.setAttribute("height", "100px");
    cardImage.setAttribute("src", "./src/assets/icons/card-back.png");
    cardImage.setAttribute("data-id", IdCard); //o data permite criar atributos dinamicos pro html e o nome desse atributo
    cardImage.classList.add("card"); //adiciona uma classe 

    if(fieldSide === playerSides.player1){

        cardImage.addEventListener("mouseover", () => {     //quando passar o mouse
        drawSelectCard(IdCard);                            //chamar essa função pra mostrar a carta
    })                           

        cardImage.addEventListener("click", ()=> {              // se a carta for do lado do player,td vz que
            setCardsField(cardImage.getAttribute("data-id"))   //  clicar em uma carta elavai levar ela pro meio
        })
    }

    return cardImage;
}

async function setCardsField(cardId){ 
    await removeAllCardsImages();

    let computerCardId = await getRandomCardId(); //sorteia uma carta aleatori ro pc

    ShowhiddenCardFieldsImages(true);

    await hiddenCardDetails();

    await drawCardsInField(cardId, computerCarId);

    let duelResults = await checkDuelResults(cardId, computerCardId);

    await updateScore();
    await drawButton(duelResults);
}   

async function hiddenCardDetails(){
    state.cardScriptes.avatar.src = "";
    state.cardScriptes.name.innerText = "";
    state.cardScriptes.type.innerText = "";
}

async function ShowhiddenCardFieldsImages(value){
    if (value == true){
        state.fieldCards.player.style.display = "block";
        state.fieldCards.computer.style.display = "block";
    }

    if(value == false){
        state.fieldCards.player.style.display = "none";
        state.fieldCards.computer.style.display ="none"; 
    }
}

async function drawCardsInField(cardId, computerCardId){
    state.fieldCards.player.src = cardData[cardId].img;
    state.fieldCards.computer.src = cardData[computerCardId].img;
}
async function drawButton(text) {
    state.actions.button.innerText = text.toUpperCase();
    state.actions.style.display = "block"
}

async function updateScore(){
    state.score.scoreBox.innerText = `Win: ${state.score.playerScore} | Lose: ${state.score.computerScore}`;
}

async function checkDuelResults(playerCardId, computerCardId){
    let duelResults = "Draw";
    let playerCard = cardData[playerCardId];

    if(playerCard.WinOf.includes(computerCardId)) {
        duelResults = "Win";
        await playAudio(duelResults);
        state.score.playerScore++;
    }

    if(playerCard.LoseOf.includes(computerCardId)){
        duelResults = "Loser";
        await playAudio(duelResults);
        state.score.computerScore++;
    } 

    

    return duelResults;
}

async function reset(){
    state.cardSprites.avatar.src = "";
    state.actions.button.style.display = "none";

    state.fieldCards.player.style.display = "none";
    state.fieldCards.computer.style.display = "none";

    init();
}

async function playAudio(status){
    const audio = new Audio(`./src/assets/audios/${status}.wav`)
    try{
        audio.play();
    }catch{ }
    
}

async function removeAllCardsImages(){
    let {computerBOX, player1BOX} = state.playerSides;
    let imgElements = computerBOX.querySelectorAll("img");
    imgElements.forEach((img) => img.remove());

    imgElements = player1BOX.querySelectorAll("img");
    imgElements.forEach((img) => img.remove());
}

async function drawSelectCard(index){
    state.cardScriptes.avatar.src = cardData[index].img;
    state.cardScriptes.name.innerText = cardData[index].name;
    state.cardScriptes.type.innerText = "Attibute : " + cardData[index].type;
}

async function drawCards(cardNumbers, fieldSide){
    for (let i = 0; i < cardNumbers; i++){
        const randomIdCard = await getRandomCardId();
        const cardImage = await createCardImage(randomIdCard,fieldSide);

        document.getElementById(fieldSide).appendChild(cardImage);
    }
}


function init(){

    ShowhiddenCardFieldsImages(false);

    drawCards(5, playerSides.player1);
    drawCards(5, playerSides.computer);

    const bgm = document.getElementById("bgm")
    bgm.play();
}

init();