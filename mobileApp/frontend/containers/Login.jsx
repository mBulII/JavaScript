import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import { styles } from "../Styles/Login";
import Icons from "react-native-vector-icons/FontAwesome";

export default function Login() {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <SafeAreaView style={styles.header}>
          <View style={styles.hamburgerConContainer}>
            <TouchableOpacity
              onPress={() => navigation.openDrawer()}
              style={styles.hamburgerContainer}
            >
              <Icons name="bars" style={styles.hamburger} />
            </TouchableOpacity>
          </View>
          <View style={styles.logoContainer}>
            <Image
              source={require("../assets/freakboofLogo.png")}
              style={styles.logo}
            />
          </View>
        </SafeAreaView>
        <View style={styles.body}>
          <View style={styles.formContainer}>
            <Text style={styles.labelText}>Email</Text>
            <View style={styles.formGroup}>
              <Icons name="envelope" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#CCCCCC"
              />
            </View>
            <Text style={styles.labelText}>Password</Text>
            <View style={styles.formGroup}>
              <Icons name="key" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#CCCCCC"
                secureTextEntry={true}
              />
            </View>
            <TouchableOpacity style={styles.forgotContainer}>
              <Text style={styles.forgotText}>Forgot your password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.orText}>Or</Text>
          <View style={styles.otherOptions}>
            <TouchableOpacity style={styles.otherOptionsContainer}>
              <Image
                source={require("../assets/images/social/google.png")}
                style={styles.otherOptionsIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.otherOptionsContainer}>
              <Image
                source={require("../assets/images/social/facebook.png")}
                style={styles.otherOptionsIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.otherOptionsContainer}>
              <Image
                source={require("../assets/images/social/apple.png")}
                style={styles.otherOptionsIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.bottomText}>
            <Text style={styles.accountText}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text style={styles.accountSignUpText}> Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}
