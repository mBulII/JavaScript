import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CarouselScreen from "./CarouselScreen";
import Profile from "./Profile";
import Icons from "react-native-vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#fff",
            height: 50,
          },
          tabBarItemStyle: {
            backgroundColor: "#ccc",
            margin: 5,
            borderRadius: 10,
          },
          tabBarActiveTintColor: "#fff",
          tabBarInactiveTintColor: "#000",
        }}
      >
        <Tab.Screen
          name="Carrusel"
          component={CarouselScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Icons name="home" size={22} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Perfil"
          component={Profile}
          options={{
            tabBarIcon: ({ color }) => (
              <Icons name="user" size={22} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
