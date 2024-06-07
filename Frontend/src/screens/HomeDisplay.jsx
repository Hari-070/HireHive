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
  import { Divider } from '@rneui/themed'
  
  const Metro_Bundler_Url = config.Metro_Bundler_Url;
  
  
  const HomeDisplay = () => {
    const Navigation = useNavigation()
    const { logout,setUser } = useContext(AuthContext)
    const [data, setData] = useState([])
  
  
    
  
    useEffect(() => {
      const getPost = async () => {
        try {
          console.log("http://"+Metro_Bundler_Url+":3000/getPost");
          await axios.get("http://"+Metro_Bundler_Url+":3000/getPost").then((res) => {
            console.log(res.data);
            setData(res.data);
          });
        } catch (error) {
          console.log(error);
          console.log(error.response.data);
        }
      };
      getPost();
    }, []);
    return (
      <ScrollView style={styles.homepage}>
        {data.map((item)=>(
            <View>
            <Divider width={2}/>
            <View style={{borderColor:'black',padding:10,borderBottomWidth:2,borderBottomColor:'gray'}}>
                
                <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                    <Image source={{uri:"https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"}} style={{width:50,height:50,borderRadius:25}}/>
                    <Text style={{fontSize:20,fontWeight:'600'}}>{item.username}</Text>
                    </View>

                    <View style={{marginRight:20}}>
                        <Text style={{fontWeight:'900',top:12}}>.</Text>
                        <Text style={{fontWeight:'900'}}>.</Text>
                        <Text style={{fontWeight:'900',top:-12}}>.</Text>
                    </View>
                </View>
                    <Text style={{fontWeight:'700'}}>Job Role: {item.title}</Text>
                    <Text>{item.description}</Text>
                <Image source={{uri:item.shopImage}} style={{width:380,height:250,alignSelf:'center'}}/>
                <Text>Available Vacancies: {item.vacancy}</Text>
            </View>
            </View>
        ))}
      </ScrollView>
    ); 
  };
  
  export default HomeDisplay;
  
  const styles = StyleSheet.create({
    homepage: {
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      height: Dimensions.get("window").height,
      position: "relative",
    //   marginBottom:100
    },
   
  });
  