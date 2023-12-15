import { Dimensions, StyleSheet } from "react-native";

var { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 30,
  },
  gameContainer: {
    alignItems: "center",
  },
  text: {
    color: "#FF4D4D",
    fontSize: 30,
    marginBottom: -10,
  },
  thumbnail: {
    width: width * 0.88,
    height: height * 0.35,
    borderRadius: 20,
  },
  game: {
    paddingTop: 10,
    fontSize: 25,
    color: "#fff",
    textAlign: "center",
  },
});
