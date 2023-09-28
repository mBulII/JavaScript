function validPassword(){
    alert("Antes de crear su contraseña recuerde seguir los siguiendo los siguientes criterios: \nA. Al menos 8 caracteres de longitud. \nB. Al menos una letra mayúscula. \nC. Al menos un número. \nD. Al menos un carácter especial, como: !@#$%^&()+{}[]:;<>,.?~- ");

    const password = prompt("Ingresar contraseña");
    const upperCase = /[A-Z]/;
    const number = /\d/;
    const specialC = /[!@#$%^&*()_+{}[\]:;<>,.?~\-]/;

    if (upperCase.test(password) && number.test(password) && specialC.test(password) && password.length >= 8){
        alert("La contraseña es valida");
    } else{
        alert("La contraseña es invalida");
    }
}
validPassword();