function agrandir(id) {
    var myImg = document.getElementById(id);
    var width = myImg.clientWidth;
    if (width == 600) {
        alert("Vous avez atteint le niveau de zoom maximal.");
    } else {
        myImg.style.width = (width + 20) + "px";
    }
}

function diminuer(id) {
    var myImg = document.getElementById(id);
    var width = myImg.clientWidth;
    if (width == 40) {
        alert("Vous avez atteint le niveau de zoom minimal.");
    } else {
        myImg.style.width = (width - 20) + "px";
    }
}

function verifierQCM() {
    score = 0
    var question1 = document.getElementById('Q1R2');
    if (question1.checked) {
        score += 1
    }
    var question2 = document.getElementById('Q2R3');
    if (question2.checked) {
        score += 1
    }
    var question3 = document.getElementById('Q3R2');
    if (question3.checked) {
        score += 1
    }
    var question4 = document.getElementById('Q4R3');
    if (question4.checked) {
        score += 1
    }
    var question5 = document.getElementById('Q5R1');
    if (question5.checked) {
        score += 1
    }
    if (score == 5) {
        alert(`Exelent votre score est ${score}/5`)
    }
    if (score == 3) {
        alert(`Bien joué votre score est ${score}/5`)
    }
    if (score == 4) {
        alert(`Bien joué votre score est ${score}/5`)
    }
    if (score < 3) {
        alert(`Votre score est ${score}/5 n'hésitez pas à réessayer le QCM`)
    }

}
