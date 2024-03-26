import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  ImageBackground,
} from "react-native";
import React from "react";
import { styles } from "./feed.style";

export default function Feed() {
  return (
    <View style={styles.mainContainer}>
      <View>
        <ImageBackground
          source={require("../../assets/Images/dummy.png")}
          style={styles.backgroundImage}
        >
          <Text style={styles.articleHeading}>Hero Article header title</Text>
          <Text style={styles.articleCategory}>Category</Text>
        </ImageBackground>
      </View>
      <View style={styles.allArticleContainer}>
        <View style={styles.ArticleTextContainer}>
          <Text style={styles.ArticleTextHeader}>Secondary article</Text>
          <Text style={styles.ArticleTextHeader}>article header</Text>
          <Text style={styles.ArticleTextHeader}>line three</Text>
          <Text style={styles.ArticleText}>Category</Text>
        </View>
        <Image source={require("../../assets/Images/dummy.png")} />
      </View>

      <View style={styles.allArticleContainer}>
        <View style={styles.ArticleTextContainer}>
          <Text style={styles.ArticleTextHeader}>Secondary article</Text>
          <Text style={styles.ArticleTextHeader}>article header</Text>
          <Text style={styles.ArticleTextHeader}>line three</Text>
          <Text style={styles.ArticleText}>Category</Text>
        </View>
        <Image source={require("../../assets/Images/dummy.png")} />
      </View>

      <View style={styles.allArticleContainer}>
        <View style={styles.ArticleTextContainer}>
          <Text style={styles.ArticleTextHeader}>Secondary article</Text>
          <Text style={styles.ArticleTextHeader}>article header</Text>
          <Text style={styles.ArticleTextHeader}>line three</Text>
          <Text style={styles.ArticleText}>Category</Text>
        </View>
        <Image source={require("../../assets/Images/dummy.png")} />
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
