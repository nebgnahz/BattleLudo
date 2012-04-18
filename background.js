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
