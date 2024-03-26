import { View, Text, Image, TextInput, Pressable } from "react-native";
import React from "react";
import { styles } from "./signup.style";

export default function Signup() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.pressableContainer}>
        <Pressable style={styles.pressableButton}>
          <Image
            source={require("../../assets/Images/facebook/facebook-30.png")}
            style={styles.facebookLogo}
          />
          <Text style={styles.buttonTextForSignIn}>Sign up with Facebook</Text>
        </Pressable>
      </View>
      <Text style={styles.orText}>or with email</Text>
      <View style={styles.inputFieldsContainer}>
        <TextInput placeholder="Email*" style={styles.inputFields} />
        <TextInput placeholder="Choose password*" style={styles.inputFields} />
        <TextInput placeholder="Choose Username*" style={styles.inputFields} />
        <TextInput placeholder="Date of birth*" style={styles.inputFields} />
        <TextInput placeholder="Gender*" style={styles.inputFields} />
      </View>
      <Text style={styles.acknowledgement}>
        By proceeding you also agree to the Terms of Services and Privacy Policy
      </Text>

      <Pressable style={styles.signupButton}>
        <Text>Sign up</Text>
      </Pressable>

      <Text style={styles.confirmation}>Already have an account? Sign in.</Text>
    </View>
  );
}

{
  /* #70748c */
}
{
  /* #f0f4fc */
}
