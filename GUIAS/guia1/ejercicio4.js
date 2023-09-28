function largestNumber(){
    const insert = prompt("Ingresa numeros separados por comas");
    const insertedNumbers = insert.split(",");
    const numbers = [];

    for (const number of insertedNumbers){
        const num = parseFloat(number);
        if (!isNaN(num)){
            numbers.push(num);
        }
    }

    if (numbers.length === 0){
        alert("No se ingresaron numeros");
    } else{
        let largestNumber = numbers[0];
        for (let i = 1; i < numbers.length; i++){
            if (numbers[i] > largestNumber){
                largestNumber = numbers[i];
            }
        }
        alert(`El numero mayor es ${largestNumber}`);
    }
}
largestNumber();