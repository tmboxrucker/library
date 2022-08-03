let myLibrary = [];

function BoardGame(gameTitle, gamePlayerCountMin, gamePlayerCountMax, gameAge, gamePlayTime, gamePlayed, gameRating) {
    this.title = gameTitle;
    this.playerCountMin = gamePlayerCountMin;
    this.playerCountMax = gamePlayerCountMax
    this.age = gameAge;
    this.playTime = gamePlayTime;
    this.played = gamePlayed;
    this.rating = gameRating;
}

const addGame = document.getElementById('addGame');
const addGameModalForm = document.getElementById('testForm');
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');
const rating = document.getElementById('rating');
const played = document.getElementById('played');

activateRatings = () => {
    if (played.checked == true) {
        rating.classList.add('active');
    }
    else {
        rating.classList.remove('active');
    }
}

openModal = () => {
    addGameModalForm.reset();
    activateRatings();
    modal.classList.add('active');
    overlay.classList.add('active');
}

closeModal = () => {
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

function addGameToLibrary(game) {
    myLibrary.push(game)
}

addGame.onclick = openModal;
overlay.onclick = closeModal;
played.onclick = activateRatings;

console.log(modal);