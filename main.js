var mouse_event = "empty";
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var last_positoin_of_x, last_positoin_of_y;
color = "black";
width_of_line = 1;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_line").value;
    mouse_event = "mousedown";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouse_event = "mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouse_event = "mouseleave";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    currentpositionofmousex = e.clientX-canvas.offsetLeft;
    currentpositionofmousey = e.clientY-canvas.offsetTop;
    if(mouse_event = "mousedown")
    {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        console.log("last position of x and y cordinates = ");
        console.log("x = " + last_positoin_of_x + " y = " + last_positoin_of_y);
        ctx.moveTo(last_positoin_of_x, last_positoin_of_y);
        console.log("current position of x and y cordinates = ");
        console.log("x = " + currentpositionofmousex + " y = " + currentpositionofmousey);
        ctx.lineTo(currentpositionofmousex, currentpositionofmousey);
        ctx.stroke();
    }
    last_positoin_of_x = currentpositionofmousex;
    last_positoin_of_y = currentpositionofmousey;
}
function clear_area(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}