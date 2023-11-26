import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import { styles } from "../Styles/CustomSideBar";
// sign-out

export default function CustomSideBar({ ...props }) {
  return (
    <DrawerContentScrollView {...props} style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/freakboofLogo.png")}
          style={styles.logo}
        />
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
