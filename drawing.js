const BACKGROUND_COLOR = '#000000'
const LINE_COLOR = '#ffffff'
const LINE_WIDTH = 15

var currentX = 0;
var currentY = 0;
var previousX = 0;
var previousY = 0;

var canvas;
var context;

function prepareCanvas() {
    canvas = document.getElementById('num-canvas');
    context = canvas.getContext("2d")
    context.fillStyle = BACKGROUND_COLOR
    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight)
    context.strokeStyle = LINE_COLOR
    context.lineWidth = LINE_WIDTH
    context.lineJoin = 'round'

    var isPainting = false;

    document.addEventListener('mousedown', function (event) {
        isPainting = true;

        currentX = event.clientX - canvas.offsetLeft;
        currentY = event.clientY - canvas.offsetTop;
    });

    canvas.addEventListener('touchstart', function (event) {
        isPainting = true;
        currentX = event.touches[0].clientX - canvas.offsetLeft;
        currentY = event.touches[0].clientY - canvas.offsetTop;
    })

    document.addEventListener('mousemove', function (event) {
        if(isPainting){
            previousX = currentX;
            currentX = event.clientX - canvas.offsetLeft;

            previousY = currentY;
            currentY = event.clientY - canvas.offsetTop;

            draw();
        }
    });

    document.addEventListener('mouseup', function (event) {
        isPainting = false; 
    });

    canvas.addEventListener('mouseleave', function (event){
        isPainting = false;
    })
    
    canvas.addEventListener('touchend', function (event) {
        isPainting = false;
    });
    
    canvas.addEventListener('touchmove', function (event) {
        if(isPainting){
            previousX = currentX;
            currentX = event.touches[0].clientX - canvas.offsetLeft;

            previousY = currentY;
            currentY = event.touches[0].clientY - canvas.offsetTop;

            context.beginPath()
            context.moveTo(previousX, previousY);
            context.lineTo(currentX, currentY);
            context.closePath();
            context.stroke()
        }
    });

    canvas.addEventListener('touchcancel', function (event){
        isPainting = false;
    })
}

function draw() {
    context.beginPath();
    context.moveTo(previousX, previousY);
    context.lineTo(currentX, currentY);
    context.closePath();
    context.stroke();
}

function clearCanvas() {
    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight)
    
    currentX = 0;
    currentY = 0;
    previousX = 0;
    previousY = 0;
}