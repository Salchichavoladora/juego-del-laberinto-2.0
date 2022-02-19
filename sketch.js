const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var database;
var monsters;
var world;
var engine;
var canvas;
var backgroundImg;
var personaje1, mounstruo1;
var pared1,pared2;
function preload(){
}


function setup(){
canvas = createCanvas(1200,1600);
engine = Engine.create();
world = engine.world;
personaje1 = new Personaje(50,1300);
pared1 = new Paredh(50,1500,100,20);
pared2 = new Paredh(500,1540,100,20);
mounstruo1 = new Monster(50,1200)
mounstruo1.debug = true;
//  monsters[mounstruo1];
}


function draw(){
background("white");
 personaje1.display();
mounstruo1.display();
movimientoDelMounstruo();
pared1.display();
pared2.display();
drawSprites();

}

function movimientoDelMounstruo(){
    if(personaje1.x + personaje1.width*2 <= mounstruo1.x
        && personaje1.x <= mounstruo1.x + mounstruo1.width*2
        && personaje1.y+personaje1.height*2 <= mounstruo1.y
        && personaje1.y <= mounstruo1.y + mounstruo1.height*2){
        mounstruo1.x = mounstruo1.x+1;
        mounstruo1.y = mounstruo1.y+1;
        console.log("mensaje");
    }



}


