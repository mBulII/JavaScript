const name = document.getElementById('name');
const weight = document.getElementById('weight');
const height = document.getElementById('height');
const age = document.getElementById('age');
const gender = document.getElementById('gender');
const pActivity = document.getElementById('physicalActivity');
const calculate = document.getElementById('calculate');

const results = document.getElementById('results');
const patientName = document.getElementById('patientName');
const bmiResult = document.getElementById('bmiResult');
const classification = document.getElementById('classification');
const energy = document.getElementById('energy');
const nutritionalState = document.getElementById('nutritionalState');

gender.selectedIndex = -1;
pActivity.selectedIndex = -1;


calculate.addEventListener('click', function(e){
    e.preventDefault();
    if (name.value === ""){
        alert("Ingresa tu nombre");
        return;
    } else{
        patientName.textContent = name.value;
    }

    const numberWeight = parseFloat(weight.value);
    const numberHeight = parseFloat(height.value);
    const ageValidation = parseInt(age.value);
    const genderValidation = parseInt(gender.value);
    const physicalActivityValue = parseFloat(pActivity.value);

    if (isNaN(numberWeight) || numberWeight < 0 || isNaN(numberHeight) || numberHeight < 0){
        alert("Ingresar un peso y una altura valida");
        return;
    } else if (isNaN(ageValidation) || ageValidation < 0){
        alert("Ingresa tu edad");
        return;
    } else if (isNaN(genderValidation)){
        alert("Ingresa tu genero");
        return;
    } else if (isNaN(physicalActivityValue)){
        alert("Ingresa tu actividad fisica");
        return;
    }

    const BMI = numberWeight / (numberHeight * numberHeight);
    bmiResult.textContent = BMI.toFixed(2);

    let classificationText = "";
    if (BMI < 18.5){
        classificationText = "Bajo peso";
    } else if (BMI < 24.9){
        classificationText = "Peso normal";
    } else if (BMI < 29.9){
        classificationText = "Sobrepeso";
    } else{
        classificationText = "Obesidad";
    }
    classification.textContent = classificationText;

    const dailyEnergyExpenditure = physicalActivityValue * numberWeight;
    energy.textContent = dailyEnergyExpenditure.toFixed(2);

    let nutritionalStateText = "";
    if (BMI < 16){
        nutritionalStateText = "Necesita atencion especializada";
    } else if (BMI < 16.9){
        nutritionalStateText = "Necesita atencion especializada";
    } else if (BMI < 18.4){
        nutritionalStateText = "Estado nutricional adecuado";
    } else if (BMI < 24.9){
        nutritionalStateText = "Estado nutricional adecuado";
    } else if (BMI < 29.9){
        nutritionalStateText = "Necesita atencion especializada";
    } else{
        nutritionalStateText = "Necesita atencion especializada";
    }
    nutritionalState.textContent = nutritionalStateText;

    results.style.display = 'block';
});