import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, Animated, TouchableOpacity } from "react-native";
import ThumbnailCarousel from "../components/Carousel";
import { useNavigation } from "@react-navigation/native";
import Loading from "../components/Loading";
import {
  fetchTopGame,
  fetchMostAnticipated,
  fetchActionGames,
  fetchIndieGames,
  fetchMmoGames,
  fetchRpgGames,
} from "../api/database";

import { styles } from "../Styles/Home";
import Icons from "react-native-vector-icons/FontAwesome";

export default function Home() {
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  const navbarBackgroundColor = scrollY.interpolate({
    inputRange: [0, 1000],
    outputRange: ["#2C3A4F", "#56647b"],
    extrapolate: "clamp",
  });

  const [topGamesCarousel, setTopGamesCarousel] = useState([]);
  const [mostAnticipatedCarousel, setMostAnticipatedCarousel] = useState([]);
  const [actionCarousel, setActionCarousel] = useState([]);
  const [indieCarousel, setIndieCarousel] = useState([]);
  const [mmoCarousel, setMmoCarousel] = useState([]);
  const [rpgCarousel, setRpgCarousel] = useState([]);

  const getGames = async () => {
    const topGamesData = await fetchTopGame();
    if (topGamesData && topGamesData.results) {
      const topGamesCarouselData = topGamesData.results.map((results) => ({
        id: results.id,
        name: results.name,
        image: { uri: results.background_image },
      }));
      setTopGamesCarousel(topGamesCarouselData);
      setLoading(false);
    }
    const mostAnticipatedData = await fetchMostAnticipated();
    if (mostAnticipatedData && mostAnticipatedData.results) {
      const mostAnticipatedCarouselData = mostAnticipatedData.results.map(
        (results) => ({
          id: results.id,
          name: results.name,
          image: { uri: results.background_image },
        })
      );
      setMostAnticipatedCarousel(mostAnticipatedCarouselData);
    }
    const actionData = await fetchActionGames();
    if (actionData && actionData.results) {
      const actionCarouselData = actionData.results.map((results) => ({
        id: results.id,
        name: results.name,
        image: { uri: results.background_image },
      }));
      setActionCarousel(actionCarouselData);
    }
    const indieData = await fetchIndieGames();
    if (indieData && indieData.results) {
      const indieCarouselData = indieData.results.map((results) => ({
        id: results.id,
        name: results.name,
        image: { uri: results.background_image },
      }));
      setIndieCarousel(indieCarouselData);
    }
    const mmoData = await fetchMmoGames();
    if (mmoData && mmoData.results) {
      const mmoCarouselData = mmoData.results.map((results) => ({
        id: results.id,
        name: results.name,
        image: { uri: results.background_image },
      }));
      setMmoCarousel(mmoCarouselData);
    }
    const rpgData = await fetchRpgGames();
    if (rpgData && rpgData.results) {
      const rpgCarouselData = rpgData.results.map((results) => ({
        id: results.id,
        name: results.name,
        image: { uri: results.background_image },
      }));
      setRpgCarousel(rpgCarouselData);
    }
  };
  React.useEffect(() => {
    getGames();
  });

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

      {loading ? (
        <Loading />
      ) : (
        <Animated.ScrollView
          style={styles.contentContainer}
          showsVerticalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true }
          )}
        >
          {topGamesCarousel.length > 0 && (
            <ThumbnailCarousel
              data={topGamesCarousel}
              title="Top Rated Current Year"
              limit={5}
            />
          )}
          {mostAnticipatedCarousel.length > 0 && (
            <ThumbnailCarousel
              data={mostAnticipatedCarousel}
              title="Most Anticipated Games"
              limit={5}
            />
          )}
          {actionCarousel.length > 0 && (
            <ThumbnailCarousel data={actionCarousel} title="Action" limit={5} />
          )}
          {indieCarousel.length > 0 && (
            <ThumbnailCarousel data={indieCarousel} title="Indie" limit={5} />
          )}
          {mmoCarousel.length > 0 && (
            <ThumbnailCarousel data={mmoCarousel} title="MMO" limit={5} />
          )}
          {rpgCarousel.length > 0 && (
            <ThumbnailCarousel data={rpgCarousel} title="RPG" limit={5} />
          )}
        </Animated.ScrollView>
      )}
    </View>
  );
}
