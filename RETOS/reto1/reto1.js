let numero = prompt("Ingresa un numero entero");

if (isNaN(numero) || numero < 0){
    alert("caracter invalido, ingresa un entero positivo");
} else if (numero % 2 == 0){
    alert(`el numero ${numero} es par`);
} else{
    alert(`el numero ${numero} es impar`);
}