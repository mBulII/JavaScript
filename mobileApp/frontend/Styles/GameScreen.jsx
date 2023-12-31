import { Dimensions, StyleSheet } from "react-native";

var { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  //main container
  container: {
    flex: 1,
    backgroundColor: "#2C3A4F",
    paddingBottom: 20,
  },

  //navbar with image
  navbarContainer: {
    width: "100%",
  },
  navbarContainer: {
    position: "absolute",
    width: "100%",
    zIndex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  iconContainer: {
    padding: 1,
  },
  backIcon: {
    color: "#FF4D4D",
    fontSize: 50,
  },
  backgroundImage: {
    width: width,
    height: height * 0.55,
  },
  imageGradient: {
    width: width,
    height: height * 0.4,
    position: "absolute",
    bottom: 0,
  },

  //page content container and text
  title: {
    color: "#b4c2dc",
    textAlign: "center",
    fontSize: 50,
    fontWeight: "bold",
    letterSpacing: 2,
    marginTop: -(height * 0.13),
    marginBottom: 50,
  },
  gameContentContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    marginHorizontal: 15,
  },
  subtitle: {
    color: "#FF4D4D",
    fontSize: 30,
    fontWeight: "bold",
    letterSpacing: 2,
    marginBottom: 10,
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },

  gameInfoContainer: {
    flexDirection: "row",
    marginBottom: 42,
  },

  loadingContainer: {
    paddingTop: 350,
  },
});
