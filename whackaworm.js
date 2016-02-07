var btn, endGameMsg, eventFunctionName, hole, holes, gamePieceImgName, numOfHoles, randomNum, points, startBtnName, score, timeout, worm;

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
	randomNum = 0;
	hole = "hole.png";
	worm = "wormHoleImage.png";
	holes = [];
	points = 10;
	gamePieceImgName = "hole";
	endGameMsg = "Game Over! Final Score: ";
	startBtnName = "startBtn";
}

function cacheImages(){
    //Cache all the image tags
	for(i = 1; i <= numOfHoles; i++){
		holes.push(document.getElementById(gamePieceImgName+ i.toString()));
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
	
	alert(endGameMsg+ score);
	var btn = document.getElementById(startBtnName);
	btn.style.display = 'block';
}

function generateNum(){
	tempRandomNum  = Math.floor(Math.random()*numOfHoles);
	while(tempRandomNum == randomNum){
		tempRandomNum = Math.floor(Math.random()*numOfHoles);
	}
	return tempRandomNum;
}

function play(){
	holes[randomNum].src = hole;
	randomNum = generateNum();
	holes[randomNum].src = worm;
}

function randomize(event){
	var source = event.target || event.srcElement;
	var img = source.src;

	if(img.substring(img.lastIndexOf("/")+1) == worm){

	score+=points;
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
	var btn = document.getElementById(starBtnName);
	btn.style.display = 'none';
}