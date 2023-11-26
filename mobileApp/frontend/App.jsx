import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./containers/Home";
import CustomSideBar from "./components/CustomSideBar";
import GameScreen from "./containers/GameScreen";
import Search from "./containers/Search";

import Icons from "react-native-vector-icons/FontAwesome";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const SideBar = () => {
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
};

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SideBar" component={SideBar} />
        <Stack.Screen name="GameScreen" component={GameScreen} />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
