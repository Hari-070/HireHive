import {
  Text,
  View,
  Image,
  StyleSheet,
  Platform,
  StatusBar,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Linking
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import ViewMoreText from "react-native-view-more-text";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../contextProvider/AuthContext";
import axios from "axios";

const WelcomeScreen = () => {

  const Navigation = useNavigation()
  const { logout,setUser } = useContext(AuthContext)
  const [data, setData] = useState([])

  function renderViewLess(onPress) {
    return (
      <Text onPress={onPress}>View Less</Text>
    )
  }
  function renderViewMore(onPress) {
    return (
      <Text onPress={onPress}>View more</Text>
    )
  }
  const handlePost = () => {
    Navigation.navigate("post")
  }
  const handlelogout = () => {
    setUser('')
    Navigation.navigate("Login")
  }
  const handleHome = () => {
    Navigation.navigate("HomeScreen")
  }


  useEffect(() => {
    const getPost = async () => {
      try {
        await axios.get("http://172.16.129.241:3000/getPost")
          .then(res => {
            setData(res.data)
          })
      } catch (error) {
        console.log(error)
        console.log(error.response.data)
      }
    }
    getPost()
  }, [])
  return (
    <View style={styles.homepage}>
      {/* header */}
      <View style={styles.header}>
        <Image
          style={{ marginLeft: 20 }}
          contentFit="cover"
          source={require("../main_assets/profile-image.png")}
        />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            contentFit="cover"
            source={require("../main_assets/search.png")}
          />
          <TextInput
            style={{ width: "55%" }}
            numberOfLines={1}
            placeholder="Type to search"
          />
        </View>
        <Image
          style={{ marginRight: 20 }}
          contentFit="cover"
          source={require("../main_assets/iconmore.png")}
        />
      </View>
      {/* main controller */}

      {/* sample mapping */}
      <View style={{ marginTop: 10, height:100}}>
        {data.map((item) => (
          <View style={styles.maincontroller}>
            <View style={styles.card}>
              <View style={styles.cardheader}>
                <Image source={require("../main_assets/profile-image.png")}></Image>
                <Text style={{ fontSize: 18 }}>{item.username}</Text>
              </View>
              <View style={styles.cardcontent}>
                <ViewMoreText
                  numberOfLines={2}
                  renderViewMore={renderViewMore}
                  renderViewLess={renderViewLess}>
                  <Text numberOfLines={2}>
                    {item.title}
                  </Text>
                </ViewMoreText>
              </View>
              <View style={styles.innnercard}>
                <Text>{item.description}</Text>
                {/* <Image source={{uri: item.shopImage}}/> */}
              </View>
              <View>
                <Image source={{uri: item.shopImage}}/>
              </View>
              <View style={styles.cardfooter}>
                <Text>Application Applied : 28</Text>
                <Text>Vacancies : {item.vacancy}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
      <View>
      {data.map((item)=>(
        <Image source={{uri: item.shopImage}} style={{width: 300, height: 300}}/>
      ))}
      </View>
      {/* <Image source={{uri:}} */}
      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footeritem} onPress={handleHome}>
          <Image
            contentFit="cover"
            source={require("../main_assets/iconhome.png")}
          />
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footeritem} onPress={handlelogout}>
          <Image
            contentFit="cover"
            source={require("../main_assets/iconsearch.png")}
          />
          <Text>Browse</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footeritem} onPress={handlePost}>
          <Image
            contentFit="cover"
            source={require("../main_assets/iconradio.png")}
          />
          <Text>Post</Text>
        </TouchableOpacity>
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
  header: {
    width: Dimensions.get("window").width,
    paddingTop: 5,
    paddingBottom: 5,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
  },
  maincontroller: {
    top: 40,
    // bottom: 40,
    height:100,
    // height: Dimensions.get("window").height - 95,
    width: Dimensions.get("window").width,
    position: "absolute",
  },
  card: {
    padding: 10,
    marginTop: 20,
    borderStyle: "solid",
    borderWidth: 1,
    width: Dimensions.get("window").width,
  },
  cardheader: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
  cardcontent: {},
  innnercard: {
    borderStyle: "solid",
    borderWidth: 1,
    height: 50,
    marginBottom: 10,
  },
  cardfooter: {
    borderStyle: "solid",
    borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footer: {
    width: Dimensions.get("window").width,
    position: "absolute",
    bottom: 0,
    marginBottom: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  footeritem: {
    display: "flex",
    alignItems: "center",
  },
});
