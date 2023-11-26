import React from "react";
import { View, Image } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../containers/Home";

import { styles } from "../Styles/CustomSideBar";
import Icons from "react-native-vector-icons/FontAwesome";

function CustomSideBar({ ...props }) {
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

const Drawer = createDrawerNavigator();
export default function SideBar() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomSideBar {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: "#56647b",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#2C3A4F",
        drawerLabelStyle: {
          fontSize: 16,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({ color }) => (
            <Icons name="home" size={22} color={color} style={{ width: 25 }} />
          ),
        }}
      />
      <Drawer.Screen
        name="Login"
        component={Home}
        options={{
          drawerIcon: ({ color }) => (
            <Icons
              name="sign-in"
              size={22}
              color={color}
              style={{ width: 25 }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Sign Up"
        component={Home}
        options={{
          drawerIcon: ({ color }) => (
            <Icons
              name="user-plus"
              size={22}
              color={color}
              style={{ width: 25 }}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
