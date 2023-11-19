import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Icons from "react-native-vector-icons/FontAwesome";
import { styles } from "../Styles/Navbar";

export default function Navbar() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Icons name="bars" style={styles.icons} />
        <Text style={styles.text}>APP NAME</Text>
        <Icons name="search" style={styles.icons} />
      </View>
    </SafeAreaView>
  );
}
