import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import Loading from "../components/Loading";
import { fetchGame } from "../api/database";

import { styles } from "../Styles/GameScreen";
import Icons from "react-native-vector-icons/FontAwesome";

export default function GameScreen() {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const { params: item } = useRoute();

  useEffect(() => {
    setLoading(true);
    loadGame(item.id);
  }, [item]);
  const loadGame = async (id) => {
    const data = await fetchGame(id);
    if (data) setGame(data);
    setLoading(false);
  };
  const [game, setGame] = useState({
    developers: [],
    publishers: [],
    description: "",
    genres: [],
    parent_platforms: [],
  });

  const score = parseInt(game.metacritic);
  let getMetacriticText;
  if (score >= 90 && score <= 100) {
    getMetacriticText = "Universal acclaim";
  } else if (score >= 75 && score <= 89) {
    getMetacriticText = "Generally favorable";
  } else if (score >= 50 && score <= 74) {
    getMetacriticText = "Mixed or average";
  } else if (score >= 20 && score <= 49) {
    getMetacriticText = "Generally unfavorable";
  } else if (score >= 0 && score <= 19) {
    getMetacriticText = "Overwhelming dislike";
  } else {
    getMetacriticText = "No Metacritic score available";
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar style="light" />
      <SafeAreaView style={styles.navbarContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.iconContainer}
        >
          <Icons name="arrow-circle-o-left" style={styles.backIcon} />
        </TouchableOpacity>
      </SafeAreaView>
      {loading ? (
        <View style={styles.loadingContainer}>
          <Loading />
        </View>
      ) : (
        <View>
          <View>
            <Image
              source={{ uri: game.background_image_additional }}
              style={styles.backgroundImage}
            />
            <LinearGradient
              colors={["transparent", "rgba(23,23,23,0.8)", "rgba(23,23,23,1)"]}
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 1 }}
              style={styles.imageGradient}
            />
          </View>
          <Text style={styles.title}>{game.name}</Text>
          <View style={styles.gameContentContainer}>
            <Text style={[styles.subtitle, { marginTop: 10 }]}>Developers</Text>
            <View style={styles.gameInfoContainer}>
              <FlatList
                horizontal
                data={game.developers}
                keyExtractor={(item, index) => index.toString()}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                  <React.Fragment>
                    <Text style={styles.text}>{item.name}</Text>
                    {index < game.developers.length - 1 && (
                      <Text style={styles.text}> | </Text>
                    )}
                  </React.Fragment>
                )}
              />
            </View>
            <Text style={styles.subtitle}>Publishers</Text>
            <View style={styles.gameInfoContainer}>
              <FlatList
                horizontal
                data={game.publishers}
                keyExtractor={(item, index) => index.toString()}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                  <React.Fragment>
                    <Text style={styles.text}>{item.name}</Text>
                    {index < game.publishers.length - 1 && (
                      <Text style={styles.text}> | </Text>
                    )}
                  </React.Fragment>
                )}
              />
            </View>
            <Text style={styles.subtitle}>Release Date</Text>
            <View style={styles.gameInfoContainer}>
              <Text style={styles.text}>{game.released}</Text>
            </View>
            <Text style={styles.subtitle}>Description</Text>
            <View style={styles.gameInfoContainer}>
              <Text style={[styles.text, { textAlign: "justify" }]}>
                {game.description
                  .replace(/<\/?p>/g, "")
                  .replace(/<br \/>/g, "")
                  .replace(/- /g, "")
                  .replace(/&#39;/g, "")}
              </Text>
            </View>
            <Text style={styles.subtitle}>Genres</Text>
            <View style={styles.gameInfoContainer}>
              <FlatList
                horizontal
                data={game.genres}
                keyExtractor={(item, index) => index.toString()}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                  <React.Fragment>
                    <Text style={styles.text}>{item.name}</Text>
                    {index < game.genres.length - 1 && (
                      <Text style={styles.text}> | </Text>
                    )}
                  </React.Fragment>
                )}
              />
            </View>
            <Text style={styles.subtitle}>Reviews (Metacritic)</Text>
            <View style={styles.gameInfoContainer}>
              <Text style={styles.text}>
                {game.metacritic} {getMetacriticText}
              </Text>
            </View>
            <Text style={styles.subtitle}>Platforms</Text>
            <View style={styles.gameInfoContainer}>
              <FlatList
                horizontal
                data={game.parent_platforms}
                keyExtractor={(item, index) => index.toString()}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                  <React.Fragment>
                    <Text style={styles.text}>{item.platform.name}</Text>
                    {index < game.parent_platforms.length - 1 && (
                      <Text style={styles.text}> | </Text>
                    )}
                  </React.Fragment>
                )}
              />
            </View>
          </View>
        </View>
      )}
    </ScrollView>
  );
}
