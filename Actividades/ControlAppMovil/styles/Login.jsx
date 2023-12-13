import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
  },

  title: {
    paddingTop: 100,
    fontSize: 50,
    color: "#fff",
    paddingBottom: 100,
    textAlign: "center",
  },

  body: {
    flex: 1,
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
    paddingBottom: 10,
  },
  formGroup: {
    position: "relative",
  },
  input: {
    padding: 15,
    paddingLeft: 40,
    color: "#fff",
    marginBottom: 50,
    borderWidth: 2,
    borderColor: "#fff",
  },
  inputIcon: {
    fontSize: 20,
    color: "#fff",
    position: "absolute",
    zIndex: 1,
    left: 10,
    top: 18,
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
    backgroundColor: "#fff",
    paddingVertical: 10,
    borderRadius: 10,
    width: 100,
    alignSelf: "center",
  },
  loginText: {
    fontWeight: "bold",
    textAlign: "center",
    color: "#000",
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
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  otherOptionsIcon: {
    width: 20,
    height: 20,
  },
});
