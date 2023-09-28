let number = prompt("Ingresa un numero entero");

if (isNaN(number) || number < 0){
    alert("caracter invalido, ingresa un entero positivo");
} else if (number % 2 == 0){
    alert(`el numero ${number} es par`);
} else{
    alert(`el numero ${number} es impar`);
}