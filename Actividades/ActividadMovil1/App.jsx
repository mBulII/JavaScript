import React, { useState } from "react";
import { StatusBar, Text, View, TouchableOpacity } from "react-native";

import { styles } from "./Styles/App";

export default function App() {
  // SE DEFINE EL USE STATE COMO VACIO PARA QUE CUANDO SE APRETE EL BOTON SE VEA EL TEXTO
  const [displayText, setDisplayText] = useState("");

  //FUNCION handle QUE MOSTRARA EL TEXTO CUANDO SE APRETA EL BOTON
  const handleButtonPress = () => {
    const newText = displayText === "Hola mundo" ? "" : "Hola mundo";
    setDisplayText(newText);
    console.log(newText);
  };

  //CONTENIDO DE LA PAGINA
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ejemplo react native</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleButtonPress} style={styles.button}>
          <Text style={styles.buttonText}>Presiona el boton</Text>
        </TouchableOpacity>
        <Text>{displayText}</Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}
