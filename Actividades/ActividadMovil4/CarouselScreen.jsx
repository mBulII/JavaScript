import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Image, TouchableOpacity } from "react-native";
import Carousel from "react-native-snap-carousel";

import { styles } from "./styles/CarouselScreen";

const data = [
  { image: require("./assets/images/1.jpg") },
  { image: require("./assets/images/2.jpeg") },
  { image: require("./assets/images/3.jpg") },
  { image: require("./assets/images/4.jpg") },
];

const renderItem = ({ item }) => (
  <View style={styles.card}>
    <TouchableOpacity>
      <Image source={item.image} style={styles.image} />
    </TouchableOpacity>
  </View>
);

export default function CarouselScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Carrusel</Text>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={400}
        itemWidth={260}
        layout="default"
      />
    </View>
  );
}
