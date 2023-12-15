import React, { useCallback, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Keyboard,
  ScrollView,
  Image,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Loading from "../components/Loading";
import { fetchSearch } from "../api/database";

import { styles } from "../Styles/Search";
import Icons from "react-native-vector-icons/FontAwesome";

export default function Search() {
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState([]);

  const handleOutside = () => {
    setIsFocused(false);
    Keyboard.dismiss();
  };
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleSearch = (value) => {
    setSearchText(value);
    if (value) {
      setLoading(true);
      fetchSearch(value).then((data) => {
        setLoading(false);
        if (data && data.results) setResults(data.results);
      });
    } else {
      setLoading(false);
      setResults([]);
    }
  };

  const handleClear = () => {
    setSearchText("");
    setResults([]);
  };

  return (
    <TouchableWithoutFeedback onPress={handleOutside}>
      <SafeAreaView style={styles.navbarContainer}>
        <StatusBar style="light" />
        <View style={styles.backIconContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icons name="arrow-circle-o-left" style={styles.backIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search for a game"
            placeholderTextColor={"#b4c2dc"}
            style={styles.searchBar}
            onFocus={handleFocus}
            onChangeText={handleSearch}
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
        {loading ? (
          <Loading />
        ) : results.length > 0 ? (
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
                        source={{ uri: item.background_image }}
                      />
                      <Text style={styles.text}>
                        {item.name.length > 20
                          ? item.name.slice(0, 20) + "..."
                          : item.name}
                      </Text>
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
