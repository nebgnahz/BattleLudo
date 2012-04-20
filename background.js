/* this is drawing the background of this game
 * draw rectangles and circles on a canvas
 * would make such background decent
 *
 * author: Ben Zhang(nebgnahz@gmail.com)
 * date: April 18, 2012
 */

// the whole is a rectangle, prefer to set the canvas to be 17*17, first, or actually I guess i may implement this as resizable
// using several variables to set
// with right 

var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");

// define the vector containing the cooodinates of circles
var points = [{x:150, y:550}, 
	      {x:250, y:500}, 
	      {x:350, y:500},
	      {x:450, y:550},
	      {x:550, y:450},
	      {x:500, y:350},
	      {x:500, y:250},
	      {x:550, y:150},
	      {x:650, y:100},
	      {x:750, y:100},
	      {x:850, y:100},
	      {x:950, y:100},
	      {x:1050, y:100},
	      {x:1150, y:150},
	      {x:1200, y:250},
	      {x:1200, y:350},
	      {x:1150, y:450},
	      {x:1250, y:550},
	      {x:1350, y:500},
	      {x:1450, y:500},
	      {x:1550, y:550},
	      {x:1600, y:650},
	      {x:1600, y:750},
	      {x:1600, y:850},
	      {x:1600, y:950},
	      {x:1600, y:1050},
	      {x:1550, y:1150},
	      {x:1450, y:1200},
	      {x:1350, y:1200},
	      {x:1250, y:1150},
	      {x:1150, y:1250},
	      {x:1200, y:1350},
	      {x:1200, y:1450},
	      {x:1150, y:1550},
	      {x:1050, y:1600},
	      {x:950, y:1600},
	      {x:850, y:1600},
	      {x:750, y:1600},
	      {x:650, y:1600},
	      {x:550, y:1550},
	      {x:500, y:1450},
	      {x:500, y:1350},
	      {x:550, y:1250},
	      {x:450, y:1150},
	      {x:350, y:1200},
	      {x:250, y:1200},
	      {x:150, y:1150},
	      {x:100, y:1050},
	      {x:100, y:950},
	      {x:100, y:850},
	      {x:100, y:750},
	      {x:100, y:650}];

var yellowFinalPoints = [{x:250, y:850}, 
			 {x:350, y:850}, 
			 {x:450, y:850}, 
			 {x:550, y:850}, 
			 {x:650, y:850}, 
			 {x:750, y:850}];

var blueFinalPoints = [{x:850, y:250}, 
		       {x:850, y:350}, 
		       {x:850, y:450}, 
		       {x:850, y:550}, 
		       {x:850, y:650}, 
		       {x:850, y:750}];

var greenFinalPoints = [{x:1450, y:850}, 
			 {x:1350, y:850}, 
			 {x:1250, y:850}, 
			 {x:1150, y:850}, 
			 {x:1050, y:850}, 
			 {x:950, y:850}];

var redFinalPoints = [{x:850, y:1450}, 
		       {x:850, y:1350}, 
		       {x:850, y:1250}, 
		       {x:850, y:1150}, 
		       {x:850, y:1050}, 
		       {x:850, y:950}];

var yellowStartPoints = [{x:100, y:100}, 
			 {x:300, y:100}, 
			 {x:100, y:300}, 
			 {x:300, y:300}];

var blueStartPoints = [{x:1400, y:100}, 
		       {x:1600, y:100}, 
		       {x:1400, y:300}, 
		       {x:1600, y:300}];

var greenStartPoints = [{x:1400, y:1400}, 
			{x:1400, y:1600}, 
			{x:1600, y:1400}, 
			{x:1600, y:1600}];

var redStartPoints = [{x:100, y:1400}, 
		      {x:300, y:1400}, 
		      {x:100, y:1600}, 
		      {x:300, y:1600}];

yellowBufferPoint  = {x:50, y:450};
blueBufferPoint  = {x:1250, y:50};
greenBufferPoint  = {x:1650, y:1250};
redBufferPoint  = {x:450, y:1650};


ctx.width = 1700;
ctx.height = 1700;
drawBackground();
drawWhitePoints();
// ctx.width, ctx.height

// ctx.fillStyle="#FF8FF0";
// ctx.fillRect(0,0,ctx.width, ctx.height);

// offscreen = document.createElement('canvas');

function drawBackground() {
    var terminal = 400;

    // terminal area first, together with the routes for different color
    ctx.fillStyle="#FFFF00";
    ctx.fillRect(0,0,terminal,terminal);
    ctx.fillRect(200,400,100,200);
    ctx.fillRect(400,300,200,100);
    ctx.fillRect(700,0,100,200);
    ctx.fillRect(1500,600,200,100);
    ctx.fillRect(1500,1000,200,100);
    ctx.fillRect(700,1500,100,200);
    ctx.fillRect(400,1300,200,100);
    ctx.fillRect(200,1100,100,200);
    ctx.fillRect(0,800,200,100);
    ctx.fillRect(200,400,100,200);
    ctx.beginPath();
    ctx.moveTo(1100,0);
    ctx.lineTo(1100,200);
    ctx.lineTo(1300,200);
    ctx.lineTo(1100,0);
    ctx.fill();
    ctx.moveTo(1100,600);
    ctx.lineTo(1300,600);
    ctx.lineTo(1300,400);
    ctx.lineTo(1100,600);
    ctx.fill();
    ctx.moveTo(1100,1100);
    ctx.lineTo(1300,1100);
    ctx.lineTo(1300,1300);
    ctx.lineTo(1100,1100);
    ctx.fill();
    ctx.moveTo(1100,1500);
    ctx.lineTo(1300,1500);
    ctx.lineTo(1100,1700);
    ctx.lineTo(1100,1500);
    ctx.fill();
    ctx.moveTo(200,800);
    ctx.lineTo(700,800);
    ctx.lineTo(700,700);
    ctx.lineTo(850,850);
    ctx.lineTo(700,1000);
    ctx.lineTo(700,900);
    ctx.lineTo(200,900);
    ctx.lineTo(200,800);
    ctx.fill();
    ctx.closePath();

    ctx.fillStyle="#0000FF";
    ctx.fillRect(1300,0,terminal,terminal);
    ctx.fillRect(0,700,200,100);
    ctx.fillRect(300,400,100,200);
    ctx.fillRect(400,200,200,100);
    ctx.fillRect(800,0,100,200);
    ctx.fillRect(1100,200,200,100);
    ctx.fillRect(1300,400,100,200);
    ctx.fillRect(1500,700,200,100);
    ctx.fillRect(1000,1500,100,200);
    ctx.fillRect(600,1500,100,200);

    ctx.beginPath();
    ctx.moveTo(0,1100);
    ctx.lineTo(200,1100);
    ctx.lineTo(200,1300);
    ctx.lineTo(0,1100);
    ctx.fill();
    ctx.moveTo(600,1100);
    ctx.lineTo(600,1300);
    ctx.lineTo(400,1300);
    ctx.lineTo(600,1100);
    ctx.fill();
    ctx.moveTo(1100,1100);
    ctx.lineTo(1100,1300);
    ctx.lineTo(1300,1300);
    ctx.lineTo(1100,1100);
    ctx.fill();
    ctx.moveTo(1500,1100);
    ctx.lineTo(1700,1100);
    ctx.lineTo(1500,1300);
    ctx.lineTo(1500,1100);
    ctx.fill();
    ctx.moveTo(800,200);
    ctx.lineTo(900,200);
    ctx.lineTo(900,700);
    ctx.lineTo(1000,700);
    ctx.lineTo(850,850);
    ctx.lineTo(700,700);
    ctx.lineTo(800,700);
    ctx.lineTo(800,200);
    ctx.fill();
    ctx.closePath();

    ctx.fillStyle="#FF0000";
    ctx.fillRect(0,1300,terminal,terminal);
    ctx.fillRect(0,900,200,100);
    ctx.fillRect(300,1100,100,200);
    ctx.fillRect(400,1400,200,100);
    ctx.fillRect(800,1500,100,200);
    ctx.fillRect(1100,1400,200,100);
    ctx.fillRect(1300,1100,100,200);
    ctx.fillRect(1500,900,200,100);
    ctx.fillRect(1000,0,100,200);
    ctx.fillRect(600,0,100,200);

    ctx.beginPath();
    ctx.moveTo(0,600);
    ctx.lineTo(200,600);
    ctx.lineTo(200,400);
    ctx.lineTo(0,600);
    ctx.fill();
    ctx.moveTo(400,400);
    ctx.lineTo(600,400);
    ctx.lineTo(600,600);
    ctx.lineTo(400,400);
    ctx.fill();
    ctx.moveTo(1100,400);
    ctx.lineTo(1300,400);
    ctx.lineTo(1100,600);
    ctx.lineTo(1100,400);
    ctx.fill();
    ctx.moveTo(1500,400);
    ctx.lineTo(1700,600);
    ctx.lineTo(1500,600);
    ctx.lineTo(1500,400);
    ctx.fill();
    ctx.moveTo(800,1500);
    ctx.lineTo(900,1500);
    ctx.lineTo(900,1000);
    ctx.lineTo(1000,1000);
    ctx.lineTo(850,850);
    ctx.lineTo(700,1000);
    ctx.lineTo(800,1000);
    ctx.lineTo(800,1500);
    ctx.fill();
    ctx.closePath();

    ctx.fillStyle="#00FF00";
    ctx.fillRect(1300,1300,terminal,terminal);
    ctx.fillRect(1400,400,100,200);
    ctx.fillRect(1100,300,200,100);
    ctx.fillRect(900,0,100,200);
    ctx.fillRect(0,600,200,100);
    ctx.fillRect(0,1000,200,100);
    ctx.fillRect(900,1500,100,200);
    ctx.fillRect(1100,1300,200,100);
    ctx.fillRect(1400,1100,100,200);
    ctx.fillRect(1500,800,200,100);

    ctx.beginPath();
    ctx.moveTo(600,0);
    ctx.lineTo(600,200);
    ctx.lineTo(400,200);
    ctx.lineTo(600,0);
    ctx.fill();
    ctx.moveTo(400,400);
    ctx.lineTo(400,600);
    ctx.lineTo(600,600);
    ctx.lineTo(400,400);
    ctx.fill();
    ctx.moveTo(400,1100);
    ctx.lineTo(600,1100);
    ctx.lineTo(400,1300);
    ctx.lineTo(400,1100);
    ctx.fill();
    ctx.moveTo(400,1500);
    ctx.lineTo(600,1500);
    ctx.lineTo(600,1700);
    ctx.lineTo(400,1500);
    ctx.fill();
    ctx.moveTo(1500,800);
    ctx.lineTo(1000,800);
    ctx.lineTo(1000,700);
    ctx.lineTo(850,850);
    ctx.lineTo(1000,1000);
    ctx.lineTo(1000,900);
    ctx.lineTo(1500,900);
    ctx.lineTo(1500,800);
    ctx.fill();
    ctx.closePath();
    // done with terminal






    // come to the stroke part
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'black';
    ctx.strokeRect(0,0,terminal,terminal);
    ctx.strokeRect(200,400,100,200);
    ctx.strokeRect(400,300,200,100);
    ctx.strokeRect(700,0,100,200);
    ctx.strokeRect(1500,600,200,100);
    ctx.strokeRect(1500,1000,200,100);
    ctx.strokeRect(700,1500,100,200);
    ctx.strokeRect(400,1300,200,100);
    ctx.strokeRect(200,1100,100,200);
    ctx.strokeRect(0,800,200,100);
    ctx.strokeRect(200,400,100,200);
    ctx.beginPath();
    ctx.moveTo(1100,0);
    ctx.lineTo(1100,200);
    ctx.lineTo(1300,200);
    ctx.lineTo(1100,0);
    ctx.stroke();
    ctx.moveTo(1100,600);
    ctx.lineTo(1300,600);
    ctx.lineTo(1300,400);
    ctx.lineTo(1100,600);
    ctx.stroke();
    ctx.moveTo(1100,1100);
    ctx.lineTo(1300,1100);
    ctx.lineTo(1300,1300);
    ctx.lineTo(1100,1100);
    ctx.stroke();
    ctx.moveTo(1100,1500);
    ctx.lineTo(1300,1500);
    ctx.lineTo(1100,1700);
    ctx.lineTo(1100,1500);
    ctx.stroke();
    ctx.moveTo(200,800);
    ctx.lineTo(700,800);
    ctx.lineTo(700,700);
    ctx.lineTo(850,850);
    ctx.lineTo(700,1000);
    ctx.lineTo(700,900);
    ctx.lineTo(200,900);
    ctx.lineTo(200,800);
    ctx.stroke();
    ctx.closePath();


    ctx.strokeRect(1300,0,terminal,terminal);
    ctx.strokeRect(0,700,200,100);
    ctx.strokeRect(300,400,100,200);
    ctx.strokeRect(400,200,200,100);
    ctx.strokeRect(800,0,100,200);
    ctx.strokeRect(1100,200,200,100);
    ctx.strokeRect(1300,400,100,200);
    ctx.strokeRect(1500,700,200,100);
    ctx.strokeRect(1000,1500,100,200);
    ctx.strokeRect(600,1500,100,200);

    ctx.beginPath();
    ctx.moveTo(0,1100);
    ctx.lineTo(200,1100);
    ctx.lineTo(200,1300);
    ctx.lineTo(0,1100);
    ctx.stroke();
    ctx.moveTo(600,1100);
    ctx.lineTo(600,1300);
    ctx.lineTo(400,1300);
    ctx.lineTo(600,1100);
    ctx.stroke();
    ctx.moveTo(1100,1100);
    ctx.lineTo(1100,1300);
    ctx.lineTo(1300,1300);
    ctx.lineTo(1100,1100);
    ctx.stroke();
    ctx.moveTo(1500,1100);
    ctx.lineTo(1700,1100);
    ctx.lineTo(1500,1300);
    ctx.lineTo(1500,1100);
    ctx.stroke();
    ctx.moveTo(800,200);
    ctx.lineTo(900,200);
    ctx.lineTo(900,700);
    ctx.lineTo(1000,700);
    ctx.lineTo(850,850);
    ctx.lineTo(700,700);
    ctx.lineTo(800,700);
    ctx.lineTo(800,200);
    ctx.stroke();
    ctx.closePath();

    ctx.strokeRect(0,1300,terminal,terminal);
    ctx.strokeRect(0,900,200,100);
    ctx.strokeRect(300,1100,100,200);
    ctx.strokeRect(400,1400,200,100);
    ctx.strokeRect(800,1500,100,200);
    ctx.strokeRect(1100,1400,200,100);
    ctx.strokeRect(1300,1100,100,200);
    ctx.strokeRect(1500,900,200,100);
    ctx.strokeRect(1000,0,100,200);
    ctx.strokeRect(600,0,100,200);

    ctx.beginPath();
    ctx.moveTo(0,600);
    ctx.lineTo(200,600);
    ctx.lineTo(200,400);
    ctx.lineTo(0,600);
    ctx.stroke();
    ctx.moveTo(400,400);
    ctx.lineTo(600,400);
    ctx.lineTo(600,600);
    ctx.lineTo(400,400);
    ctx.stroke();
    ctx.moveTo(1100,400);
    ctx.lineTo(1300,400);
    ctx.lineTo(1100,600);
    ctx.lineTo(1100,400);
    ctx.stroke();
    ctx.moveTo(1500,400);
    ctx.lineTo(1700,600);
    ctx.lineTo(1500,600);
    ctx.lineTo(1500,400);
    ctx.stroke();
    ctx.moveTo(800,1500);
    ctx.lineTo(900,1500);
    ctx.lineTo(900,1000);
    ctx.lineTo(1000,1000);
    ctx.lineTo(850,850);
    ctx.lineTo(700,1000);
    ctx.lineTo(800,1000);
    ctx.lineTo(800,1500);
    ctx.stroke();
    ctx.closePath();

    ctx.strokeRect(1300,1300,terminal,terminal);
    ctx.strokeRect(1400,400,100,200);
    ctx.strokeRect(1100,300,200,100);
    ctx.strokeRect(900,0,100,200);
    ctx.strokeRect(0,600,200,100);
    ctx.strokeRect(0,1000,200,100);
    ctx.strokeRect(900,1500,100,200);
    ctx.strokeRect(1100,1300,200,100);
    ctx.strokeRect(1400,1100,100,200);
    ctx.strokeRect(1500,800,200,100);

    ctx.beginPath();
    ctx.moveTo(600,0);
    ctx.lineTo(600,200);
    ctx.lineTo(400,200);
    ctx.lineTo(600,0);
    ctx.stroke();
    ctx.moveTo(400,400);
    ctx.lineTo(400,600);
    ctx.lineTo(600,600);
    ctx.lineTo(400,400);
    ctx.stroke();
    ctx.moveTo(400,1100);
    ctx.lineTo(600,1100);
    ctx.lineTo(400,1300);
    ctx.lineTo(400,1100);
    ctx.stroke();
    ctx.moveTo(400,1500);
    ctx.lineTo(600,1500);
    ctx.lineTo(600,1700);
    ctx.lineTo(400,1500);
    ctx.stroke();
    ctx.moveTo(1500,800);
    ctx.lineTo(1000,800);
    ctx.lineTo(1000,700);
    ctx.lineTo(850,850);
    ctx.lineTo(1000,1000);
    ctx.lineTo(1000,900);
    ctx.lineTo(1500,900);
    ctx.lineTo(1500,800);
    ctx.stroke();
    ctx.closePath();
}

function drawWhitePoints() {
    var planeRadius = 45;

    // draw the white points
    var len = points.length;
    for(var i = 0; i < len; i++) {
	ctx.fillStyle="#FFFFFF";
	ctx.beginPath();
	ctx.arc(points[i].x, points[i].y, planeRadius, 0, Math.PI*2, true); 
	ctx.closePath();
	ctx.fill();
	// alert(points[i].x + ' ' + points[i].y);
	ctx.stroke();
    }

    for(var i = 0; i < 6; i++) {
	ctx.fillStyle="#FFFFFF";
	ctx.beginPath();
	ctx.arc(yellowFinalPoints[i].x, yellowFinalPoints[i].y, planeRadius, 0, Math.PI*2, true); 
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(blueFinalPoints[i].x, blueFinalPoints[i].y, planeRadius, 0, Math.PI*2, true); 
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(greenFinalPoints[i].x, greenFinalPoints[i].y, planeRadius, 0, Math.PI*2, true); 
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(redFinalPoints[i].x, redFinalPoints[i].y, planeRadius, 0, Math.PI*2, true); 
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
    }

    for(var i = 0; i < 4; i++) {
	ctx.fillStyle="#FFFFFF";
	ctx.beginPath();
	ctx.arc(yellowStartPoints[i].x, yellowStartPoints[i].y, planeRadius, 0, Math.PI*2, true); 
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(blueStartPoints[i].x, blueStartPoints[i].y, planeRadius, 0, Math.PI*2, true); 
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(greenStartPoints[i].x, greenStartPoints[i].y, planeRadius, 0, Math.PI*2, true); 
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(redStartPoints[i].x, redStartPoints[i].y, planeRadius, 0, Math.PI*2, true); 
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
    }


    ctx.beginPath();
    ctx.arc(yellowBufferPoint.x, yellowBufferPoint.y, planeRadius, 0, Math.PI*2, true); 
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(blueBufferPoint.x, blueBufferPoint.y, planeRadius, 0, Math.PI*2, true); 
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(greenBufferPoint.x, greenBufferPoint.y, planeRadius, 0, Math.PI*2, true); 
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(redBufferPoint.x, redBufferPoint.y, planeRadius, 0, Math.PI*2, true); 
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}