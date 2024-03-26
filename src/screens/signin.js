import { View, Text, Image, TextInput, Pressable } from "react-native";
import React from "react";
import { styles } from "./signin.style";

export default function Signin() {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.appName}>News Reader App</Text>
      <Image
        source={require("../../assets/Images/newspaper.png")}
        style={styles.newspaperIcon}
      />

      <View style={styles.inputFieldsContainer}>
        <TextInput placeholder="Email*" style={styles.inputFields} />
        <TextInput placeholder="Password*" style={styles.inputFields} />
      </View>

      <View style={styles.pressableContainer}>
        <Pressable style={styles.pressableButton}>
          <Text style={styles.buttonText}>Sign in</Text>
        </Pressable>

        <Text style={styles.orText}>OR</Text>

        <Pressable style={styles.pressableButton}>
          <Image
            source={require("../../assets/Images/facebook/facebook-30.png")}
            style={styles.facebookLogo}
          />
          <Text style={styles.buttonTextForSignIn}>Sign in with Facebook</Text>
        </Pressable>
        <Text style={styles.acknowledgement}>
          By proceeding you also agree to the Terms of Services and Privacy
          Policy
        </Text>
      </View>
    </View>
  );
}

{
  /* #70748c */
}
{
  /* #f0f4fc */
}
