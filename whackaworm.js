var worm, score, randomNumber,previousRandomNum;
var timeout = 60000;
var functionName = "click";
var imgArr =
[
	new Image(),
	new Image(),
	new Image(),
	new Image(),
	new Image(),
	new Image(),
	new Image(),
	new Image(),
	new Image()
];


function init(){
	score = 0;
	previousRandomNum = 0;
	randomNumber = 0;
	cacheImages();
	
	for(i=0; i < imgArr.length; i++){
		addEvent(imgArr[i], click, randomize, false);
	}

	play();
	setTimeout("endGame()", timeout);

}

function generateNum()
{
	randomNumber = Math.floor(Math.random()*10);
	while(previousRandomNum == randomNumber || randomNumber == 9){
		randomNumber = Math.floor(Math.random()*10);
	}
}

function addEvent(objName, type, fnName, Cap) {

  if(objName.attachEvent)
  {
    objName.attachEvent("on"+type,fnName);
  }
  else if(objName.addEventListener)
  {
    objName.addEventListener(type,fnName,Cap);
  }
}

function randomize(e)
{
	var source = e.target ||event.srcElement;
	var img = source.src;

	if(img.substring(img.lastIndexOf("/")+1) == worm){

	score+=10;
	play();
	}
}

function play()
{
	generateNum();
	imgArr[randomNumber].src = worm;
	imgArr[previousRandomNum].src = "hole.png";
	previousRandomNum = randomNumber;
}

function endGame(){
	
	for(i=0; i<imgArr.length;i++){
		removeEventHandler(imgArr[i], functionName, randomize);
		imgArr[i].src = "hole.png";
	}
	
	alert("Game Over! Final Score: " + score);
	var btn = document.getElementById("startBtn");
	btn.style.display = 'block';
}

function removeEventHandler(elem,eventType,handler) {
 if (elem.removeEventListener) 
    elem.removeEventListener (eventType,handler,false);
 if (elem.detachEvent)
    elem.detachEvent ('on'+eventType,handler); 
}

function cacheImages()
{    
    //Cache all the image tags
    hole1 = document.getElementById("hole1");
    hole2 = document.getElementById("hole2");
    hole3 = document.getElementById("hole3");
    hole4 = document.getElementById("hole4");
    hole5 = document.getElementById("hole5");
    hole6 = document.getElementById("hole6");
    hole7 = document.getElementById("hole7");
    hole8 = document.getElementById("hole8");
    hole9 = document.getElementById("hole9");
	worm = "wormHoleImage.png";
	
	imgArr = [hole1, hole2, hole3, hole4 ,hole5 ,hole6 ,hole7 ,hole8 ,hole9];
}

function startGame(){
	init();
	var btn = document.getElementById("startBtn");
	btn.style.display = 'none';
}