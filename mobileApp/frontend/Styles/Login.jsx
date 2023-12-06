import { Dimensions, StyleSheet } from "react-native";

var { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b4c2dc",
  },

  header: {
    display: "flex",
  },
  hamburgerConContainer: {
    width: 50,
    height: 50,
    paddingLeft: 15,
    paddingTop: 20,
  },
  hamburgerContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  hamburger: {
    color: "#FF4D4D",
    fontSize: 30,
  },
  logoContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  logo: {
    width: width * 0.4,
    height: height * 0.3,
  },

  body: {
    flex: 1,
    backgroundColor: "#2C3A4F",
    paddingHorizontal: 20,
    paddingTop: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  formContainer: {
    flexDirection: "column",
  },
  labelText: {
    marginLeft: 15,
    color: "#fff",
  },
  formGroup: {
    position: "relative",
  },
  input: {
    padding: 15,
    paddingLeft: 40,
    backgroundColor: "#56647b",
    color: "#fff",
    borderRadius: 20,
    marginBottom: 10,
  },
  inputIcon: {
    fontSize: 20,
    color: "#FF4D4D",
    position: "absolute",
    zIndex: 1,
    left: 10,
    top: 18,
  },
  errorText: {
    color: "#FF4D4D",
    alignSelf: "stretch",
    marginLeft: 15,
    marginBottom: 15,
  },

  forgotContainer: {
    marginTop: 20,
    marginBottom: 30,
  },
  forgotText: {
    color: "#fff",
    alignSelf: "flex-end",
  },
  loginBtn: {
    backgroundColor: "#FF4D4D",
    paddingVertical: 10,
    borderRadius: 20,
  },
  loginText: {
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },

  orText: {
    textAlign: "center",
    fontSize: 20,
    color: "#fff",
    marginVertical: 31,
  },
  otherOptions: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 80,
  },
  otherOptionsContainer: {
    padding: 10,
    backgroundColor: "#56647b",
    borderRadius: 10,
  },
  otherOptionsIcon: {
    width: 20,
    height: 20,
  },
  bottomText: {
    flexDirection: "row",
    fontWeight: "bold",
    color: "#fff",
    marginTop: 60,
    justifyContent: "center",
    height: height * 0.075,
  },
  accountText: {
    fontWeight: "bold",
    color: "#fff",
  },
  accountSignUpText: {
    fontWeight: "bold",
    color: "#FF4D4D",
  },

  feedbackContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: width * -0.5 }, { translateY: height * -0.13 }],
    backgroundColor: "#b4c2dc",
    borderRadius: 20,
    height: 250,
    width: width,
    paddingTop: 80,
  },
  feedbackText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    paddingBottom: 20,
  },
  feedBackClose: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FF4D4D",
    textAlign: "center",
  },
  feedBackSignUp: {
    fontSize: 20,
    color: "#FF4D4D",
    fontWeight: "bold",
  },
});
