// Declare empty library array
let myLibrary = [];
let newRating = '';
let edit = 0;
let editSave = '';

// Object constructor
// function book(title, author, pages, read) {
//     var yesOrNo;
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
//     if (read == 'no') {
//         yesOrNo = 'not read yet';
//     }
//     else if (read == 'yes') {
//         yesOrNo = 'has already been read';
//     }
//     else {
//         yesOrNo = 'invalid input';
//     }
//     this.info = function() {
//         return(title + ' by ' + author + ', ' + pages + ', ' + yesOrNo)
//     }
// }

// function BoardGame(gameTitle, gamePlayerCountMin, gamePlayerCountMax, gameAge, gamePlayTime, gamePlayed, gameRating) {
//     var yesOrNo;
//     this.title = gameTitle;
//     this.playerCountMin = gamePlayerCountMin;
//     this.playerCountMax = gamePlayerCountMax
//     this.age = gameAge;
//     this.playTime = gamePlayTime;
//     this.played = gamePlayed;
//     if (gamePlayed == true)  {
//         this.rating = newRating;
//     }
//     else {
//         this.rating = '';
//     }
//     if (typeof gameRating == 'string') {
//         this.rating = gameRating;
//     }
//     if (this.played == 'checked') {
//         activateRatings()
//     }
// }

class BoardGame {
    constructor (gameTitle, gamePlayerCountMin, gamePlayerCountMax, gameAge, gamePlayTime, gamePlayed, gameRating)
    {
        
        this.title = gameTitle;
        this.playerCountMin = gamePlayerCountMin;
        this.playerCountMax = gamePlayerCountMax
        this.age = gameAge;
        this.playTime = gamePlayTime;
        this.played = gamePlayed;
        if (gamePlayed == true)  {
            this.rating = newRating;
        }
        else {
            this.rating = '';
        }
        if (typeof gameRating == 'string') {
            this.rating = gameRating;
        }
    
        if (this.played == 'checked') {
            activateRatings()
        }
    }    
    
}

const addGame = document.getElementById('addGame');
const addGameModalForm = document.getElementById('testForm');
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');
const rating = document.getElementById('rating');
const played = document.getElementById('played');
const gameList = document.getElementById('gameList');
const organization = document.getElementById('sort');

const modalRating1 = document.getElementById('star5');
const modalRating2 = document.getElementById('star4');
const modalRating3 = document.getElementById('star3');
const modalRating4 = document.getElementById('star2');
const modalRating5 = document.getElementById('star1');

addGameToLibrary = (gameTitle, gamePlayerCountMin, gamePlayerCountMax, gameAge, gamePlayTime, gamePlayed, gameRating) => {
    let boardGame = new BoardGame(gameTitle, gamePlayerCountMin, gamePlayerCountMax, gameAge, gamePlayTime, gamePlayed, gameRating);
    myLibrary.push(boardGame);
    organizeGrid(organization);
    displayGameOnPage();
}

displayGameOnPage = () => {
    const removeDivs = document.querySelectorAll('.card');
    for (let i = 0; i < removeDivs.length; i++) {
        removeDivs[i].remove();
    }

    myLibrary.forEach(myLibrary => {
        const card = document.createElement('div');
        card.classList.add('card');
        gameList.appendChild(card);
        let playerHold = '';
        let ratingHold = '';

        const cardModifiers = document.createElement('div');
        cardModifiers.classList.add('cardModifiers');
        const images1 = document.createElement('img');
        const images2 = document.createElement('img');
        images1.setAttribute('src','images/trash.png');
        images2.setAttribute('src','images/edit.png');
        images1.setAttribute('alt','delete');
        images2.setAttribute('alt','edit');
        images1.setAttribute('id','delete');
        images2.setAttribute('id','edit');
        images1.setAttribute('onclick','deleteCurrent(this.parentNode.parentNode.childNodes[1].innerHTML)');
        images2.setAttribute('onclick','editCurrent(this.parentNode.parentNode.childNodes[1].innerHTML)')
        images1.classList.add('icon');
        images2.classList.add('icon');
        cardModifiers.appendChild(images1);
        cardModifiers.appendChild(images2);
        card.appendChild(cardModifiers);
        let increment = 0;
        for (let key in myLibrary) {
            increment++;
            if (key == 'title') {
                const para = document.createElement('p');
                para.textContent = (`Title: ${myLibrary[key]}`);
                card.appendChild(para);
            }
            else if (key == 'playerCountMin') {
                playerHold = key;
            }
            else if (key == 'playerCountMax') {
                const para = document.createElement('p');
                para.textContent = (`Player count: ${myLibrary[playerHold]} - ${myLibrary[key]}`);
                card.appendChild(para);
            }
            else if (key == 'age') {                
                const para = document.createElement('p');
                para.textContent = (`Age: ${myLibrary[key]}+`);
                card.appendChild(para);
            }
            else if (key == 'playTime') {
                const para = document.createElement('p');
                para.textContent = (`Length: ${myLibrary[key]} min`);
                card.appendChild(para);
            }
            else if (key == 'played') {
                ratingHold = myLibrary[key];
            }
            else {
                if (ratingHold == true) {;
                    const ratingApplied = document.createElement('div');
                    const ratingPara = document.createElement('p');
                    ratingPara.textContent = (`Rating`);

                    const ratingInput1 = document.createElement('input');
                    const ratingInput2 = document.createElement('input');
                    const ratingInput3 = document.createElement('input');
                    const ratingInput4 = document.createElement('input');
                    const ratingInput5 = document.createElement('input');
                    ratingInput1.setAttribute('type','checkbox');
                    ratingInput2.setAttribute('type','checkbox');
                    ratingInput3.setAttribute('type','checkbox');
                    ratingInput4.setAttribute('type','checkbox');
                    ratingInput5.setAttribute('type','checkbox');
                    ratingInput1.setAttribute('id','starApplied5');
                    ratingInput2.setAttribute('id','starApplied4');
                    ratingInput3.setAttribute('id','starApplied3');
                    ratingInput4.setAttribute('id','starApplied2');
                    ratingInput5.setAttribute('id','starApplied1');
                    ratingInput1.setAttribute('name','rate');
                    ratingInput2.setAttribute('name','rate');
                    ratingInput3.setAttribute('name','rate');
                    ratingInput4.setAttribute('name','rate');
                    ratingInput5.setAttribute('name','rate');
                    ratingInput1.setAttribute('value','5');
                    ratingInput2.setAttribute('value','4');
                    ratingInput3.setAttribute('value','3');
                    ratingInput4.setAttribute('value','2');
                    ratingInput5.setAttribute('value','1');
                    ratingInput1.setAttribute('disabled','disabled');
                    ratingInput2.setAttribute('disabled','disabled');
                    ratingInput3.setAttribute('disabled','disabled');
                    ratingInput4.setAttribute('disabled','disabled');
                    ratingInput5.setAttribute('disabled','disabled');
                    
                    if (myLibrary[key] == 5) {
                        ratingInput1.setAttribute('checked','true');
                        ratingInput2.setAttribute('checked','true');
                        ratingInput3.setAttribute('checked','true');
                        ratingInput4.setAttribute('checked','true');
                        ratingInput5.setAttribute('checked','true');
                    }
                    else if (myLibrary[key] == 4) {
                        ratingInput2.setAttribute('checked','true');
                        ratingInput3.setAttribute('checked','true');
                        ratingInput4.setAttribute('checked','true');
                        ratingInput5.setAttribute('checked','true');
                    }
                    else if (myLibrary[key] == 3) {
                        ratingInput3.setAttribute('checked','true');
                        ratingInput4.setAttribute('checked','true');
                        ratingInput5.setAttribute('checked','true');
                    }
                    else if (myLibrary[key] == 2) {
                        ratingInput4.setAttribute('checked','true');
                        ratingInput5.setAttribute('checked','true');
                    }
                    else if (myLibrary[key] == 1) {
                        ratingInput5.setAttribute('checked','true');
                    }

                    const ratingLabel1 = document.createElement('label');
                    const ratingLabel2 = document.createElement('label');
                    const ratingLabel3 = document.createElement('label');
                    const ratingLabel4 = document.createElement('label');
                    const ratingLabel5 = document.createElement('label');
                    ratingLabel1.setAttribute('for','starApplied5');
                    ratingLabel2.setAttribute('for','starApplied4');
                    ratingLabel3.setAttribute('for','starApplied3');
                    ratingLabel4.setAttribute('for','starApplied2');
                    ratingLabel5.setAttribute('for','starApplied1');
                    ratingLabel1.setAttribute('title','text');
                    ratingLabel2.setAttribute('title','text');
                    ratingLabel3.setAttribute('title','text');
                    ratingLabel4.setAttribute('title','text');
                    ratingLabel5.setAttribute('title','text');
                    ratingLabel1.textContent = (`5 stars`);
                    ratingLabel2.textContent = (`4 stars`);
                    ratingLabel3.textContent = (`3 stars`);
                    ratingLabel4.textContent = (`2 stars`);
                    ratingLabel5.textContent = (`1 stars`);

                    ratingApplied.classList.add('ratingApplied');
                    ratingApplied.setAttribute('id', 'ratingApplied');
                    ratingApplied.appendChild(ratingInput1);
                    ratingApplied.appendChild(ratingLabel1);
                    ratingApplied.appendChild(ratingInput2);
                    ratingApplied.appendChild(ratingLabel2);
                    ratingApplied.appendChild(ratingInput3);
                    ratingApplied.appendChild(ratingLabel3);
                    ratingApplied.appendChild(ratingInput4);
                    ratingApplied.appendChild(ratingLabel4);
                    ratingApplied.appendChild(ratingInput5);
                    ratingApplied.appendChild(ratingLabel5);
                    ratingApplied.appendChild(ratingPara);

                    card.appendChild(ratingApplied)
                }
            }
        }
    })
}

organizeGrid = (e) => {
    let array = [];
    for (var prop in myLibrary) {
        if (myLibrary.hasOwnProperty(prop)) {
            var obj = {};
            obj[prop] = myLibrary[prop];
            obj.tempSortName = myLibrary[prop]['title'];
            array.push(obj);
        }
    }
    array.sort(function(a,b) {
            var at = a.tempSortName,
                bt = b.tempSortName;
                return at > bt ? 1 : (at < bt ? -1 : 0);
        });
    var res = [];
    for (var i = 0, l = array.length; i < l; i++) {
        var obj = array[i];
        delete obj.tempSortName;
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                var id = prop;
            }
        }
        var item = obj[id];
        res.push(item);
    }
    myLibrary = res;
    if (e.value == 'playerCountMin' || e.value == 'playTime' || e.value == 'age' || e.value == 'title1') {
        var arr = [];
        let count = 0;
        if (e.value == 'title1') {
            count = 1;
            e.value = 'title';
        }
        for (var prop in myLibrary) {
            if (myLibrary.hasOwnProperty(prop)) {
                var obj = {};
                obj[prop] = myLibrary[prop];
                obj.tempSortName = myLibrary[prop][e.value];
                arr.push(obj);
            }
        }
        if (count == 1) {
            count = 0;
            e.value = 'title1'
        }

        arr.sort(function(a,b) {
            var at = a.tempSortName,
                bt = b.tempSortName;
            if (e.value == 'title1') {
                return at > bt ? 1 : (at < bt ? -1 : 0);
            }
            return +at > +bt ? 1 : (+at < +bt ? -1 : 0);
        });

        var result = [];
        for (var i = 0, l = arr.length; i < l; i++) {
            var obj = arr[i];
            delete obj.tempSortName;
            for (var prop in obj) {
                if (obj.hasOwnProperty(prop)) {
                    var id = prop;
                }
            }
            var item = obj[id];
            result.push(item);
        }
        myLibrary = result
        return displayGameOnPage();  
    }
    else {
        var arr = [];
        for (var prop in myLibrary) {
            if (myLibrary.hasOwnProperty(prop)) {
                var obj = {};
                obj[prop] = myLibrary[prop];
                obj.tempSortName = myLibrary[prop][e.value];
                arr.push(obj);
            }
        }
    
        arr.sort(function(a,b) {
            var at = a.tempSortName,
                bt = b.tempSortName;
            if (e.value == 'title') {
                return at < bt ? 1 : (at > bt ? -1 : 0);
            }
            return +at < +bt ? 1 : (+at > +bt ? -1 : 0);
        });
    
        var result = [];
        for (var i = 0, l = arr.length; i < l; i++) {
            var obj = arr[i];
            delete obj.tempSortName;
            for (var prop in obj) {
                if (obj.hasOwnProperty(prop)) {
                    var id = prop;
                }
            }
            var item = obj[id];
            result.push(item);
        }
        myLibrary = result
        return displayGameOnPage();  
    }  
}



ratingClick = (e) => {
    newRating = e;
}

activateRatings = (e) => {
    if (played.checked == true) {
        rating.classList.add('active');
    }
    else {
        rating.classList.remove('active');
    }
    if (e !== undefined) {
        
    }
}

openModal = (e) => {
    if (e.title == undefined) {
        newRating = '';
        addGameModalForm.reset();
        activateRatings();
        modal.classList.add('active');
        overlay.classList.add('active');
    }
    else {
        edit = 1;
        editSave = e;
        newRating = editSave['rating'];
        addGameModalForm.reset();
        setFormData(e);
        activateRatings(e);
        starEdit(e['rating']);
        modal.classList.add('active');
        overlay.classList.add('active');

    }
}

closeModal = () => {
    if (edit == 1) {
        addGameToLibrary(editSave.title, editSave.playerCountMin, editSave.playerCountMax, editSave.age, editSave.playTime, editSave.played, editSave.rating);
    }

    modalRating1.removeAttribute('checked');
    modalRating2.removeAttribute('checked');
    modalRating3.removeAttribute('checked');
    modalRating4.removeAttribute('checked');
    modalRating5.removeAttribute('checked');

    edit = 0;
    editSave = '';
    modal.classList.remove('active');
    overlay.classList.remove('active');

    const Title = document.getElementById('title');
    const MinPlayer = document.getElementById('min-player');
    const MaxPlayer = document.getElementById('max-player');
    const Age = document.getElementById('age');
    const PlayTime = document.getElementById('play-time');
    const Played = document.getElementById('played');
    const Rating = document.getElementById('rating');

    Title.setAttribute('value', '');
    MinPlayer.setAttribute('value', '');
    MaxPlayer.setAttribute('value', '');
    Age.setAttribute('value', '');
    PlayTime.setAttribute('value', '');
    Played.removeAttribute('checked', '');
    Rating.setAttribute('value', '');
}

takeFormData = () => {

    modalRating1.removeAttribute('checked');
    modalRating2.removeAttribute('checked');
    modalRating3.removeAttribute('checked');
    modalRating4.removeAttribute('checked');
    modalRating5.removeAttribute('checked');

    let titleCheck = document.getElementById('title')
    let Title = document.getElementById('title').value;
    let MinPlayer = document.getElementById('min-player').value;
    let MaxPlayer = document.getElementById('max-player').value;
    let Age = document.getElementById('age').value;
    let PlayTime = document.getElementById('play-time').value;
    let Played = document.getElementById('played').checked;
    let Rating = document.getElementById('rating');

    for (let key in myLibrary) {
        if (Title == myLibrary[key]['title']) {
            console.log(titleCheck);
            titleCheck.setCustomValidity('Board game already in library.');
            return;
        }
    }

    // if (Title == )

    if ((Title == '') || (MinPlayer == '') || (MaxPlayer == '') || (Age == '') || (PlayTime == '')) {
        return;
    }

    addGameToLibrary(Title, MinPlayer, MaxPlayer, Age, PlayTime, Played, Rating);

    edit = 0;
    editSave = '';

    closeModal();
}

setFormData = (e) => {
    const Title = document.getElementById('title');
    const MinPlayer = document.getElementById('min-player');
    const MaxPlayer = document.getElementById('max-player');
    const Age = document.getElementById('age');
    const PlayTime = document.getElementById('play-time');
    const Played = document.getElementById('played');
    const Rating = document.getElementById('rating');

    Title.setAttribute('value', e.title);
    MinPlayer.setAttribute('value', e.playerCountMin);
    MaxPlayer.setAttribute('value', e.playerCountMax);
    Age.setAttribute('value', e.age);
    PlayTime.setAttribute('value', e.playTime);
    if (e.played == true) {
        Played.setAttribute('checked', 'checked');
    }
    Rating.setAttribute('value', e.rating);
}

function deleteCurrent(e) {
    let pulledTitle = e.split(': ')[1];
    for (let key in myLibrary) {
        let value = myLibrary[key];
        if (value['title'] == pulledTitle) {
            delete myLibrary[key];
            clearEmptyObjects();
            displayGameOnPage();
            return;
        }
    }
}

function editCurrent(e) {
    let pulledTitle = e.split(': ')[1];
    for (let key in myLibrary) {
        let value = myLibrary[key];
        if (value['title'] == pulledTitle) {
            openModal(myLibrary[key]);       
            delete myLibrary[key];
            clearEmptyObjects();         
            return;
        }
    }
}

function clearEmptyObjects () {
    let temp = myLibrary.filter(element => {
        if (Object.keys(element).length !== 0) {
            return true;
        }
        return false
    });
    myLibrary = temp;
}

function starEdit (e) {
    if (e == 5) {
        modalRating1.setAttribute('checked','true');
    }
    else if (e == 4) {
        modalRating2.setAttribute('checked','true');
    }
    else if (e == 3) {
        modalRating3.setAttribute('checked','true');
    }
    else if (e == 2) {
        modalRating4.setAttribute('checked','true');
    }
    else if (e == 1) {
        modalRating5.setAttribute('checked','true');
    }
}

addGame.onclick = openModal;
overlay.onclick = closeModal;
played.onclick = activateRatings;

addGameToLibrary('Gloomhaven', '1', '4', '12', '120', true, '5');
addGameToLibrary('Wingspan', '1', '5', '10', '60', true, '4');
addGameToLibrary('Dead of Winter', '2', '6', '15', '120', true, '4');
addGameToLibrary('Werewolf Legacy', '8', '20', '16', '45', true, '5');
addGameToLibrary('Ravensburger', '2', '4', '8', '20', true, '1');
addGameToLibrary('Harry Potter Deck Builder', '2', '5', '10', '120', true, '4');

// displayGameOnPage();