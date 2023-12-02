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

import { styles } from "../Styles/SignUp";
import Icons from "react-native-vector-icons/FontAwesome";

import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { initializeApp, getApp, getApps } from "firebase/app";
import { firebaseConfig } from "../config/firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SignUp() {
  const navigation = useNavigation();
  const [formData, setFormData] = React.useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const onChangeText = (name, text) =>
    setFormData({ ...formData, [name]: text });

  const onSubmit = () => {
    if (formData.password === formData.confirmPassword) {
      handleCreateAccount();
    }
  };
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

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        const user = userCredential.user;
        sendEmailVerification(user)
          .then(() => {
            setFeedbackMessage(
              "Verification email sent. Please check your inbox."
            );
          })
          .catch((verificationError) => {
            console.log(verificationError);
            setFeedbackMessage(
              "Error sending verification email. Please try again."
            );
          });

        updateProfile(user, { displayName: formData.username })
          .then(() => {
            const db = getDatabase();
            const userRef = ref(db, `users/${user.uid}`);
            set(userRef, {
              username: formData.username,
              email: formData.email,
            });
          })
          .catch((updateProfileError) => {
            console.log(updateProfileError);
            Alert.alert(updateProfileError.message);
          });
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
            <Text style={styles.labelText}>Username</Text>
            <View style={styles.formGroup}>
              <Icons name="user" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Username"
                placeholderTextColor="#CCCCCC"
                name="username"
                onChangeText={(text) => onChangeText("username", text)}
              />
            </View>
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
            <Text style={styles.labelText}>Confirm Password</Text>
            <View style={styles.formGroup}>
              <Icons name="lock" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                placeholderTextColor="#CCCCCC"
                secureTextEntry={true}
                name="confirmPassword"
                onChangeText={(text) => onChangeText("confirmPassword", text)}
              />
            </View>
            <TouchableOpacity style={styles.SignUpBtn} onPress={onSubmit}>
              <Text style={styles.SignUpText}>Sign Up</Text>
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
            <Text style={styles.accountText}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.accountSignUpText}> Login</Text>
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
