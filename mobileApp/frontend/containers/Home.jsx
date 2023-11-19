import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, Platform, TouchableOpacity } from "react-native";
import Carousel from "../components/Carousel";

import { styles } from "../Styles/Home";

export default function Home() {
  const [carousel, setCarousel] = useState([1, 2, 3]);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Carousel data={carousel} />
      <TouchableOpacity></TouchableOpacity>
    </View>
  );
}
