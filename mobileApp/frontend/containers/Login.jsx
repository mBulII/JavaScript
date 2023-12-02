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
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import { styles } from "../Styles/Login";
import Icons from "react-native-vector-icons/FontAwesome";

import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp, getApp, getApps } from "firebase/app";
import { firebaseConfig } from "../config/firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login() {
  const navigation = useNavigation();
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  const onChangeText = (name, text) =>
    setFormData({ ...formData, [name]: text });

  const [feedbackMessage, setFeedbackMessage] = React.useState("");
  const onTouch = () => {
    setFeedbackMessage("");
  };

  let app, auth;
  if (!getApps().length) {
    try {
      app = initializeApp(firebaseConfig);
      auth = initializeAuth(app, {
        persistence: getReactNativePersistence(AsyncStorage),
      });
    } catch (error) {
      console.log("Error initializing app: " + error);
      setFeedbackMessage("Error, try again later.");
    }
  } else {
    app = getApp();
    auth = getAuth(app);
  }
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user.emailVerified) {
          navigation.navigate("Home");
        } else {
          setFeedbackMessage("Email not verified. Please check your inbox.");
        }
      })
      .catch((error) => {
        console.log(error);
        Alert.alert(error.message);
      });
  };

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
                name="email"
                onChangeText={(text) => onChangeText("email", text)}
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
                name="password"
                onChangeText={(text) => onChangeText("password", text)}
              />
            </View>
            <TouchableOpacity style={styles.forgotContainer}>
              <Text style={styles.forgotText}>Forgot your password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
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
        {feedbackMessage ? (
          <View style={styles.feedbackContainer}>
            <Text style={styles.feedbackText}>{feedbackMessage}</Text>
            <TouchableOpacity onPress={onTouch}>
              <Text style={styles.feedBackClose}>Close</Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}
