var mouseEvent="empty";
var last_position_of_x,last_position_of_y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="red";
width_of_line=1;
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200, 200, 40 , 0, 2*Math.PI);
ctx.stroke()

canvas.addEventListener("mousedown", my_mousedown)

function my_mousedown(e) {
color=document.getElementById("color").value;
width_of_line=document.getElementById("width_of_the_line").value;
mouseEvent="mousedown";

}
canvas.addEventListener("mouseup", my_mouseup)

function my_mouseup(e) {
mouseEvent="mouseup";}
canvas.addEventListener("mouseleave", my_mouseleave)

function my_mouseleave(e) {
mouseEvent="mouseleave";}
canvas.addEventListener("mousemove", my_mousemove)

function my_mousemove(e) {
current_position_of_x=e.clientX-canvas.offsetLeft;
current_position_of_y=e.clientY-canvas.offsetTop;

if (mouseEvent=="mousedown")
{
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width_of_the_line;
console.log("last position of x and y are");
console.log("x="+last_position_of_x+"y="+last_position_of_y);
ctx.moveto(last_position_of_x, last_position_of_y);

console.log("current position of x and y are");
console.log("x="+current_position_of_x+"y="+current_position_of_y);
ctx.lineto(current_position_of_x, current_position_of_y);
ctx.stroke();
last_position_of_x=current_position_of_x
last_position_of_y=current_position_of_y;
}
}
function circle() {
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(mouse_x, mouse_y, 40 , 0, 2*Math.PI);
    ctx.stroke()
    
}
