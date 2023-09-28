function calculateBMI(){
    let height = prompt("Ingresa tu altura en metros para calcular tu indice de masa corporal", 0);
    let weight = prompt("Ingresa tu peso en kilogramos para calcular tu indice de masa corporal", 0);

    let BMI = weight/(height * height);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0){
        alert("Algun caracter invalido");
    } else if (height >= 3 || weight >= 600){
        alert("Ingresa una altura y un peso valido");
    } else if (BMI < 18.5){
        alert(`Su indice de masa corporal es igual a ${BMI.toFixed(2)} esta bajo peso`);
    } else if (BMI >= 18.5 && 24.9 >= BMI){
        alert(`Su indice de masa corporal es igual a ${BMI.toFixed(2)} su peso es normal`);
    } else{
        alert(`Su indice de masa corporal es igual a ${BMI.toFixed(2)} esta sobrepeso`);
    }
}
calculateBMI();