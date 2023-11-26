import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Keyboard,
  ScrollView,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "../Styles/Search";
import Icons from "react-native-vector-icons/FontAwesome";

export default function Search() {
  const navigation = useNavigation();

  const [isFocused, setIsFocused] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleOutside = () => {
    setIsFocused(false);
    Keyboard.dismiss();
  };
  const handleClear = () => {
    setSearchText("");
  };

  const [results, setResults] = useState([]);

  return (
    <TouchableWithoutFeedback onPress={handleOutside}>
      <SafeAreaView style={styles.navbarContainer}>
        <StatusBar style="light" />
        <View style={styles.backIconContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icons name="arrow-circle-o-left" style={styles.backIcon} />
          </TouchableOpacity>
        </View>
        <View style={[styles.searchContainer]}>
          <TextInput
            placeholder="Search for a game"
            placeholderTextColor={"#b4c2dc"}
            style={styles.searchBar}
            onFocus={handleFocus}
            onChangeText={(text) => setSearchText(text)}
            value={searchText}
          />
          {isFocused && (
            <TouchableOpacity
              onPress={handleClear}
              style={styles.iconContainer}
            >
              <Icons name="times" style={styles.icon} />
            </TouchableOpacity>
          )}
        </View>
        {results.length > 0 ? (
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.resultsContainer}>
              {results.map((item, index) => {
                return (
                  <TouchableWithoutFeedback
                    key={index}
                    onPress={() => navigation.push("GameScreen", item)}
                  >
                    <View style={styles.thumbnailContainer}>
                      <Image
                        style={styles.thumbnail}
                        source={require("../assets/images/GodOfWarInfo.jpg")}
                      />
                    </View>
                  </TouchableWithoutFeedback>
                );
              })}
            </View>
          </ScrollView>
        ) : (
          <View style={styles.defaultContainer}>
            <Image
              source={require("../assets/images/defaultThumbnail.png")}
              style={styles.defaultThumbnail}
            />
          </View>
        )}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
