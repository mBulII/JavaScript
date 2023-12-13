import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "../styles/Login";
import Icons from "react-native-vector-icons/FontAwesome";

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\s*$/i;
  const handleLogin = () => {
    if (!email || !password) {
      alert("Ingresar email y contraseña");
      return;
    } else if (!validEmail.test(email)) {
      alert("Ingresar un email valido");
      return;
    } else if (password.length < 8) {
      alert("La contraseña debe contener al menos 8 caracteres");
    } else {
      navigation.navigate("Home");
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <StatusBar style="light" />
        <View style={styles.body}>
          <Text style={styles.title}>Login</Text>
          <View style={styles.formContainer}>
            <Text style={styles.labelText}>Email</Text>
            <View style={styles.formGroup}>
              <Icons name="envelope" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#ccc"
                onChangeText={(text) => setEmail(text)}
              />
            </View>
            <Text style={styles.labelText}>Password</Text>
            <View style={styles.formGroup}>
              <Icons name="key" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Contraseña"
                placeholderTextColor="#ccc"
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
              />
            </View>

            <TouchableOpacity style={styles.forgotContainer}>
              <Text style={styles.forgotText}>¿Olvidaste tu contraseña?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.orText}>Tambien puedes usar</Text>
          <View style={styles.otherOptions}>
            <TouchableOpacity style={styles.otherOptionsContainer}>
              <Image
                source={require("../assets/google.png")}
                style={styles.otherOptionsIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.otherOptionsContainer}>
              <Image
                source={require("../assets/facebook.png")}
                style={styles.otherOptionsIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.otherOptionsContainer}>
              <Image
                source={require("../assets/apple.png")}
                style={styles.otherOptionsIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
