import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#f0f4fc",
  },
  articleBackgroundImageContainer: {
    // height: "10%",
  },
  backgroundImage: {
    resizeMode: "contain", // or 'stretch' or 'contain'
    justifyContent: "center",
    alignItems: "flex-start",
    height: "70%",
  },
  articleHeading: {
    fontSize: 18,
    marginLeft: 10,
    color: "white",
  },
  articleCategory: {
    fontSize: 14,
    marginLeft: 10,
    marginTop: 10,
    color: "white",
  },

  allArticleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  ArticleTextContainer: {
    marginTop: 20,
  },
  ArticleTextHeader: {
    fontSize: 14,
    marginLeft: 10,
    marginTop: 5,
    fontWeight: "600",
  },
  ArticleText: {
    fontSize: 14,
    marginLeft: 10,
    marginTop: 20,
    color: "grey",
  },
});

export { styles };
