import { Dimensions, StyleSheet } from "react-native";

var { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b4c2dc",
  },
  logoContainer: {
    padding: 20,
  },
  logo: {
    width: width * 0.3,
    height: height * 0.2,
  },
  sideBarItem: {
    fontSize: 18,
    marginBottom: 10,
  },
});
