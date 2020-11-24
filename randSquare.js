//Tema Curs 2 Exercitiul 5 (se completeaza cu randomSquare.html si syle.css)

const canvas = document.getElementById("newCanvas");
const context = canvas.getContext('2d');

const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 400;
const SQUARE_SIDE = 50;


const myButton = document.getElementById("randButton");


function drawSquare(x, y) {
    context.fillStyle = "purple";
    context.fillRect(x, y, 50, 50);
};

function generateSquare() {

    // generate a random location every time the button is clicked
    let x = Math.floor(Math.random() * (CANVAS_WIDTH - SQUARE_SIDE));
    let y = Math.floor(Math.random() * (CANVAS_HEIGHT - SQUARE_SIDE));


    // clear the previous random square
    context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // draw the first/next square at a new random location
    drawSquare(x, y);
};



myButton.addEventListener("click", generateSquare);