"use strict"


window.onload = function() {
    document.getElementById("answer").value = '';
    document.getElementById('main').style.display = "none";
}

let qNum = 1,
    right = 0,
    whole = 0;

function start() {
    document.getElementById("main").style.display = "block";
    let question = document.getElementById("question");
    switch (qNum) {

        case 1:
            question.innerHTML = "Музыкант, певец, рассказчик — <br>А всего труба да ящик.";
            break;

        case 2:
            question.innerHTML = "Кафтан на мне зеленый,<br>А сердце — как кумач;<br>На вкус, как сахар, сладок,<br>На вид — похож на мяч.";
            break;

        case 3:
            question.innerHTML = "Ах, не трогайте меня:<br>Обожгу и без огня!";
            break;
    }

    document.getElementById("start").style.display = "none";
}

function next() {
    let question = document.getElementById("question");
    if (qNum < 3) {
        qNum += 1;
    } else {
        qNum = 1;
    }

    switch (qNum) {

        case 1:
            question.innerHTML = "Музыкант, певец, рассказчик — <br>А всего труба да ящик.";
            break;

        case 2:
            question.innerHTML = "Кафтан на мне зеленый,<br>А сердце — как кумач;<br>На вкус, как сахар, сладок,<br>На вид — похож на мяч.";
            break;

        case 3:
            question.innerHTML = "Ах, не трогайте меня:<br>Обожгу и без огня!";
            break;
    }
    document.getElementById("answer").value = '';
}

function check() {
    let answer = document.getElementById("answer").value;

    switch (qNum) {
        case 1:
            if (answer == 'Граммофон' || answer == 'граммофон') {
                right += 1;
                whole += 1;
                next();
                alert('Верно, поздравляю');

            } else {
                whole += 1;
                alert('Неверно, попробуйте еще');
            }
            break;
        case 2:
            if (answer == 'Арбуз' || answer == 'арбуз') {
                alert('Верно, поздравляю');
                right += 1;
                next();
                whole += 1;
            } else {
                alert('Неверно, попробуйте еще');
                whole += 1;
            }
            break;
        case 3:
            if (answer == 'Крапива' || answer == 'крапива') {
                alert('Верно, поздравляю');
                right += 1;
                whole += 1;
                next();
            } else {
                alert('Неверно, попробуйте еще');
                whole += 1;
            }
            break;
    }
    document.getElementById('right').textContent = "Правильных ответов: " + right;
    document.getElementById('whole').textContent = "Попыток: " + whole;
}