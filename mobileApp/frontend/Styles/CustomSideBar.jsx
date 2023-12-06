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

  userContainer: {
    flexDirection: "column",
    paddingHorizontal: 10,
  },
  userIcon: {
    fontSize: 50,
    color: "#FF4D4D",
    paddingLeft: 10,
  },
  usernameText: {
    fontSize: 40,
    marginBottom: 50,
    paddingLeft: 10,
  },
  homeContainer: {
    marginBottom: height * 0.45,
    backgroundColor: "#56647b",
    flexDirection: "row",
    height: 45,
    borderRadius: 5,
  },
  homeIcon: {
    fontSize: 22,
    width: 30,
    color: "#FF4D4D",
    paddingTop: 11,
    paddingLeft: 10,
  },
  homeText: {
    fontSize: 16,
    color: "#FF4D4D",
    paddingTop: 13,
    paddingLeft: 33,
  },
  logoutContainer: {
    flexDirection: "row",
    paddingLeft: 130,
  },
  logoutIcon: {
    fontSize: 40,
    color: "#FF4D4D",
    paddingLeft: 10,
  },
  logoutText: {
    fontSize: 25,
    paddingTop: 5,
    fontWeight: "bold",
  },
});
