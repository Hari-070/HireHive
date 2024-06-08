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
  Linking,
  ScrollView,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import ViewMoreText from "react-native-view-more-text";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../contextProvider/AuthContext";
import axios from "axios";
import config from "../config";

const Metro_Bundler_Url = config.Metro_Bundler_Url;

const WelcomeScreen = () => {
  const Navigation = useNavigation();
  const { logout, setUser } = useContext(AuthContext);
  const [data, setData] = useState([]);

  function renderViewLess(onPress) {
    return <Text onPress={onPress}>View Less</Text>;
  }
  function renderViewMore(onPress) {
    return <Text onPress={onPress}>View more</Text>;
  }
  const handlePost = () => {
    Navigation.navigate("post");
  };
  const handlelogout = () => {
    setUser("");
    Navigation.navigate("Login");
  };

  const handleProfile = () => {
    console.log("In onhandle profile");
    Navigation.navigate("Profile");
  };

  const handleHome = () => {
    Navigation.navigate("HomeScreen");
  };

  useEffect(() => {
    try {
      console.log("In useeffect of home screen")
      axios.get("http://" + Metro_Bundler_Url + ":3000/getPost")
      .then((res) => {
        setData(res.data);
        console.log(res.data)
      });
    } catch (error) {
      console.log(error);
      console.log(error.response.data);
    }
  },[]);

  const handleApply = (id) => {
    // console.log(id);
    axios.post("http://" + Metro_Bundler_Url + ":3000/applied",{id})
    // .then(res=>{
    //   console.log(res)
    // })
  };
  return (
    <View style={styles.homepage}>
      {/* header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleProfile}>
          <Image
            style={{ marginLeft: 30, width: 20, height: 50 }}
            contentFit="cover"
            source={{
              uri: "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg",
            }}
          />
        </TouchableOpacity>
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

      <TouchableOpacity onPress={handleProfile}>
        <Image
          style={{ marginLeft: 30, width: 20, height: 50 }}
          contentFit="cover"
          source={{
            uri: "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg",
          }}
        />
      </TouchableOpacity>
      <View
        style={{ position: "relative", width: Dimensions.get("window").width }}
      >
        {/* <HomeDisplay/> */}
      </View>
      <ScrollView>
        <View
          style={{
            marginBottom: 80,
            position: "relative",
            width: Dimensions.get("window").width,
          }}
        >
          {data.map((item) => {
            return (
              <>
                <View key={item.id} style={styles.maincontroller}>
                  <View style={styles.card}>
                    <View style={styles.cardheader}>
                      <Image
                        source={require("../main_assets/profile-image.png")}
                        style={{ width: 40, height: 40 }}
                      ></Image>
                      <Text style={{ fontSize: 25 }}>{item.username}</Text>
                    </View>
                    <View style={styles.cardcontent}>
                      <ViewMoreText
                        numberOfLines={2}
                        renderViewMore={renderViewMore}
                        renderViewLess={renderViewLess}
                      >
                        <Text style={{ fontSize: 20 }} numberOfLines={2}>
                          {item.description}
                        </Text>
                      </ViewMoreText>
                    </View>
                    <View style={styles.innnercard}>
                      <Image
                        source={{ uri: item.shopImage }}
                        style={{ width: "350px", height: 300 }}
                      ></Image>
                    </View>
                    <View style={styles.cardfooter}>
                      <Text style={{ fontSize: 18 }}>
                        Application Applied : {item.applied}
                      </Text>
                      <Text style={{ fontSize: 18 }}>
                        Vacancies : {item.vacancy}
                      </Text>
                    </View>
                  </View>
                </View>
                <TouchableOpacity
                  style={styles.directbtn}
                  onPress={() => handleApply(item._id)}
                >
                  <Text style={{ fontSize: 20 }}>Apply</Text>
                </TouchableOpacity>
              </>
            );
          })}
        </View>
      </ScrollView>
      {/* main controller */}
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
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    top: 40,
    bottom: 40,
    // height: Dimensions.get("window").height - 95,
    width: Dimensions.get("window").width,
  },
  card: {
    padding: 10,
    // borderStyle: "solid",
    // borderWidth: 1,
    width: Dimensions.get("window").width,
    height: 450,
  },
  cardheader: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
  innnercard: {
    borderStyle: "solid",
    borderWidth: 1,
    height: 300,
    marginBottom: 10,
  },
  cardfooter: {
    borderStyle: "solid",
    borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  directbtn: {
    marginTop: 10,
    alignItems: "center",
  },
  footer: {
    padding: 5,
    backgroundColor: "white",
    width: Dimensions.get("window").width,
    position: "absolute",
    bottom: 0,
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
