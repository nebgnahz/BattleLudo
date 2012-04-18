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
ctx.width = 1700;
ctx.height = 1700;
// ctx.width, ctx.height

var scale = 1000;
var terminal = 400;
var planeRadius = 45;

// terminal area first, together with the routes for different color
ctx.fillStyle="#FFFF00";
ctx.fillRect(0,0,terminal,terminal);
ctx.fillRect(200,400,100,200);
ctx.fillRect(400,300,200,100);
ctx.fillRect(800,0,100,200);
ctx.fillRect(1500,600,200,100);
ctx.fillRect(1500,1000,200,100);
ctx.fillRect(800,1500,100,200);
ctx.fillRect(400,1300,200,100);
ctx.fillRect(200,1100,100,200);
ctx.fillRect(0,800,200,100);
ctx.fillRect(200,400,100,200);
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


ctx.fillStyle="#0000FF";
ctx.fillRect(1300,0,terminal,terminal);

ctx.fillStyle="#FF0000";
ctx.fillRect(0,1300,terminal,terminal);
/*
ctx.moveTo(10,10);
ctx.lineTo(150,50);
ctx.lineTo(10,50);
ctx.lineTo(10,10);
ctx.fill();
*/
ctx.fillStyle="#00FF00";
ctx.fillRect(1300,1300,terminal,terminal);
// done with terminal



ctx.fillStyle="#FFFFFF";
// circles first for each terminal
ctx.beginPath();
ctx.arc(100, 100, planeRadius, 0, Math.PI*2, true); 
ctx.closePath();
ctx.arc(300, 100, planeRadius, 0, Math.PI*2, true); 
ctx.closePath();
ctx.arc(100, 300, planeRadius, 0, Math.PI*2, true); 
ctx.closePath();
ctx.arc(300, 300, planeRadius, 0, Math.PI*2, true); 
ctx.closePath();

ctx.arc(1400, 100, planeRadius, 0, Math.PI*2, true); 
ctx.closePath();
ctx.arc(1600, 100, planeRadius, 0, Math.PI*2, true); 
ctx.closePath();
ctx.arc(1400, 300, planeRadius, 0, Math.PI*2, true); 
ctx.closePath();
ctx.arc(1600, 300, planeRadius, 0, Math.PI*2, true); 
ctx.closePath();

ctx.arc(100, 1400, planeRadius, 0, Math.PI*2, true); 
ctx.closePath();
ctx.arc(100, 1600, planeRadius, 0, Math.PI*2, true); 
ctx.closePath();
ctx.arc(300, 1400, planeRadius, 0, Math.PI*2, true); 
ctx.closePath();
ctx.arc(300, 1600, planeRadius, 0, Math.PI*2, true); 
ctx.closePath();

ctx.arc(1400, 1400, planeRadius, 0, Math.PI*2, true); 
ctx.closePath();
ctx.arc(1400, 1600, planeRadius, 0, Math.PI*2, true); 
ctx.closePath();
ctx.arc(1600, 1400, planeRadius, 0, Math.PI*2, true); 
ctx.closePath();
ctx.arc(1600, 1600, planeRadius, 0, Math.PI*2, true); 
ctx.closePath();

ctx.fill();
