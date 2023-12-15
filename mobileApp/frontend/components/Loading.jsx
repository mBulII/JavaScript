import React from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import * as Progress from "react-native-progress";

import { styles } from "../Styles/Loading";

export default function Loading() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Progress.CircleSnail thickness={12} size={160} color={"#FF4D4D"} />
    </View>
  );
}
