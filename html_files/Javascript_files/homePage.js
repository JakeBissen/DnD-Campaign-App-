// to see coordiniates of mouse on screen for placing elements
document.onmousemove = function(e){
var x = e.pageX;
var y = e.pageY;
e.target.title = "X is "+x+" and Y is "+y;
};


