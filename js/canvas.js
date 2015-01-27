document.addEventListener('DOMContentLoaded',domloaded,false);
function domloaded(){

    var c = document.getElementById('canvas');
    var ctx = c.getContext('2d');

    ctx.fillStyle = 'f00';
    ctx.fillRect(100,100,300,400);
    function draw(){
     ctx.beginPath();
     //ctx.moveTo(200, 85);
     ctx.moveTo(0, 0);
     ctx.lineTo(0, 500);
     ctx.strokeStyle = 'hsl(' + 360 * Math.random() + ', 50%, 50%)';
     ctx.stroke();
     ctx.closePath();
     ctx.rotate(Math.PI*2/180);
     setTimeout(draw,50);


     ctx.moveTo(500, 0);
     ctx.lineTo(500, 500);
     ctx.strokeStyle = 'hsl(' + 360 * Math.random() + ', 50%, 50%)';
     ctx.stroke();
     ctx.closePath();
     ctx.rotate(Math.PI*2/180);
     setTimeout(draw,50);
     }
     draw();

}
