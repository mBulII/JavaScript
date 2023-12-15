import React from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { useNavigation } from "@react-navigation/native";

import { styles } from "../Styles/Carousel";

var { width, height } = Dimensions.get("window");
export default function ThumbnailCarousel({ data, title, limit }) {
  const navigation = useNavigation();

  const handleClick = (item) => {
    navigation.navigate("GameScreen", item);
  };

  const limitedData = data.slice(0, limit);
  return (
    <View style={styles.container}>
      <CarouselTitle title={title} />
      <Carousel
        data={limitedData}
        renderItem={({ item }) => (
          <Thumbnail item={item} handleClick={handleClick} />
        )}
        width={width * 0.9}
        height={height * 0.4}
        loop
        mode="parallax"
      />
    </View>
  );
}

const Thumbnail = ({ item, handleClick }) => {
  return (
    <View style={styles.gameContainer}>
      <TouchableWithoutFeedback onPress={() => handleClick(item)}>
        <Image source={item.image} style={styles.thumbnail} />
      </TouchableWithoutFeedback>
      <Text style={styles.game}>{item.name}</Text>
    </View>
  );
};

const CarouselTitle = ({ title }) => <Text style={styles.text}>{title}</Text>;
