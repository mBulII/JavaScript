import { Dimensions, StyleSheet } from "react-native";

var { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 75,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    marginBottom: 25,
  },
  thumbnail: {
    width: width * 0.4,
    height: height * 0.3,
    borderRadius: 10,
  },
});
