
//The variable below is for the div that holds the game titles
const gameTitles = document.querySelector("#game-titles");

//The variables below are for the game details thatll be shown off
const gameImg = document.querySelector("#game-image");
const gameName =  document.querySelector("#game-name");
const gameDescription = document.querySelector("#game-description")
const gameTime = document.querySelector("#game-play-time")

//The variables below are the form that allows the user to add a comment
const commentForm = document.querySelector("#game-form")
const newComment = document.querySelector("#cart-amount")
const commentHTML = document.querySelector("#game-comments")

// Grabs the information in the data base
fetch("http://localhost:3000/games")
.then(resp => resp.json())
.then(gameList => {
    gameList.forEach(game => {
        const newSpan = document.createElement("span")
        newSpan.textContent = game.title;
        gameTitles.appendChild(newSpan)

        newSpan.addEventListener("click", ()=>{
            generateDetails(game);
        })
    });
    generateDetails(gameList[0])
})

// A new function to generate all the details within the game
function generateDetails(game){
    gameImg.src = game.image
    gameName.textContent = game.title
    // gameDescription.textContent = game.description
    gameTime.textContent = game.time + " hours of content"
}

commentForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    const commentSpan = document.createElement("span")
    const lineBreak = document.createElement("br")  

    commentSpan.textContent = newComment.value

    commentHTML.appendChild(lineBreak)
    commentHTML.appendChild(commentSpan);

    event.target.reset();
})