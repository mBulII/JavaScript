import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "../styles/Home";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.text}>Hola</Text>

      <TouchableOpacity
        style={styles.backContainer}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.back}>Atras</Text>
      </TouchableOpacity>
    </View>
  );
}
