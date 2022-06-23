var teclas = {
    UP: 38,
    DOWN: 40,
    RIGHT: 39,
    LEFT: 37
};

document.addEventListener("keyup", dibujarTeclado); 

var cuadrito = document.getElementById("teclas");
var lienzo = cuadrito.getContext("2d");
var x = 150;
var y = 150;

function dibujar(colorLinea,xInicial,yInicial,xFinal,yFinal, lienzo){

    lienzo.beginPath();
    lienzo.strokeStyle = colorLinea;
    lienzo.moveTo(xInicial, yInicial);
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();
    lienzo.closePath();
    
}

function dibujarTeclado(evento){
    var colorLinea = "blue";
    var movimiento = 10;

    if(evento.keyCode == teclas.UP){
        dibujar(colorLinea, x, y, x, y-movimiento, lienzo);
        y = y - movimiento;
    }
    if(evento.keyCode == teclas.DOWN){
        dibujar(colorLinea, x, y, x, y+movimiento, lienzo);
        y = y + movimiento;
    }
    if(evento.keyCode == teclas.LEFT){
        dibujar(colorLinea, x, y, x-movimiento, y, lienzo);
        x = x - movimiento;
    }
    if(evento.keyCode == teclas.RIGHT){
        dibujar(colorLinea, x, y, x+movimiento, y, lienzo);
        x = x + movimiento;
    }
}