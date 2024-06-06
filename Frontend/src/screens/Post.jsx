import { View, StyleSheet, Text, TextInput, Button, TouchableOpacity, Alert, Dimensions } from "react-native"
//import { Image } from "react-native-paper/lib/typescript/components/List/List"
import { Image } from "react-native"
import SafeAreaView from "react-native-safe-area-view"
import { Color, FontSize } from "../../GlobalStyles"
import { useContext, useState } from "react"
import { AuthContext } from "../contextProvider/AuthContext"
import axios from "axios"
import { useNavigation } from "@react-navigation/native"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Post = () => {
  const [title, setTitle] = useState('');
  const [description, setDesc] = useState('');
  const [vacancy, setVac] = useState();
  const [shopImage, setImg] = useState('')
  const [username, setUser] = useState('')
  const { user, logout } = useContext(AuthContext)
  const Navigation = useNavigation()

  const handlePost = async () => {
    setUser("kkkkhhhh")
    setImg("https://4.imimg.com/data4/KO/CR/MY-16526586/textile-showroom-interiors-500x500.jpg")
    try {
      await axios.post("http://172.17.21.207:3000/post", {
        username, title, description, vacancy, shopImage
      }).then(res => {
        Navigation.navigate("HomeScreen")
        Alert.alert(res.data)
        setTitle(''); setDesc(''); setVac();
      })
    } catch (error) {
      console.log(error)
      Alert.alert(error.response.data)
    }
  }

  const handlePost1 = () => {
    Navigation.navigate("post")
  }
  const handlelogout = () => {
    logout()
    Navigation.navigate("Login")
  }
  const handleHome = () => {
    Navigation.navigate("HomeScreen")
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={true}
      >
        <View style={{ flex: 1, flexDirection: "column", position: "relative" }}>
          <View style={styles.imgSpace}>
            <Image source={{ uri: 'https://as2.ftcdn.net/v2/jpg/02/23/33/13/1000_F_223331378_a41F98V1YVvvyD4kzn1gKvlxhr0l9X9Z.jpg' }}
              style={{ width: 400, height: 400 }} />
          </View>
          <View style={styles.formContainer}>
            <Text style={styles.jobTitle}>
              Post Your Job Title Here
            </Text>
            <Text style={styles.sideHead}>Title:</Text>
            <TextInput
              style={styles.input}
              placeholder="Job Title..."
              value={title}
              onChange={(e) => { setTitle(e.nativeEvent.text) }}
            />
            <Text>Description:</Text>
            <TextInput
              style={styles.input}
              placeholder="Job Description"
              value={description}
              onChange={(e) => { setDesc(e.nativeEvent.text) }}
            />
            <Text>Vacancy Available:</Text>
            <TextInput
              style={styles.input}
              placeholder="Number of Vacancies"
              value={vacancy}
              keyboardType="numeric"
              onChange={(e) => { setVac(e.nativeEvent.text) }}
            />
            <TouchableOpacity style={styles.postbtn} onPress={handlePost}>
              <Text style={styles.postbtnText}>Post</Text>
            </TouchableOpacity>
          </View>
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
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imgSpace: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    padding: 20,
  },
  jobTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  sideHead: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    padding: 10,
  },
  postbtn: {
    backgroundColor: 'blue',
    padding: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  postbtnText: {
    color: 'white',
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: 'gray',
  },
  footeritem: {
    alignItems: 'center',
  },
});


export default Post