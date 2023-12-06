import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { styles } from "./styles/Profile";

export default function Profile() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Perfil</Text>
      <Image
        source={require("./assets/images/user.jpg")}
        style={styles.image}
      />
      <TouchableOpacity style={styles.Btn}>
        <Text style={styles.text}>Editar perfil</Text>
      </TouchableOpacity>
    </View>
  );
}
