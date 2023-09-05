
//The variable below is for the div that holds the game titles
const container = document.querySelector("#game-titles");

//The variables below are for the game details thatll be shown off
const gameImg = document.querySelector("#game-image");
const gameName =  document.querySelector("#game-name");
const gameDescription = document.querySelector("game-description")
const gameTime = document.querySelector("#game-play-time")


// Grabs the information in the data base
fetch("http://localhost:3000/games")
.then(resp => resp.json())
.then(gameList => {
    console.log(gameList)
})