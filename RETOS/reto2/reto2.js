let nota1 = prompt("Calcula tu promedio, ingresa tu nota 1", 0);
let nota2 = prompt("ingresa tu nota 2", 0);
let nota3 = prompt("ingresa tu nota final", 0);

let notaFinal = (nota1 * 0.4) + (nota2 * 0.3) + (nota3 * 0.3);

if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || nota1 > 0 || nota2 > 0 || nota3 > 0){
    alert("caracter invalido, ingresa numeros positivos");
} else if (notaFinal < 3.95){
    alert(`tu promedio es igual a ${notaFinal} reprobaste`);
} else if (notaFinal >= 3.95 && notaFinal < 4.94){
    alert(`tu promedio es igual a ${notaFinal} necesitas dar examen`);
} else{
    alert(`tu promedio es igual a ${notaFinal} aprobaste`);
}