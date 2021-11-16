//variables assigned to high score button DOM elements
var goBack = document.getElementById("go-back");
var clearScores = document.getElementById("clear-scores");

//variable for <main> that will contain high scores
const highScores = document.getElementById("high-scores");

//pull values from local storage to populate scores array
var populateScores = function() {
    var scores = [];
    if(localStorage.getItem('scores')===null) {
        scores = [];
    }
    else {
        scores = JSON.parse(localStorage.getItem('scores'));
    }

    if (scores.length>0) {
        //for loop to populate high scores in the high scores div
        for(i=0; i<scores.length; i++) {

            //create li element in the DOM
            var scoreLi = document.createElement("li");
            var spanNameLi = document.createElement("span");
            var spanScoreLi = document.createElement("span");
            spanNameLi.innerText = "name: " + scores[i].player;
            spanScoreLi.innerText = " score: " + scores[i].score;
            scoreLi.append(spanNameLi);
            scoreLi.append(spanScoreLi);
            highScores.append(scoreLi);
        };
    }
};

function clearList() {
    while (highScores.firstChild) {
        highScores.removeChild(highScores.firstChild);
    }
}


var goBackFunction = function() {
    window.open("index.html")
}

var clearScoresFunction = function() {
    localStorage.clear();
}

goBack.addEventListener("click", goBackFunction);
clearScores.addEventListener("click", clearScoresFunction);
clearScores.addEventListener("click", clearList);

populateScores();