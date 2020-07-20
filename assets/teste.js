$("#clear").click(function(){
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

$(function(){
				var canvas = document.getElementById('myCanvas');
        if (canvas.getContext){
          var ctx = canvas.getContext('2d');
        }

        var ctx = canvas.getContext('2d');
    //Variables
    var canvasx = $(canvas).offset().left;
    var canvasy = $(canvas).offset().top;
    var last_mousex = last_mousey = w = h = 0;
    var prev_x = prev_y = prev_w = prev_h = 0;
    var mousex = mousey = 0;
    var mousedown = false;

    //Mousedown
    $(canvas).on('mousedown', function (e) {
        last_mousex = parseInt(e.clientX - canvasx);
        last_mousey = parseInt(e.clientY - canvasy);
        mousedown = true;

    });

    //Mouseup
    $(canvas).on('mouseup', function (e) {
        w = h = 0;
        mousedown = false;
    });

    //Mousemove
    $(canvas).on('mousemove', function (e) {
        mousex = parseInt(e.clientX - canvasx);
        mousey = parseInt(e.clientY - canvasy);
        if (mousedown) {
            prev_x = last_mousex;
            prev_y = last_mousey;
            prev_w = w;
            prev_h = h;
            ctx.clearRect(prev_x-1, prev_y-1, prev_w+2, prev_h+2);

            w = mousex - last_mousex;
            h = mousey - last_mousey;
            ctx.beginPath();
            ctx.rect(last_mousex, last_mousey, w, h);
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 1;
            ctx.stroke();
        }
    });

})
