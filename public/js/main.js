const canvas = document.getElementById("game-canvas");
/** @type {CanvasRenderingContext2D} */
const context = canvas.getContext('2d');
const btmButton = document.getElementById('back-to-menu-button');

const socket = io();

document.getElementById('join-chat-button').addEventListener('click', function() {
    const input = document.getElementById('user-name-input');
    const userName = input.value;
    if (userName.length > 0) {
        document.getElementById('user-name-missing').classList.add('display-none');
        socket.emit('join-chat', userName);
    } else {
        document.getElementById('user-name-missing').classList.remove('display-none');
    }
})

socket.on('joined-chat', function() {
    console.log('You joined chat!');
    document.getElementById('menu').classList.add('display-none');
    document.getElementById('chat-container').classList.remove('display-none');
})

document.getElementById('send-message-button').addEventListener('click', function() {
    const input = document.getElementById('message');
    const message = input.value;
    socket.emit('send-message', message);
})

socket.on('new-message', function(message) {
    const messagesContainer = document.getElementById('chat-messages');
    const messageElement = document.createElement('p');
    messageElement.innerHTML = message;
    messagesContainer.appendChild(messageElement);
})

document.getElementById('leave-chat-button').addEventListener('click', function() {
    socket.emit('leave-chat');
})

socket.on('menu', function() {
    console.log('You left chat!');
    document.getElementById('menu').classList.remove('display-none');
    document.getElementById('chat-container').classList.add('display-none');
})

document.getElementById('create-game-button').addEventListener('click', function() {
    const input = document.getElementById('game-name-input');
    const gameName = input.value;
    if (gameName.length > 0) {
        document.getElementById('game-name-missing').classList.add('display-none');
        socket.emit('create-game', gameName);
    } else {
        document.getElementById('game-name-missing').classList.remove('display-none');
    }
})

socket.on('game-loop', function(objectsForDraw) {
    document.getElementById('menu').classList.add('display-none');
    document.getElementById('game-container').classList.remove('display-none');
    context.drawImage(document.getElementById('map-image'), 0, 0);

    objectsForDraw.forEach(function(objectForDraw) {
        context.drawImage(
            document.getElementById(objectForDraw.imageId),
            ...objectForDraw.drawImageParameters
        )
    })
})

document.addEventListener("keydown", function(event) {
    switch (event.key) {
        case 'ArrowUp':
            socket.emit('start-moving-player', 'up');
            break;
        case 'ArrowDown':
            {
                socket.emit('start-moving-player', 'down');
                break;
            }
        case 'ArrowLeft':
            {
                socket.emit('start-moving-player', 'left');
                break;
            }
        case 'ArrowRight':
            {
                socket.emit('start-moving-player', 'right');
                break;
            }
    }
})

document.addEventListener('keyup', function(event) {
    switch (event.key) {
        case 'ArrowUp':
        case 'ArrowDown':
            socket.emit('stop-moving-player', 'dy');
            break;
        case 'ArrowLeft':
        case 'ArrowRight':
            socket.emit('stop-moving-player', 'dx');
            break;
    }
})

socket.on('add-game-to-list', function(options) {
    const gameElementContainer = document.createElement('div');
    gameElementContainer.classList.add('game-element');
    gameElementContainer.id = options.gameId;

    const gameNameElement = document.createElement('p');
    gameNameElement.innerHTML = options.gameName;
    const joinGameButton = document.createElement('button');
    joinGameButton.innerHTML = 'Join Game!';

    joinGameButton.addEventListener('click', function() {
        socket.emit('join-game', options.gameId);
    })

    gameElementContainer.appendChild(gameNameElement);
    gameElementContainer.appendChild(joinGameButton);

    document.getElementById('game-list').appendChild(gameElementContainer);
})

socket.on('remove-game-from-list', function(gameId) {
    document.getElementById(gameId).classList.add('display-none');
})

//tema curs 4 exercitiul 2

socket.on('game-over', function(reason) {
    console.log('Game Over', reason);
    context.font = "40px Arial";
    context.fillText("GAME OVER", 350, 280);
    btmButton.classList.remove('display-none');
})

btmButton.addEventListener('click', function() {
    socket.emit('back-to-menu');
})