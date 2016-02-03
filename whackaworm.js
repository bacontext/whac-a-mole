var holes, worm, hole, score, randomNum, previousRandomNum, timeout, eventFunctionName, numOfHoles;

function init(){
	initializeAssets();
	cacheImages();
	
	for(i=0; i < holes.length;i ++){
		addEvent(holes[i], clickAddEventFunction, randomize, false);
	}

	play();
	setTimeout("endGame()", timeout);
}

function initializeAssets(){
	numOfHoles = 9;
	timeout = 60000;
	clickAddEventFunction = "click";
	score = 0;
	previousRandomNum = 0;
	randomNum = 0;
	hole = "hole.png";
	worm = "wormHoleImage.png";
	holes = [];
}

function cacheImages(){
    //Cache all the image tags
	for(i = 1; i <= numOfHoles; i++){
		holes.push(document.getElementById("hole"+ i.toString()));
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

function endGame(){
	for(i=0; i < holes.length;i++){
		removeEventHandler(holes[i], clickAddEventFunction, randomize);
	}
	
	for(var i = 0; i < holes.length; i++){
		holes[i].src = hole;
	}
	alert("Game Over! Final Score: " + score);
	var btn = document.getElementById("startBtn");
	btn.style.display = 'block';
}

function generateNum(){
	randomNum = Math.floor(Math.random()*10);
	while(previousRandomNum == randomNum || randomNum == 9){
		randomNum = Math.floor(Math.random()*10);
	}
}

function play(){
	generateNum();
	holes[randomNum].src = worm;
	holes[previousRandomNum].src = hole;
	previousRandomNum = randomNum;
}

function randomize(event){
	var source = event.target || event.srcElement;
	var img = source.src;

	if(img.substring(img.lastIndexOf("/")+1) == worm){

	score+=10;
	play();
	}
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