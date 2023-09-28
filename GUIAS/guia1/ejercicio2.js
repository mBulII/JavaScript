function countWords(){
    const sentence = prompt("Ingresa una oracion");
    const words = sentence.split(/\s+/);
    const amount = words.length;
    alert(`La cantidad de palabras en "${sentence}" es: ${amount}`);
}
countWords();