let edad = 29;
let sueldo = 1200000;
const PI = 3.14;

const bigInt = 23985752098304982307402938429075n;
console.log(bigInt);
const x = 1000000;
const n_grande = 1e6;


let V = true;
let F = false;

if (V){
    console.log("verdadero");
} else{
    console.log("falso");
}

let user ={
    name: "Juan",
    age: 29,
    city: "New York",
    Email: "hola@gmail.com"
};
console.log(user);
delete user.Email;
console.log(user);
user.phone = "+56 9 12345678";
console.log(user);

console.log(typeof edad);
edad = String(edad)
console.log(typeof edad);
edad = Number(edad)
console.log(typeof edad);