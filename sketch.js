//Create variables here
var dog,happyDog;
var database;
var foods,foodstock;

function preload()
{
  dog = loadImage('images/dogImg.png');
  happyDog = loadImage('images/dogImg1.png')
}

function setup() {
  database = firebase.database();
	createCanvas(500, 500);
  
  dog = createSprite(250,250);
  dog.addImage(dog);

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  

background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foods);
  dog.addImage(happyDog);
}
  drawSprites();
  //add styles here
  fill();
  stroke();
  text();
  textSize();

}

function readStock(data)
{
foods = data.val();
}

function writeStock(x)
{
database.ref('20').update({
  Food:0
})
}