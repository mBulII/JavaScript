import React from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { useNavigation } from "@react-navigation/native";

import { styles } from "../Styles/Carousel";

var { width } = Dimensions.get("window");
export default function ThumbnailCarousel({ data, title }) {
  const navigation = useNavigation();

  const handleClick = (item) => {
    navigation.navigate("GameScreen", item);
  };

  return (
    <View style={styles.container}>
      <CarouselTitle title={title} />
      <Carousel
        data={data}
        renderItem={({ item }) => (
          <Thumbnail item={item} handleClick={handleClick} />
        )}
        firstItem={0}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.5}
      />
    </View>
  );
}

const Thumbnail = ({ item, handleClick }) => {
  return (
    <TouchableWithoutFeedback onPress={() => handleClick(item)}>
      <Image source={item.image} style={styles.thumbnail} />
    </TouchableWithoutFeedback>
  );
};

const CarouselTitle = ({ title }) => <Text style={styles.text}>{title}</Text>;
