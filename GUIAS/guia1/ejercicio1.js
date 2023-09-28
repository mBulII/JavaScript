function evenNumbers(){
    const input = prompt("Ingresa un entero positivo");
    const number = parseInt(input);

    if (isNaN(number) || number <= 0 || !Number.isInteger(number)){
        alert("Ingresa un entero positivo");
    } else{                                                            
        let result = 0;
        for (let i = 1; i <= number; i++){
            if (i % 2 === 0){
                result += i;
            }
        }
        alert(`La suma de los numeros pares entre 1 y ${number} es: ${result}`);
    }
}
evenNumbers();