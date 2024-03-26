import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#f0f4fc",
  },
  appName: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 150,
  },
  newspaperIcon: {
    marginHorizontal: "40%",
    marginTop: 10,
  },

  inputFieldsContainer: {
    marginTop: 70,
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

  pressableContainer: {
    width: "100%",
    marginTop: 100,
  },
  pressableButton: {
    width: "85%",
    height: 50,
    backgroundColor: "#3F51B5",
    marginLeft: 30,
    borderRadius: 50,
  },
  buttonText: {
    textAlign: "center",
    marginTop: 15,
    color: "#f0f4fc",
  },

  orText: {
    textAlign: "center",
    marginTop: 15,
    marginBottom: 15,
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
  acknowledgement: {
    color: "grey",
    marginTop: 10,
    textAlign: "center",
  },
});

export { styles };
