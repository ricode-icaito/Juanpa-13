// Ejercicio 1
function mostrarMensaje() {
    alert("Soy una función");
}
mostrarMensaje();
// regresar a PowerPoint


// Ejercicio 2
var total = 5;
function calcularValor() {
    total = total * 2;
}
for(var f = 0; f < 10; f++) {
    calcularValor();
}
alert("El total es: " + total); // El total es: 5120
// primero declaramos una variable y asignamos el valor 5
// dentro del for hacemos el llamado a la función se ejecutara 10 veces
// multiplicando por 2 la variable total que inicia en 5
// Regresar a PowerPoint

/*// Ejercicio 3 ámbito esta da error
var variableGlobal = 5;
function mifuncion() {
    var variableLocal = "El valor es ";
    alert(variableLocal + variableGlobal); // El valor es 5
}
mifuncion();
alert(variableLocal); 
//este valor no lo vimos ya que dio error para el interprete
// verlo en la consola del navegador
// Regresar a */

// Ejercicio 4 ambito locales y globales
var mivariable = 5;
function mifuncion() {
    var mivariable = "Esta es una variable local"; //primero se imprime la local
    alert(mivariable);
}
mifuncion();
alert(mivariable);  //luego se imprime la global

// Regresar a PowerPoint

// Ejercicio 5
function otraFuncion(valor) {
    alert(valor);
}
otraFuncion(15);

// Regresar a PowerPoint

otraFuncion(35);
otraFuncion(175);

// Regresar a PowerPoint

// Ejercicio 6
var contador = 133;
function nuevaFuncion(newvalor) {
    alert(newvalor);
}
nuevaFuncion(contador);

// Regresar a PowerPoint

// Ejercicio 7
var dato1 = 100;
var dato2 = 125;

function sumaDosNumeros(valor1, valor2) {
    var totalSuma = valor1 + valor2;
    alert(totalSuma); //225
}
sumaDosNumeros(dato1,dato2);

// Regresar a PowerPoint

// Ejercicio 8
var dato3 = 255;
var dato4 = 100;
function sumaDosretorno(valor3, valor4) {
    var newTotal = valor3 + valor4;
    return newTotal;
}
var resultadoNew = sumaDosretorno(dato3, dato4);
alert(resultadoNew); //355

// Regresar a PowerPoint

// Ejercicio 9
var dato5 = 100; //cambiar este valor a 10 en la segunda demostración
var dato6 = 5;
function sumaDosMayorQue(valor5, valor6) {
    var totalNuevo = valor5 + valor6;
    if (totalNuevo > 100) {
        return totalNuevo;
    } else {
        return 0;
    }
}
var nuevoResultado2 = sumaDosMayorQue(dato5, dato6);
alert(nuevoResultado2);

// Regresar a PowerPoint

// Ejercicio 10
var mifuncionAnonima = function (valor10) {
    valor10 = valor10 * 2;
    return valor10;
};
var total11 = 2;
for (var f = 0; f < 10; f++) {
    total11 = mifuncionAnonima(total11);
}
alert("El total es " + total11); // El total es 2048

// Regresar a PowerPoint

// Ejercicio 11
var nuevovalor = "Hola";  //cambiar valor a un número despues 1000 sin comillas
if (isNaN(nuevovalor)) {
    alert(nuevovalor + " No es un número");
} else {
    alert(nuevovalor + " Es un número");
}