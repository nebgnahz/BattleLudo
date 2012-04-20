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
loadImages();
console.log(node[3]);

// since we are not moving, we are just drawing new
// so this initStatus is not valid
// we need to be able to draw the whole in any sec
function initStatus() {
    for(i=0; i<16; i++) {
	if(i<4){
	    node.push(new Node(enumStatus.terminal, undefined, yellowStartPoints[i%4].x, yellowStartPoints[i%4].y));
	}
	else if(4<=i && i<8) {
	    node.push(new Node(enumStatus.terminal, undefined, blueStartPoints[i%4].x, blueStartPoints[i%4].y));
	}
	else if(8<=i && i<12) {
	    node.push(new Node(enumStatus.terminal, undefined, greenStartPoints[i%4].x, greenStartPoints[i%4].y));
	}
	else {
	    node.push(new Node(enumStatus.terminal, undefined, redStartPoints[i%4].x, redStartPoints[i%4].y));
	}


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

function mapNode(){
    for(i=0; i<4; i++) {
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
	    else if (node[i].index >= 49) {
		// ending area
		node[i].locationX = yellowFinalPoints[node[i].index-49].x;
		node[i].locationY = yellowFinalPoints[node[i].index-49].y;
	    }
	    else {
	    	node[i].locationX = points[node[i].index-49].x;
		node[i].locationY = points[node[i].index-49].y;
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
    for(; i<8; i++) {
	if (node[i].status === enumStatus.terminal) {
	    node[i].locationX = blueStartPoints[i].x;
	    node[i].locationY = blueStartPoints[i].y;
	}
	else if (node[i].status === enumStatus.onRoad) {
	    if (node[i].index == -1) {
		// buffer area
		node[i].locationX = blueBufferPoint.x;
		node[i].locationY = blueBufferPoint.y;		
	    }
	    else if (node[i].index >= 49) {
		// ending area
		node[i].locationX = blueFinalPoints[node[i].index-49].x;
		node[i].locationY = blueFinalPoints[node[i].index-49].y;
	    }
	    else {
	    	node[i].locationX = points[node[i].index-49].x;
		node[i].locationY = points[node[i].index-49].y;
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
    for(; i<12; i++) {
	if (node[i].status === enumStatus.terminal) {
	    node[i].locationX = greenStartPoints[i].x;
	    node[i].locationY = greenStartPoints[i].y;
	}
	else if (node[i].status === enumStatus.onRoad) {
	    if (node[i].index == -1) {
		// buffer area
		node[i].locationX = greenBufferPoint.x;
		node[i].locationY = greenBufferPoint.y;		
	    }
	    else if (node[i].index >= 49) {
		// ending area
		node[i].locationX = greenFinalPoints[node[i].index-49].x;
		node[i].locationY = greenFinalPoints[node[i].index-49].y;
	    }
	    else {
	    	node[i].locationX = points[node[i].index-49].x;
		node[i].locationY = points[node[i].index-49].y;
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
    for(; i<16; i++) {
	if (node[i].status === enumStatus.terminal) {
	    node[i].locationX = redStartPoints[i].x;
	    node[i].locationY = redStartPoints[i].y;
	}
	else if (node[i].status === enumStatus.onRoad) {
	    if (node[i].index == -1) {
		// buffer area
		node[i].locationX = redBufferPoint.x;
		node[i].locationY = redBufferPoint.y;		
	    }
	    else if (node[i].index >= 49) {
		// ending area
		node[i].locationX = redFinalPoints[node[i].index-49].x;
		node[i].locationY = redFinalPoints[node[i].index-49].y;
	    }
	    else {
	    	node[i].locationX = points[node[i].index-49].x;
		node[i].locationY = points[node[i].index-49].y;
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
// this will be able to draw nodes at any states?
function drawNodes() {
    for(i=0; i<4; i++) {
	ctx.drawImage(images.yellow, node[i].locationX, node[i].locationY);
    }
    for(; i<8; i++) {
	ctx.drawImage(images.blue, node[i].locationX, node[i].locationY);
    }
    for(; i<12; i++) {
	ctx.drawImage(images.green, node[i].locationX, node[i].locationY);
    }
    for(; i<16; i++) {
	ctx.drawImage(images.red, node[i].locationX, node[i].locationY);
    }
}