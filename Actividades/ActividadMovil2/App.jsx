import { StatusBar } from "expo-status-bar";
import { Image, View, Text, TouchableOpacity } from "react-native";

import { styles } from "./styleApp";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Sedes Universidad de los lagos</Text>
      <TouchableOpacity style={styles.imageContainer}>
        <Image
          source={require("./images/osorno.jpg")}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.text}>Sede Osorno</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.imageContainer}>
        <Image
          source={require("./images/puerto.jpg")}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.text}>Sede Puerto Montt</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.imageContainer}>
        <Image
          source={require("./images/chiloe.jpg")}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.text}>Sede Chiloe</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Btn}>
        <Text style={styles.text}>Mas informacion</Text>
      </TouchableOpacity>
    </View>
  );
}
