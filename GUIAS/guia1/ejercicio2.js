function countWords(){
    const sentence = prompt("Ingresa una oracion");
    const words = sentence.split(/\s+/);
    let amount = 0;
    for (const word of words){
        if (/[a-zA-Z]/.test(word)){
            amount++;
        }
    }
    alert(`La cantidad de palabras en "${sentence}" es: ${amount}`);
}
countWords();