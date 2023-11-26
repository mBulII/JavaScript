import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "../Styles/GameScreen";
import Icons from "react-native-vector-icons/FontAwesome";

export default function GameScreen() {
  let gameName = "God Of War";

  const { params: item } = useRoute();
  const [isFavorite, setIsFavorite] = useState(false);
  const navigation = useNavigation();
  useEffect(() => {}, [item]);

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
        <TouchableOpacity
          onPress={() => setIsFavorite(!isFavorite)}
          style={styles.iconContainer}
        >
          <Icons
            name="heart"
            style={styles.heartIcon}
            color={isFavorite ? "#FF4D4D" : "#fff"}
          />
        </TouchableOpacity>
      </SafeAreaView>
      <View>
        <Image
          source={require("../assets/images/GodOfWarInfo.jpg")}
          style={styles.backgroundImage}
        />
        <LinearGradient
          colors={["transparent", "rgba(23,23,23,0.8)", "rgba(23,23,23,1)"]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={styles.imageGradient}
        />
      </View>
      <Text style={styles.title}>{gameName}</Text>
      <View style={styles.gameContentContainer}>
        <Text style={styles.text}>Developer</Text>
        <Text style={styles.text}>Publisher</Text>
        <Text style={styles.text}>Released</Text>
        <Text style={styles.gameDescription}>
          this is the general game info hehe god
        </Text>

        <Text style={styles.subtitle}>Tags</Text>
        <View style={styles.tagsContainer}>
          <Text style={styles.text}>category 1</Text>
          <Text style={styles.text}>category 2</Text>
          <Text style={styles.text}>category 3</Text>
        </View>

        <Text style={styles.subtitle}>Reviews all time</Text>
        <Text style={styles.text}>positive</Text>

        <Text style={styles.subtitle}>Where to buy?</Text>
        <Text style={styles.text}>You can get this game on steam</Text>
        <Text style={styles.lastText}>Price</Text>
      </View>
    </ScrollView>
  );
}
