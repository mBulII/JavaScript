import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, Animated, TouchableOpacity } from "react-native";
import ThumbnailCarousel from "../components/Carousel";
import { useNavigation } from "@react-navigation/native";

import { styles } from "../Styles/Home";
import Icons from "react-native-vector-icons/FontAwesome";

export default function Home() {
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  const navbarBackgroundColor = scrollY.interpolate({
    inputRange: [0, 1000],
    outputRange: ["#2C3A4F", "#56647b"],
    extrapolate: "clamp",
  });

  const [carouselData, setCarouselData] = useState([
    { image: require("../assets/images/GodOfWar.jpg") },
    { image: require("../assets/images/GodOfWar.jpg") },
    { image: require("../assets/images/GodOfWar.jpg") },
  ]);
  const [carouselData2, setCarouselData2] = useState([
    { image: require("../assets/images/GodOfWar.jpg") },
  ]);
  const [carouselData3, setCarouselData3] = useState([
    { image: require("../assets/images/GodOfWar.jpg") },
    { image: require("../assets/images/GodOfWar.jpg") },
  ]);
  const [carouselData4, setCarouselData4] = useState([
    { image: require("../assets/images/GodOfWar.jpg") },
    { image: require("../assets/images/GodOfWar.jpg") },
  ]);
  const [carouselData5, setCarouselData5] = useState([
    { image: require("../assets/images/GodOfWar.jpg") },
    { image: require("../assets/images/GodOfWar.jpg") },
  ]);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Animated.View
        style={[
          styles.navbarContainer,
          { backgroundColor: navbarBackgroundColor },
        ]}
      >
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icons name="bars" style={styles.navbarIcons} />
        </TouchableOpacity>
        <Text style={styles.navbarText}>
          <Text style={styles.navbarFirstLetter}>F</Text>
          reak
          <Text style={styles.navbarFirstLetter}>B</Text>
          oof
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Search")}>
          <Icons name="search" style={styles.navbarIcons} />
        </TouchableOpacity>
      </Animated.View>
      <Animated.ScrollView
        style={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
      >
        <ThumbnailCarousel data={carouselData} title="My carousel" />
        <ThumbnailCarousel data={carouselData2} title="hi" />
        <ThumbnailCarousel data={carouselData3} title="hi" />
        <ThumbnailCarousel data={carouselData4} title="hi" />
        <ThumbnailCarousel data={carouselData5} title="hi" />
      </Animated.ScrollView>
    </View>
  );
}
