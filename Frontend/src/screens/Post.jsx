import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
  Dimensions,
} from "react-native";
//import { Image } from "react-native-paper/lib/typescript/components/List/List"
import { Image } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { Color, FontSize } from "../../GlobalStyles";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contextProvider/AuthContext";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";

import config from "../config";
import { ScrollView } from "react-native";

const Metro_Bundler_Url = config.Metro_Bundler_Url;

const Post = () => {
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const [vacancy, setVac] = useState();
  const [shopImage, setImg] = useState("");
  const { user, logout, setUser } = useContext(AuthContext);
  const [username, setUsern] = useState(user);
  const [location, setLocation] = useState();
  const [address, setAddress] = useState([]);
  const Navigation = useNavigation();

  // const handlePost=()=>{

  //   console.log(username,title,description,vacancy,shopImage);
  //   // handlePost2();
  // }

  const handlePost = async () => {
    // setImg("https://4.imimg.com/data4/KO/CR/MY-16526586/textile-showroom-interiors-500x500.jpg")
    try {
      await axios
        .post("http://" + Metro_Bundler_Url + ":3000/post", {
          username,
          title,
          description,
          vacancy,
          shopImage,
        })
        .then((res) => {
          Navigation.navigate("HomeScreen");
          Alert.alert(res.data);
          setTitle("");
          setDesc("");
          setVac();
        });
    } catch (error) {
      console.log(error);
      Alert.alert(error.response.data);
    }
  };

  const handlePost1 = () => {
    Navigation.navigate("post");
  };
  const handlelogout = () => {
    setUser("");
    Navigation.navigate("Login");
  };
  const handleHome = () => {
    Navigation.navigate("HomeScreen");
  };
  const selectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.canceled) {
      setImg(result.assets[0].uri);
    }
  };
  useEffect(() => {
    const getPermission = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("please grant location access!");
        //return;
      }
      let currentLocation = await Location.getCurrentPositionAsync();
      setLocation(currentLocation);
      console.log("Location: ");
      console.log(location);
    };
    getPermission();
  }, []);

  const rvsGeocode = async () => {
    const rvsAddress = await Location.reverseGeocodeAsync({
      longitude: location.coords.longitude,
      latitude: location.coords.latitude,
    });
    console.log("the reverse location:");
    //console.log(rvsAddress)
    setAddress(rvsAddress);
    console.log(address);
  };

  return (
    <View style={{position:"relative"}}>
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={true}
        
      >
        <TouchableOpacity style={styles.imgSpace} onPress={selectImage}>
          {shopImage ? (
            <Image
              source={{ uri: shopImage }}
              style={{
                width: 350,
                height: 300,
                marginTop: 50,
                borderRadius: 10,
              }}
            />
          ) : (
            <Image
              source={{
                uri: "https://as2.ftcdn.net/v2/jpg/02/23/33/13/1000_F_223331378_a41F98V1YVvvyD4kzn1gKvlxhr0l9X9Z.jpg",
              }}
              style={{
                width: 350,
                height: 300,
                marginTop: 50,
                borderRadius: 10,
              }}
            />
          )}
        </TouchableOpacity>
        <ScrollView >
          <View style={styles.formContainer}>
            <Text style={styles.jobTitle}>Post Your Job Details Here:</Text>
            <Text style={styles.sideHead}>Title:</Text>
            <TextInput
              style={styles.input}
              placeholder="Job Title..."
              value={title}
              onChange={(e) => {
                setTitle(e.nativeEvent.text);
              }}
            />
            <Text style={styles.sideHead}>Description:</Text>
            <TextInput
              style={styles.input}
              placeholder="Job Description"
              value={description}
              onChange={(e) => {
                setDesc(e.nativeEvent.text);
              }}
            />
            <Text style={styles.sideHead}>Vacancy Available:</Text>
            <TextInput
              style={styles.input}
              placeholder="Number of Vacancies"
              value={vacancy}
              keyboardType="numeric"
              onChange={(e) => {
                setVac(e.nativeEvent.text);
              }}
            />
            <Text style={styles.sideHead}>Location:</Text>

            <TextInput
              style={styles.input}
              placeholder="Shop Location"
              value={address}
              onChange={(e) => {
                setLocation(e.nativeEvent.text);
              }}
            />
            <TouchableOpacity
              style={{ padding: 5, backgroundColor: "black", marginTop: 10 }}
              onPress={rvsGeocode}
            >
              <Text style={{ color: "white", padding: 10 }}>
                Get Current Location
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.postbtn} onPress={handlePost}>
              <Text style={styles.postbtnText}>Post</Text>
            </TouchableOpacity>
          </View>
        </ScrollView >
        </KeyboardAwareScrollView>
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
          <TouchableOpacity style={styles.footeritem} onPress={handlePost1}>
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

const styles = StyleSheet.create({
  imgSpace: {
    alignItems: "center",
    justifyContent: "center",
  },
  formContainer: {
    padding: 20,
    marginTop: 20,
    marginBottom:45
  },
  jobTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  sideHead: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 10,
    padding: 10,
  },
  input1: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 10,
    padding: 10,
    width: 10,
  },
  postbtn: {
    backgroundColor: "blue",
    padding: 15,
    marginTop: 20,
    alignItems: "center",
  },
  postbtnText: {
    color: "white",
    fontSize: 16,
  },
  footer: {
    padding:5,
    backgroundColor:"white",
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

export default Post;
