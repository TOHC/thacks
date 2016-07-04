var canvas;
var canvasH;
var canvasW;
var ctx;
var spawnCount = 10;
var numbers = new Array();
function init()
{
    canvas = document.getElementById("numbersCanvas");
    canvas.width = document.body.clientWidth-200; //document.width is obsolete
    canvas.height = document.body.clientHeight-60; //document.height is obsolete
    canvasW = canvas.width;
    canvasH = canvas.height;
    
    ctx = canvas.getContext("2d");
    ctx.font = "30px Arial";
    
    var firstObject = new Object();
    firstObject.x = 300;
    firstObject.y = 300;
    firstObject.color = "rgba(225,225,225,";
    firstObject.alpha = 1;
    firstObject.word = 1;
    numbers.push(firstObject);
    
    if( canvas.getContext )
    {
        //setup();
        setInterval( run , 40 );
    }
}
function getRandColor(){
    //6 levels of brightness from 0 to 5, 0 being the darkest
    return "rgba("+ Math.floor((Math.random() * 256)+1)+","+ Math.floor((Math.random() * 256)+1)+","+ Math.floor((Math.random() * 256)+1)+",";//rgba(225,225,225,
  }
function oneOrZero(){
    return Math.floor(Math.random()*1.5);
}
function draw(){
    for(var i = 0; i < numbers.length; i++){
        ctx.fillStyle = numbers[i].color+numbers[i].alpha+")";
        ctx.fillText(numbers[i].word,numbers[i].x,numbers[i].y);
        numbers[i].alpha = numbers[i].alpha-0.01;
        if(numbers[i].alpha < 0){
            numbers.splice(i, 1);
        }
    }
}
function run(){
    
if(spawnCount == 0){
var randx = Math.floor((Math.random() * canvasW) + 1);
//make random y
var randy = Math.floor((Math.random() * canvasH) + 1);

    ctx.fillStyle = getRandColor();
    ctx.fillText(oneOrZero(),randx,randy);
    var newObject = new Object();
newObject.x = randx;
newObject.y = randy;
newObject.color = "rgba(255,255,255,"; //getRandColor();
newObject.alpha =1;
newObject.word = oneOrZero()
    numbers.push(newObject);
    spawnCount = 2;
}else{
    spawnCount--;
}
    
    ctx.clearRect(0, 0, canvasW, canvasH);
    draw();
}













init();