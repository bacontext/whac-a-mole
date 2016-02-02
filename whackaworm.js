var holes, worm, hole, score, randomNum, previousRandomNum, timeout, functionName;

function init(){
	initializeAssets();
	cacheImages();
	
	for(i=0; i < holes.length;i ++){
		addEvent(holes[i], functionName, randomize, false);
	}

	play();
	setTimeout("endGame()", timeout);
}

function initializeAssets(){
	timeout = 60000;
	functionName = "click";
	score = 0;
	previousRandomNum = 0;
	randomNum = 0;
	hole = "hole.png";
	worm = "wormHoleImage.png";
}

function cacheImages(){
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
	holes = [hole1, hole2, hole3, hole4 ,hole5 ,hole6 ,hole7 ,hole8 ,hole9];
}

function generateNum(){
	randomNum = Math.floor(Math.random()*10);
	while(previousRandomNum == randomNum || randomNum == 9){
		randomNum = Math.floor(Math.random()*10);
	}
}

function addEvent(objName, type, fnName, Cap) {
	  if(objName.attachEvent){
		objName.attachEvent("on"+type,fnName);
	  }
	  else if(objName.addEventListener){
		objName.addEventListener(type,fnName,Cap);
	  }
}

function randomize(e){
	var source = e.target ||event.srcElement;
	var img = source.src;

	if(img.substring(img.lastIndexOf("/")+1) == worm){

	score+=10;
	play();
	}
}

function play(){
	generateNum();
	holes[randomNum].src = worm;
	holes[previousRandomNum].src = hole;
	previousRandomNum = randomNum;
}

function endGame(){
	for(i=0; i<holes.length;i++){
		removeEventHandler(holes[i], functionName, randomize);
	}
	
	for(var i = 0; i<holes.length; i++){
		holes[i].src = hole;
	}
	alert("Game Over! Final Score: " + score);
	var btn = document.getElementById("startBtn");
	btn.style.display = 'block';
}

function removeEventHandler(elem, eventType, handler) {
 if (elem.removeEventListener) 
    elem.removeEventListener (eventType, handler, false);
 if (elem.detachEvent)
    elem.detachEvent ('on'+eventType, handler); 
}

function startGame(){
	init();
	var btn = document.getElementById("startBtn");
	btn.style.display = 'none';
}