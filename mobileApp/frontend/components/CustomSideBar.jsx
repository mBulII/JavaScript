import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Home from "../containers/Home";
import Login from "../containers/Login";
import SignUp from "../containers/SignUp";

import { styles } from "../Styles/CustomSideBar";
import Icons from "react-native-vector-icons/FontAwesome";

function CustomSideBar({ onLogout, ...props }) {
  const navigation = useNavigation();
  const [user, setUser] = React.useState(null);
  const fetchUser = async () => {
    try {
      const userStr = await AsyncStorage.getItem("user");
      if (userStr) {
        const userObj = JSON.parse(userStr);
        setUser(userObj);
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };
  React.useEffect(() => {
    fetchUser();
  }, []);
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("user");
      setUser(null);
      navigation.navigate("Home");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <DrawerContentScrollView {...props} style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/freakboofLogo.png")}
          style={styles.logo}
        />
      </View>
      {user ? (
        <View style={styles.userContainer}>
          <Icons name="user" style={styles.userIcon} />
          <Text style={styles.usernameText}>Enjoy, {user.displayName}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={styles.homeContainer}
          >
            <Icons name="home" style={styles.homeIcon} />
            <Text style={styles.homeText}>Home</Text>
          </TouchableOpacity>
          <View style={styles.logoutContainer}>
            <Text style={styles.logoutText}>Logout</Text>
            <TouchableOpacity onPress={handleLogout}>
              <Icons name="sign-out" style={styles.logoutIcon} />
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <DrawerItemList {...props} />
      )}
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();
export default function SideBar({ user, handleLogout }) {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <CustomSideBar user={user} onLogout={handleLogout} {...props} />
      )}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: "#56647b",
        drawerActiveTintColor: "#FF4D4D",
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
        component={Login}
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
        name="Register"
        component={SignUp}
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
