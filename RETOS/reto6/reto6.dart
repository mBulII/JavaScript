import 'dart:io';

bool isPrime(int number){
  if (number <= 1){
    return false;
  }
  for (int i = 2; i <= number / 2; i++){
    if (number % i == 0){
      return false;
    }
  }
  return true;
}
bool isEven(int number){
  return number % 2 == 0;
}

void main(){
  stdout.write("Ingresa un numero entero: ");
  try{
    int number = int.parse(stdin.readLineSync()!);

    if (isPrime(number)){
      print('$number es un numero primo.');
    } else{
      print('$number no es un numero primo.');
    }

    if (isEven(number)){
      print('$number es un numero par.');
    } else{
      print('$number es un numero impar.');
    }
  } catch(e){
    print("Error: Ingresa un numero entero");
  }
}