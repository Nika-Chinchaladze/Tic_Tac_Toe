// Define Who Is Who
document.querySelector(".switch").addEventListener("click", function () {
    determineSide();
    if (document.querySelector(".whoAmI").textContent == "(O)") {
        if (document.querySelector(".chooseSide").innerHTML.includes("disabled") != true) {
            computerAnswer();
        }
    }
})

function determineSide() {
    var myCheckBox = document.querySelector(".chooseSide");
    if (myCheckBox.checked == true) {
        document.querySelector(".whoAmI").textContent = "(O)";
        document.querySelector(".whoIsHe").textContent = "(X)";
        document.querySelector(".meDiv").style.backgroundColor = "#FBC252";
        document.querySelector(".opponentDiv").style.backgroundColor = "#46C2CB";
    }
    else {
        document.querySelector(".whoAmI").textContent = "(X)";
        document.querySelector(".whoIsHe").textContent = "(O)";
        document.querySelector(".meDiv").style.backgroundColor = "#46C2CB";
        document.querySelector(".opponentDiv").style.backgroundColor = "#FBC252";
    }
}

// event Listeners For Main Buttons:
var myButtons = document.getElementsByClassName("squareDiv");

for (var i = 0; i < myButtons.length; i++) {
    myButtons[i].addEventListener("click", function () {
        displayFigure(this);
        computerAnswer();
        disableToggle();
        finalResult();
    })
}

function displayFigure(chosenButton) {
    var whoTurn = document.querySelector(".whoMove");
    if (whoTurn.textContent == "X") {
        chosenButton.innerHTML = '<i class="fa-solid fa-xmark d-inline-block newX"></i>';
        whoTurn.textContent = "O";
        whoTurn.style.color = "#FBC252";
    }
    else if (whoTurn.textContent == "O") {
        chosenButton.innerHTML = '<i class="fa-solid fa-o d-inline-block newO"></i>';
        whoTurn.textContent = "X";
        whoTurn.style.color = "#46C2CB";
    }
}

// Determine Computers Move:
function computerAnswer() {
    var buttonVariable = document.getElementsByClassName("squareDiv");
    var opponentButton = [];
    for (var i = 0; i < buttonVariable.length; i++) {
        if (buttonVariable[i].innerHTML == "") {
            opponentButton.push(buttonVariable[i]);
        }
    }
    var bestPlace = null;
    // computer strategory for x - here we define best place for x
    var location1 = document.getElementById("location1").textContent;
    var location2 = document.getElementById("location2").textContent;
    var location3 = document.getElementById("location3").textContent;
    var location4 = document.getElementById("location4").textContent;
    var location5 = document.getElementById("location5").textContent;
    var location6 = document.getElementById("location6").textContent;
    var location7 = document.getElementById("location7").textContent;
    var location8 = document.getElementById("location8").textContent;
    var location9 = document.getElementById("location9").textContent;

    switch(document.querySelector(".whoIsHe").textContent) {
        // strategy if computer is - X:
        case "(X)":
            if (document.querySelector(".loc9").innerHTML == "" && location9.length == 0) {
                bestPlace = document.querySelector(".loc9");
                document.getElementById("location9").textContent = "y";
            }
            else if (document.querySelector(".loc7").innerHTML == "" && location7.length == 0 && document.querySelector(".loc4").innerHTML == "") {
                bestPlace = document.querySelector(".loc7");
                document.getElementById("location7").textContent = "y";
            }
            else if (document.querySelector(".loc3").innerHTML == "" && location3.length == 0 && document.querySelector(".loc6").innerHTML == "") {
                bestPlace = document.querySelector(".loc3");
                document.getElementById("location3").textContent = "y";
            }
            else if (document.querySelector(".loc5").innerHTML == "" && location5.length == 0) {
                bestPlace = document.querySelector(".loc5");
                document.getElementById("location5").textContent = "y";
            }
            else if (document.querySelector(".loc1").innerHTML == "" && location1.length == 0) {
                bestPlace = document.querySelector(".loc1");
                document.getElementById("location1").textContent = "y";
            }
            else if (document.querySelector(".loc7").innerHTML == "" && location7.length == 0) {
                bestPlace = document.querySelector(".loc7");
                document.getElementById("location7").textContent = "y";
            }
            else if (document.querySelector(".loc8").innerHTML == "" && location8.length == 0) {
                bestPlace = document.querySelector(".loc8");
                document.getElementById("location8").textContent = "y";
            }
            else if (document.querySelector(".loc3").innerHTML == "" && location3.length == 0) {
                bestPlace = document.querySelector(".loc3");
                document.getElementById("location3").textContent = "y";
            }
            else {
                bestPlace = opponentButton[Math.floor(Math.random() * opponentButton.length)];
            }
            break;

        // strategy if computer is - O:
        case "(O)":
            if (document.querySelector(".loc5").innerHTML == "" && location9.length == 0) {
                bestPlace = document.querySelector(".loc5");
                document.getElementById("location5").textContent = "y";
            }
            else if (document.querySelector(".loc7").innerHTML == "" && location7.length == 0) {
                bestPlace = document.querySelector(".loc7");
                document.getElementById("location7").textContent = "y";
            }
            else if (document.querySelector(".loc4").innerHTML == "" && location4.length == 0) {
                bestPlace = document.querySelector(".loc4");
                document.getElementById("location4").textContent = "y";
            }
            else if (document.querySelector(".loc3").innerHTML == "" && location3.length == 0) {
                bestPlace = document.querySelector(".loc3");
                document.getElementById("location3").textContent = "y";
            }
            else if (document.querySelector(".loc2").innerHTML == "" && location2.length == 0) {
                bestPlace = document.querySelector(".loc2");
                document.getElementById("location2").textContent = "y";
            }
            else {
                bestPlace = opponentButton[Math.floor(Math.random() * opponentButton.length)];
            }
            break;

        default:
            console.log("choose your side, bro!");
    }

    // yep
    var result = checkwhoWins();
    if (result != "done") {
        setTimeout(function () {
            displayFigure(bestPlace);
            checkwhoWins();
        }, 1000)   
    }
}


function disableToggle() {
    var myToggle = document.querySelector(".switch");
    if (document.querySelector(".whoAmI").textContent == "(X)") {
        myToggle.innerHTML = '<input type="checkbox" class="chooseSide" disabled><span class="slider round"></span>';
    }
    else {
        myToggle.innerHTML = '<input type="checkbox" class="chooseSide" checked disabled><span class="slider round"></span>';
    }
}

function enableToggle() {
    var newToggle = document.querySelector(".switch");
    newToggle.innerHTML = '<input type="checkbox" class="chooseSide"><span class="slider round"></span>';
}

// Define Who Wins The Rounds:
function myAnimation(step1, step2, step3, winner) {
    if (winner == "X") {
        document.querySelector(step1 + " > i").classList.add("fa-spin");
        document.querySelector(step2 + " > i").classList.add("fa-spin");
        document.querySelector(step3 + " > i").classList.add("fa-spin");
    }
    else if (winner == "O") {
        document.querySelector(step1 + " > i").classList.add("fa-beat-fade");
        document.querySelector(step2 + " > i").classList.add("fa-beat-fade");
        document.querySelector(step3 + " > i").classList.add("fa-beat-fade");
    }
}

function canRunAgain() {
    var btn = document.getElementsByClassName("squareDiv");
    var num = 0;
    for (var i = 0; i < btn.length; i++) {
        if (btn[i].innerHTML == "") {
            num++;
        }
    }
    if (num == 9 && document.querySelector(".switch").innerHTML.includes("disabled") == true && document.querySelector(".whoIsHe").textContent == "(X)") {
        var myMarks = document.querySelectorAll(".brainDiv p");
        for (var r = 0; r < myMarks.length; r++) {
            myMarks[r].textContent = "";
        }
        computerAnswer();
    }
}

var tieScore = document.querySelector(".tieScore");
var myScore = document.querySelector(".myScore");
var opponentScore = document.querySelector(".oppScore");

function trackWinner(className, one, two, three, myWinner) {
    if (document.querySelector(className).textContent == "(X)") {
        myScore.textContent = parseInt(myScore.textContent) + 1;
    }
    else if (document.querySelector(className).textContent == "(O)") {
        opponentScore.textContent = parseInt(opponentScore.textContent) + 1;
    }
    // my animation:
    myAnimation(one, two, three, myWinner);
    // we need launch this after some time:
    setTimeout(function () {
        for (var i = 0; i < myButtons.length; i++) {
            myButtons[i].innerHTML = "";
        }
        document.querySelector(".whoMove").textContent = "X";
        document.querySelector(".whoMove").style.color = "#46C2CB";
        canRunAgain();
    }, 3000)
}


function tieOccured() {
    var xNumber = document.getElementsByClassName("newX");
    var oNumber = document.getElementsByClassName("newO");
    if (xNumber.length >= 5 || oNumber.length >= 5) {
        tieScore.textContent = parseInt(tieScore.textContent) + 1;
        setTimeout(function () {
            for (var i = 0; i < myButtons.length; i++) {
                myButtons[i].innerHTML = "";
            }
            document.querySelector(".whoMove").textContent = "X";
            document.querySelector(".whoMove").style.color = "#46C2CB";
            canRunAgain();
        }, 1500)
    }
}

// Declare Final Results
function finalResult(whoWon) {
    if (whoWon == "X") {
        if (myScore.textContent == "3" || opponentScore.textContent == "3") {
            document.querySelector(".finalAnswerDiv").style.display = "block";
            document.querySelector(".gameResult").innerHTML = '<i class="fa-solid fa-xmark xWinner"></i>&nbsp;&nbsp;WON THE GAME';
        }
    }
    else if (whoWon == "O") {
        if (myScore.textContent == "3" || opponentScore.textContent == "3") {
            document.querySelector(".finalAnswerDiv").style.display = "block";
            document.querySelector(".gameResult").innerHTML = '<i class="fa-solid fa-o oWinner"></i>&nbsp;&nbsp;WON THE GAME';
        }
    }
}


function checkwhoWins() {
    var a = document.querySelector(".a").innerHTML;
    var b = document.querySelector(".b").innerHTML;
    var c = document.querySelector(".c").innerHTML;
    var d = document.querySelector(".d").innerHTML;
    var e = document.querySelector(".e").innerHTML;
    var f = document.querySelector(".f").innerHTML;
    var g = document.querySelector(".g").innerHTML;
    var h = document.querySelector(".h").innerHTML;
    var k = document.querySelector(".k").innerHTML;
    
    // Horizontally - check X - =====================================================================:
    if (a.includes("newX") == true && b.includes("newX") == true && c.includes("newX") == true) {
        trackWinner(".whoAmI", ".a", ".b", ".c", "X");
        finalResult("X");
        return "done";
    }
    else if (d.includes("newX") == true && e.includes("newX") == true && f.includes("newX") == true) {
        trackWinner(".whoAmI", ".d", ".e", ".f", "X");
        finalResult("X");
        return "done";
    }
    else if (g.includes("newX") == true && h.includes("newX") == true && k.includes("newX") == true) {
        trackWinner(".whoAmI", ".g", ".h", ".k", "X");
        finalResult("X");
        return "done";
    }
    // Horizontally - check O - =====================================================================;
    else if (a.includes("newO") == true && b.includes("newO") == true && c.includes("newO") == true) {
        trackWinner(".whoIsHe", ".a", ".b", ".c", "O");
        finalResult("O");
        return "done";
    }
    else if (d.includes("newO") == true && e.includes("newO") == true && f.includes("newO") == true) {
        trackWinner(".whoIsHe", ".d", ".e", ".f", "O");
        finalResult("O");
        return "done";
    }
    else if (g.includes("newO") == true && h.includes("newO") == true && k.includes("newO") == true) {
        trackWinner(".whoIsHe", ".g", ".h", ".k", "O");
        finalResult("O");
        return "done";
    }
    // Vertically - check X - =======================================================================:
    else if (a.includes("newX") == true && d.includes("newX") == true && g.includes("newX") == true) {
        trackWinner(".whoAmI", ".a", ".d", ".g", "X");
        finalResult("X");
        return "done";
    }
    else if (b.includes("newX") == true && e.includes("newX") == true && h.includes("newX") == true) {
        trackWinner(".whoAmI", ".b", ".e", ".h", "X");
        finalResult("X");
        return "done";
    }
    else if (c.includes("newX") == true && f.includes("newX") == true && k.includes("newX") == true) {
        trackWinner(".whoAmI", ".c", ".f", ".k", "X");
        finalResult("X");
        return "done";
    }
    // Vertically - check O - =======================================================================:
    else if (a.includes("newO") == true && d.includes("newO") == true && g.includes("newO") == true) {
        trackWinner(".whoIsHe", ".a", ".d", ".g", "O");
        finalResult("O");
        return "done";
    }
    else if (b.includes("newO") == true && e.includes("newO") == true && h.includes("newO") == true) {
        trackWinner(".whoIsHe", ".b", ".e", ".h", "O");
        finalResult("O");
        return "done";
    }
    else if (c.includes("newO") == true && f.includes("newO") == true && k.includes("newO") == true) {
        trackWinner(".whoIsHe", ".c", ".f", ".k", "O");
        finalResult("O");
        return "done";
    }
    // Diagonally - check X - =======================================================================:
    else if (a.includes("newX") == true && e.includes("newX") == true && k.includes("newX") == true) {
        trackWinner(".whoAmI", ".a", ".e", ".k", "X");
        finalResult("X");
        return "done";
    }
    else if (g.includes("newX") == true && e.includes("newX") == true && c.includes("newX") == true) {
        trackWinner(".whoAmI", ".g", ".e", ".c", "X");
        finalResult("X");
        return "done";
    }
    // Diagonally - check O - =======================================================================:
    else if (a.includes("newO") == true && e.includes("newO") == true && k.includes("newO") == true) {
        trackWinner(".whoIsHe", ".a", ".e", ".k", "O");
        finalResult("O");
        return "done";
    }
    else if (g.includes("newO") == true && e.includes("newO") == true && c.includes("newO") == true) {
        trackWinner(".whoIsHe", ".g", ".e", ".c", "O");
        finalResult("O");
        return "done";
    }
    else {
        tieOccured();
    }
}


// Restart Functionality:
document.querySelector(".againButton").addEventListener("click", function () {
    restartGame();
})

function restartGame() {
    for (var i = 0; i < myButtons.length; i++) {
        myButtons[i].innerHTML = "";
    }
    document.querySelector(".whoMove").textContent = "X";
    document.querySelector(".whoMove").style.color = "#46C2CB";
    enableToggle();
    myScore.textContent = "0";
    opponentScore.textContent = "0";
    tieScore.textContent = "0";
    document.querySelector(".whoAmI").textContent = "(X)";
    document.querySelector(".whoIsHe").textContent = "(O)";
    document.querySelector(".meDiv").style.backgroundColor = "#46C2CB";
    document.querySelector(".opponentDiv").style.backgroundColor = "#FBC252";
}


// Define functionality for quit and next Button:
document.querySelector(".quitButton").addEventListener("click", function () {
    document.querySelector(".finalAnswerDiv").style.display = "none";
    document.querySelector(".quitedDiv").style.display = "block";
})


document.querySelector(".nextButton").addEventListener("click", function () {
    document.querySelector(".finalAnswerDiv").style.display = "none";
    myScore.textContent = "0";
    opponentScore.textContent = "0";
    tieScore.textContent = "0";
    enableToggle();
})

// Display Game Rules Functionality:
document.querySelector(".myRules").addEventListener("click", function () {
    document.querySelector(".gameRules").classList.toggle("showRules");
})