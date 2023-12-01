import { StatusBar } from "expo-status-bar";
import { Text, View, Image } from "react-native";
import Carousel from "react-native-snap-carousel"; // PAQUETE PARA EL CARRUSEL

import { styles } from "./appStyles";

const data = [
  {
    pokemon: "Bulbasaur",
    type: "Grass/Poison",
    number: "001",
    image: require("./assets/images/001.png"),
  },
  {
    pokemon: "Ivysaur",
    type: "Grass/Poison",
    number: "002",
    image: require("./assets/images/002.png"),
  },
  {
    pokemon: "Venusaur",
    type: "Grass/Poison",
    number: "003",
    image: require("./assets/images/003.png"),
  },
  {
    pokemon: "Charmander",
    type: "Fire",
    number: "004",
    image: require("./assets/images/004.png"),
  },
  {
    pokemon: "Charmeleon",
    type: "Fire",
    number: "005",
    image: require("./assets/images/005.png"),
  },
  {
    pokemon: "Charizard",
    type: "Fire/Flying",
    number: "006",
    image: require("./assets/images/006.png"),
  },
  {
    pokemon: "Squirtle",
    type: "Water",
    number: "007",
    image: require("./assets/images/007.png"),
  },
  {
    pokemon: "Wartortle",
    type: "Water",
    number: "008",
    image: require("./assets/images/008.png"),
  },
  {
    pokemon: "Blastoise",
    type: "Water",
    number: "009",
    image: require("./assets/images/009.png"),
  },
];
const getTypeColor = (type) => {
  switch (type) {
    case "Water":
      return "blue";
    case "Grass/Poison":
      return "green";
    case "Fire":
      return "orange";
    case "Fire/Flying":
      return "orange";
    default:
      return "gray";
  }
};

const renderItem = ({ item }) => (
  <View style={styles.card}>
    <Image source={item.image} style={styles.image} />
    <Text style={styles.pokemon}>{item.pokemon}</Text>
    <View
      style={[
        styles.typeContainer,
        { backgroundColor: getTypeColor(item.type) },
      ]}
    >
      <Text style={styles.type}>{item.type}</Text>
    </View>
    <Text style={styles.number}>#{item.number}</Text>
  </View>
);

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Pokedex</Text>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={400}
        itemWidth={260}
        layout="default"
      />
    </View>
  );
}
