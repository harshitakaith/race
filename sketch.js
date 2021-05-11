var ball;
var database;
var form;
var game;
var playerCount;
var player;
var gameState=0;
var gameStateRef;
var allPlayers;
var cars,car1,car2,car3,car4,car1Image,car2Image,car3Image,car4Image;
var groundImage,track;
var distance=0;


function preload(){
    car1Image =loadImage("images/car1.png")
    car2Image =loadImage("images/car2.png")
    car3Image =loadImage("images/car3.png")
    car4Image =loadImage("images/car4.png")
    groundImage =loadImage("images/ground.png")
    trackImage =loadImage("images/track.jpg")
}
function setup(){
    createCanvas(displayWidth-20,displayHeight-30);
    database= firebase.database()
    game = new Game();
    game.getState()
    game.start()
    
}

function draw(){

    background("white");
    if(playerCount === 4){
        game.update(1);

    }
    if(gameState === 1){
        clear();
        game.play();

    }
    if(gameState===2){
        game.end()

    }
    
    drawSprites();
}
