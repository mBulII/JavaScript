const total = document.getElementById('total');
const tip = document.getElementById('tip');
const calculate = document.getElementById('calculate');
const results = document.getElementById('results');
const tipAmountSpan = document.getElementById('tipAmount');
const totalAmountSpan = document.getElementById('totalAmount');

calculate.addEventListener('click', function(e){
    e.preventDefault();

    const totalInput = parseFloat(total.value);
    const tipPercentage = parseFloat(tip.value);

    if (isNaN(totalInput) || totalInput < 0){
        alert("Ingresar un monto valido");
        return;
    }
    const tipAmount = (totalInput * tipPercentage)/100;
    const totalAmount = totalInput + tipAmount;
    tipAmountSpan.textContent = `$${tipAmount.toFixed(2)}`;
    totalAmountSpan.textContent = `$${totalAmount.toFixed(2)}`;

    results.style.display = 'block';
});