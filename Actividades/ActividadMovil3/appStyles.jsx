import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 30,
    marginBottom: 100,
  },

  card: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    padding: 20,
    backgroundColor: "#CCC",
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  pokemon: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  typeContainer: {
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  type: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  number: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
