import { Dimensions, StyleSheet } from "react-native";

var { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  //navbar container back icon
  navbarContainer: {
    flex: 1,
    backgroundColor: "#2C3A4F",
  },
  backIconContainer: {
    width: 60,
    paddingLeft: 15,
    paddingTop: 20,
  },
  backIcon: {
    color: "#FF4D4D",
    fontSize: 30,
  },

  //search container and search bar
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 15,
    borderWidth: 1,
    borderColor: "#b4c2dc",
    borderRadius: 20,
  },
  searchBar: {
    paddingLeft: 20,
    paddingBottom: 5,
    flex: 1,
    fontSize: 20,
    color: "#fff",
    letterSpacing: 1,
    height: 50,
  },
  iconContainer: {
    padding: 10,
    margin: 5,
    backgroundColor: "#b4c2dc",
    borderRadius: 20,
  },
  icon: {
    color: "#FF4D4D",
    fontSize: 20,
  },

  //results container and thumbnails
  resultsContainer: {
    paddingHorizontal: 15,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  thumbnail: {
    width: width * 0.44,
    height: height * 0.3,
    borderRadius: 15,
  },
  thumbnailContainer: {
    marginBottom: 60,
  },
  defaultContainer: {
    alignItems: "center",
    marginTop: 100,
  },
  defaultThumbnail: {
    width: width * 0.7,
    height: height * 0.5,
  },
});
