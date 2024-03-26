import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#f0f4fc",
  },
  pressableContainer: {
    marginTop: 150,
  },
  pressableButton: {
    width: "85%",
    height: 50,
    backgroundColor: "#3F51B5",
    marginLeft: 30,
    borderRadius: 50,
  },
  orText: {
    textAlign: "center",
    marginTop: 15,
  },
  buttonTextForSignIn: {
    textAlign: "center",
    marginTop: -22,
    color: "#f0f4fc",
  },
  facebookLogo: {
    marginTop: 10,
    marginLeft: 40,
    width: 30,
    height: 30,
  },

  inputFieldsContainer: {
    marginTop: 10,
  },

  inputFields: {
    height: 60,
    width: "90%",
    backgroundColor: "white",
    fontSize: 20,
    padding: 7,
    marginHorizontal: "5%",
    marginTop: 10,
  },
  acknowledgement: {
    color: "grey",
    marginTop: 60,
    textAlign: "center",
    marginHorizontal: 40,
  },

  signupButton: {
    width: "90%",
    height: 50,
    backgroundColor: "#f0f4fc",
    borderColor: "grey",
    borderWidth: 1,
    marginHorizontal: 15,
    marginTop: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  confirmation: {
    color: "grey",
    marginTop: 30,
    textAlign: "center",
    marginHorizontal: 60,
  },
});

export { styles };
