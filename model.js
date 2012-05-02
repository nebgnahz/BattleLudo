// we first might need the status model
// which each client would know their status
// we have 16 nodes, so each would need to have its status
// terminal/buffer/routine/ending
// of course one problem is essentially the mapping for different items

// first we would define 16 nodes to be [0-15]
// each would have a color, or actually we can assign them now
// [0-3] yellow
// [4-7] blue
// [8-11] green
// [12-15] red
// for each there should be a mapping from 
// local location to the universal location
// yellow starts from 0, 49
// blue starts from 13, 10 ((13+49)%52)
// green starts from 26, 23
// red starts from 39, 36
// and each has its terminal/buffer points
// each need to address the ending points
// 

// class for a node
// color, index, status(terminal, onRoad, done)
var enumStatus = {
  terminal:0,
  onRoad:1,
  done:2
};

function Node(status, index, locationX, locationY) {
  this.status = status;
  this.index = index;
  this.locationX = locationX;
  this.locationY = locationY;
  this.img = undefined;
}
var images = {};
var node = new Array();
initStatus();
node[12].status = enumStatus.onRoad;
node[12].index = 20;
for (var i=0; i<16; i++)
  mapNode(i);
loadImages();


var indexNumber = 20;
var speed = 50;
ctx.clearRect(0, 0, c.width, c.height);
drawBackground();
drawWhitePoints();
drawNodes(0);

setInterval(function() {
	indexNumber += 6;
	animateOnMove(12, indexNumber);
	indexNumber = node[12].index;
  }, 4000);

function animateOnMove(whichNode, endIndex) {
  var startPosX = node[whichNode].locationX
	, startPosY = node[whichNode].locationY;
  var currentPosX = startPosX
	, currentPosY = startPosY;
  // update the node's index
  node[whichNode].index = endIndex;
  mapNode(whichNode);
  var endPosX = node[whichNode].locationX
	, endPosY = node[whichNode].locationY;

  // now do the interpolation and draw each step
  var distance = Math.sqrt((endPosY - startPosY) * (endPosY - startPosY) + 
						   (endPosX - startPosX) * (endPosX - startPosX));
  var rotation = Math.atan((endPosY - startPosY)/(endPosX - startPosX)) + Math.PI/2;
  if (endPosX < startPosX) {
	rotation += Math.PI; 	
  }
  var stepNum = Math.floor(distance/speed);
  var speedX = (endPosX - startPosX)/stepNum
	, speedY = (endPosY - startPosY)/stepNum;

  var i = 0;
  var animationID = setInterval(function() {
	  if (i >= stepNum - 1) {
		console.log("cleared id");
		clearInterval(animationID);
		mapNode(whichNode);
		ctx.clearRect(0, 0, c.width, c.height);
		drawBackground();
		drawWhitePoints();
		drawNodes(0, whichNode);
	  }
	  i++;
	  node[whichNode].locationX = speedX*i + startPosX;
	  node[whichNode].locationY = speedY*i + startPosY;
		
	  ctx.clearRect(0, 0, c.width, c.height);
	  drawBackground();
	  drawWhitePoints();
	  drawNodes(rotation, whichNode);
	}, 200);
}

// since we are not moving, we are just drawing new
// so this initStatus is not valid
// we need to be able to draw the whole in any sec
function initStatus() {
  for(i=0; i<16; i++) {
	node.push(new Node(enumStatus.terminal, undefined));
  }
}

function changeStatus(index, status) {
  // should be some animation
  // from terminal to onRoad
  // from onRoad to done
  // from onRoad to terminal
  node[index].status = status;
}
function moveNodes(index, destination) {
  node[index].location = destination;
}

function loadImages() {
  var sources = {
	yellow: "images/yellow.png",
	blue: "images/blue.png",
	green: "images/green.png",
	red: "images/red.png"
  };
  var loadedImages = 0;
  for (var src in sources) {
    images[src] = new Image();
    images[src].onload = function(){
      if (++loadedImages >= 4) {
		console.log("load images done");
		drawNodes();
      }
    };
    images[src].src = sources[src];
  }
}

// mapNode function takes the i as input which identifies the moving node
// returns its location according to the rules by the index information
// will update the node's locationX and locationY attributes
function mapNode(i){
  if(i<4) {
	if (node[i].status === enumStatus.terminal) {
	  node[i].locationX = yellowStartPoints[i].x;
	  node[i].locationY = yellowStartPoints[i].y;
	}
	else if (node[i].status === enumStatus.onRoad) {
	  if (node[i].index == -1) {
		// buffer area
		node[i].locationX = yellowBufferPoint.x;
		node[i].locationY = yellowBufferPoint.y;		
	  }
	  else if (node[i].index > 49) {
		if (node[i].index > 55)
		  node[i].index = 55*2 - node[i].index;

		// ending area
		node[i].locationX = yellowFinalPoints[node[i].index-50].x;
		node[i].locationY = yellowFinalPoints[node[i].index-50].y;
	  }
	  else {
		node[i].locationX = points[node[i].index].x;
		node[i].locationY = points[node[i].index].y;
	  }
	}
	else if (node[i].status === enumStatus.done) {
	  node[i].locationX = -100;
	  node[i].locationY = -100;	    
	}
	else {
	  alert("something got wrong about mapping");
	}
  }
  else if (4<=i && i<8) {
	if (node[i].status === enumStatus.terminal) {
	  node[i].locationX = blueStartPoints[i%4].x;
	  node[i].locationY = blueStartPoints[i%4].y;
	}
	else if (node[i].status === enumStatus.onRoad) {
	  if (node[i].index == -1) {
		// buffer area
		node[i].locationX = blueBufferPoint.x;
		node[i].locationY = blueBufferPoint.y;		
	  }
	  else if (node[i].index > 49) {
		if (node[i].index > 55)
		  node[i].index = 55*2 - node[i].index;
				
		// ending area
		node[i].locationX = blueFinalPoints[node[i].index-50].x;
		node[i].locationY = blueFinalPoints[node[i].index-50].y;
	  }
	  else {
		node[i].locationX = points[(node[i].index + 13)%52].x;
		node[i].locationY = points[(node[i].index + 13)%52].y;
	  }
	}
	else if (node[i].status === enumStatus.done) {
	  node[i].locationX = -100;
	  node[i].locationY = -100;	    
	}
	else {
	  alert("something got wrong about mapping");
	}
  }
  else if (8<=i && i<12) {
	if (node[i].status === enumStatus.terminal) {
	  node[i].locationX = greenStartPoints[i%4].x;
	  node[i].locationY = greenStartPoints[i%4].y;
	}
	else if (node[i].status === enumStatus.onRoad) {
	  if (node[i].index == -1) {
		// buffer area
		node[i].locationX = greenBufferPoint.x;
		node[i].locationY = greenBufferPoint.y;		
	  }
	  else if (node[i].index > 49) {
		if (node[i].index > 55)
		  node[i].index = 55*2 - node[i].index;

		// ending area
		node[i].locationX = greenFinalPoints[node[i].index-50].x;
		node[i].locationY = greenFinalPoints[node[i].index-50].y;
	  }
	  else {
		node[i].locationX = points[(node[i].index + 26)%52].x;
		node[i].locationY = points[(node[i].index + 26)%52].y;
	  }
	}
	else if (node[i].status === enumStatus.done) {
	  node[i].locationX = -100;
	  node[i].locationY = -100;	    
	}
	else {
	  alert("something got wrong about mapping");
	}
  }
  else if (12<=i && i<16) {
	if (node[i].status === enumStatus.terminal) {
	  node[i].locationX = redStartPoints[i%4].x;
	  node[i].locationY = redStartPoints[i%4].y;
	}
	else if (node[i].status === enumStatus.onRoad) {
	  if (node[i].index == -1) {
		// buffer area
		node[i].locationX = redBufferPoint.x;
		node[i].locationY = redBufferPoint.y;		
	  }
	  else if (node[i].index >  49) {
		if (node[i].index > 55)
		  node[i].index = 55*2 - node[i].index;
		// ending area
		node[i].locationX = redFinalPoints[node[i].index-50].x;
		node[i].locationY = redFinalPoints[node[i].index-50].y;
	  }
	  else {
		node[i].locationX = points[(node[i].index + 39)%52].x;
		node[i].locationY = points[(node[i].index + 39)%52].y;
	  }
	}
	else if (node[i].status === enumStatus.done) {
	  node[i].locationX = -100;
	  node[i].locationY = -100;	    
	}
	else {
	  alert("something got wrong about mapping");
	}
  }
}



function drawRotatedImage(image, x, y, angle) { 

  // save the current co-ordinate system 
  // before we screw with it
  ctx.save(); 

  // move to the middle of where we want to draw our image
  ctx.translate(x, y);

  // rotate around that point, converting our 
  // angle from degrees to radians 
  ctx.rotate(angle);

  // draw it up and to the left by half the width
  // and height of the image 
  ctx.drawImage(image, -(image.width/2), -(image.height/2));

  // and restore the co-ords to how they were when we began
  ctx.restore(); 
}

// this is part of the draw function of a game
// according to the position, draw the 16 planes
function drawNodes(rotation, theNode) {
  // then draw the image back and up
  for(i=0; i<4; i++) {
	if (i==theNode) {
	  drawRotatedImage(images.yellow, node[i].locationX - 45, node[i].locationY - 45, rotation);
	  continue;
	}
	ctx.drawImage(images.yellow, node[i].locationX - 45, node[i].locationY - 45);
  }
  for(; i<8; i++) {
	if (i==theNode) {
	  drawRotatedImage(images.blue, node[i].locationX - 45, node[i].locationY - 45, rotation);
	  continue;
	}
	ctx.drawImage(images.blue, node[i].locationX - 45, node[i].locationY - 45);
  }
  for(; i<12; i++) {
	if (i==theNode) {
	  drawRotatedImage(images.green, node[i].locationX - 45, node[i].locationY - 45, rotation);
	  continue;
	}
	ctx.drawImage(images.green, node[i].locationX - 45, node[i].locationY - 45);
  }
  for(; i<16; i++) {
	if (i==theNode) {
	  drawRotatedImage(images.red, node[i].locationX, node[i].locationY, rotation);
	  continue;
	}
	ctx.drawImage(images.red, node[i].locationX - 45, node[i].locationY - 45);
  }

}
