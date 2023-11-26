import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  //main container
  container: {
    flex: 1,
  },

  //navbar
  navbarContainer: {
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    width: "100%",
    paddingHorizontal: 15,
    paddingTop: 35,
    zIndex: 1,
  },
  navbarText: {
    color: "#fff",
    fontSize: 30,
  },
  navbarFirstLetter: {
    color: "#FF4D4D",
  },
  navbarIcons: {
    color: "#FF4D4D",
    fontSize: 30,
  },

  //content
  contentContainer: {
    backgroundColor: "#2C3A4F",
    padding: 20,
    marginTop: 100,
  },
});
