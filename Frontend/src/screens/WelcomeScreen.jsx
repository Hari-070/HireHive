import {
  Text,
  View,
  Image,
  StyleSheet,
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";
import React from "react";

const WelcomeScreen = () => {
  return (
    <View style={styles.homepage}>
      <View style={styles.tabs}>
        <View style={styles.tabitem}>
          <Image
            contentFit="cover"
            source={require("../main_assets/iconhome.png")}
          />
          <Text>Home</Text>
        </View>
        <View style={styles.tabitem}>
          <Image
            contentFit="cover"
            source={require("../main_assets/iconhome.png")}
          />
          <Text>Home</Text>
        </View>
        <View style={styles.tabitem}>
          <Image
            contentFit="cover"
            source={require("../main_assets/iconhome.png")}
          />
          <Text>Home</Text>
        </View>
        <View style={styles.tabitem}>
          <Image
            contentFit="cover"
            source={require("../main_assets/iconhome.png")}
          />
          <Text>Home</Text>
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  homepage: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    height: Dimensions.get("window").height,

    position: "relative",
  },
  tabs: {
    width: Dimensions.get("window").width,
    position: "absolute",
    bottom: 0,
    marginBottom: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",

    alignItems: "center",
  },
  tabitem: {
    display: "flex",
    alignItems: "center",
  },
});
