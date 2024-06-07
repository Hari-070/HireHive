import * as React from "react";
import { useState,useContext } from "react";
// import hirehive from 'D:/PDT HIREHIVE/Frontend/assets/hirehive.png';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Alert
} from "react-native";
import { Image } from "expo-image";
import { Color, Padding, Border, FontSize } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import SafeAreaView from "react-native-safe-area-view";
import axios from "axios";
import { AuthContext } from "../contextProvider/AuthContext";
import config from "../config";

const Metro_Bundler_Url = config.Metro_Bundler_Url;

const Login = () => {
  const Navigation = useNavigation();
  const [username,setMail]=useState('')
  const [password,setPassword]=useState('');
  const [truee,isTruee]=useState(true);
  const {login,logout,user} = useContext(AuthContext)
  

  const handleSignin=async()=> {
   Navigation.navigate("SignIn")
    
  }

  const handleLogin=async()=>{
        try {
          console.log(username,password);
          console.log("http://"+Metro_Bundler_Url+":3000/login");
            const res =await axios.post("http://"+Metro_Bundler_Url+":3000/login",{username,password})
                console.log(res['status'])
                if(res.status == 201) Alert.alert("Fill All the fields")
                else if(res.status == 202) Alert.alert("User Doesnt Exist")
                else if(res.status == 203) Alert.alert("Password is incorrect")
                else Navigation.navigate("HomeScreen")
    
           
        } catch (error) {
          isTruee(false)
            console.log("in Login error")
            console.log(error)            
        }
  }
  return (
    <SafeAreaView
      style={{ flex: 1 }}
      forceInset={{ top: "always", bottom: "always" }}
    >
      <View style={{ flex: 1 }}>
        <View style={styles.signIn}>
          <Text style={[styles.hirehive]}>HireHive</Text>
          
          {/* <View style={[styles.homeIndicator, styles.homePosition]}>
          <View style={[styles.homeIndicator1, styles.homePosition]} />
        </View> */}
          <View style={styles.content}>
            <View style={styles.copy}>
              <Text style={[styles.createAnAccount, styles.hirehiveFlexBox]}>
                Login
              </Text>
              <Text style={[styles.enterYourEmail, styles.enterYourEmailTypo]}>
                Enter your email and Password 
              </Text>
            </View>
            <View style={[styles.inputAndButton, styles.dividerLayout1]}>
              <View style={(truee)?[styles.field, styles.fieldBorder]:[styles.field, styles.fieldBorder1]}>
                <TextInput
                  style={styles.label}
                  numberOfLines={1}
                  placeholder="email@gmail.com"
                  value={username}
                  // onChangeText={(text)=>{setMail(text)}}
                  onChange={(e)=>{setMail(e.nativeEvent.text)}}
                />
              </View>
              <View style={(truee)?[styles.inputField, styles.buttonSpaceBlock]:[styles.inputField1, styles.buttonSpaceBlock]}>
                <TextInput
                  style={styles.label}
                  numberOfLines={1}
                  placeholder="Password"
                  value={password}
                  // onChangeText={(text)=>{setPassword(text)}}
                  onChange={(e)=>{setPassword(e.nativeEvent.text)}}
                  secureTextEntry
                />
              </View>
              
              <View style={[styles.button, styles.buttonFlexBox]}>
                <Button
                  title="Login"
                  color={Color.colorBlack}
                  onPress={handleLogin}
                />
              </View>
              <View style={[styles.button, styles.buttonFlexBox]}>
                <Button
                  title=" Click Here to Sign up "
                  color={Color.colorBlack}
                  onPress={handleSignin}
                />
              </View>
            </View>
            <View style={[styles.divider, styles.buttonFlexBox]}>
              <View style={styles.dividerLayout} />
              <Text style={styles.orContinueWith}>or continue with</Text>
              <View style={[styles.divider2, styles.dividerLayout]} />
            </View>
            <View style={styles.button1}>
              <View style={styles.label2}>
                <Image
                  style={styles.googleIcon}
                  contentFit="cover"
                  source={require("../main_assets/google.png")}
                />
                <Text style={[styles.google, styles.googleTypo]}>Google</Text>
              </View>
            </View>
            <Text
              style={[
                styles.byClickingContinueContainer,
                styles.enterYourEmailTypo,
              ]}
            >
              <Text
                style={styles.byClickingContinue}
              >{`By clicking continue, you agree to our `}</Text>
              <Text style={styles.termsOfService}>Terms of Service</Text>
              <Text style={styles.byClickingContinue}>{` and `}</Text>
              <Text style={styles.termsOfService}>Privacy Policy</Text>
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  hirehiveFlexBox: {
    textAlign: "center",
    color: Color.colorBlack,
  },
  enterYourEmailTypo: {
    textAlign: "center",
  },
  dividerLayout1: {
    width: 327,
    marginTop: 24,
  },
  fieldBorder: {
    paddingVertical: Padding.p_5xs,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.colorWhite,
  },
  fieldBorder1: {
    paddingVertical: Padding.p_5xs,
    borderWidth: 1,
    borderColor: 'red',
    borderStyle: "solid",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.colorWhite,
  },
  buttonSpaceBlock: {
    marginTop: 16,
    paddingHorizontal: Padding.p_base,
    height: 40,
    borderRadius: Border.br_5xs,
  },
  buttonFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  googleTypo: {
    fontWeight: "500",
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.size_sm,
  },
  dividerLayout: {
    height: 1,
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
  },
  homeIndicator1: {
    marginLeft: -66.5,
    bottom: 8,
    borderRadius: 100,
    width: 134,
    height: 5,
    backgroundColor: Color.colorBlack,
  },

  createAnAccount: {
    fontSize: 18,
    fontWeight: "600",
  },
  enterYourEmail: {
    lineHeight: 21,
    marginTop: 2,
    fontSize: FontSize.size_sm,

    color: Color.colorBlack,
  },
  copy: {
    alignItems: "center",
  },
  label: {
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 40,
    
    fontSize: FontSize.size_sm,
    overflow: "hidden",
    flex: 1,
  },
  field: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    height: 40,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    alignSelf: "stretch",
  },
  inputField: {
    paddingVertical: Padding.p_5xs,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.colorWhite,
    marginTop: 16,
    width: 327,
  },
  inputField1: {
    paddingVertical: Padding.p_5xs,
    borderWidth: 1,
    borderColor: "red",
    borderStyle: "solid",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.colorWhite,
    marginTop: 16,
    width: 327,
  },
  primary: {
    color: Color.colorWhite,
  },
  button: {
    marginTop: 16,
    paddingHorizontal: Padding.p_base,
    height: 40,
    borderRadius: Border.br_5xs,
    alignSelf: "stretch",
    paddingVertical: 0,
    backgroundColor: Color.colorBlack,
  },

  inputAndButton: {
    marginTop: 24,
  },
  orContinueWith: {
    marginLeft: 8,
    color: Color.colorGray,
    lineHeight: 20,

    fontSize: FontSize.size_sm,
    textAlign: "center",
  },
  divider2: {
    marginLeft: 8,
  },
  divider: {
    marginTop: 24,
    width: 327,
  },
  googleIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  google: {
    marginLeft: 8,
    color: Color.colorBlack,
  },
  label2: {
    marginTop: -10,
    marginLeft: -37.5,
    flexDirection: "row",
    alignItems: "center",
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  button1: {
    backgroundColor: "#eee",
    height: 40,
    borderRadius: Border.br_5xs,
    marginTop: 24,
    width: 327,
  },
  byClickingContinue: {
    color: Color.colorGray,
  },
  termsOfService: {
    color: Color.colorBlack,
  },
  byClickingContinueContainer: {
    fontSize: 12,
    lineHeight: 18,
    alignSelf: "stretch",
    marginTop: 24,
  },
  content: {
    marginTop: -250,
    height: 503,
    paddingHorizontal: 24,
    paddingVertical: 0,
    alignItems: "center",
    top: "50%",
    position: "relative",
  },
  hirehive: {
    textAlign: "center",
    top: 55,
    fontSize: 24,
    letterSpacing: -0.2,
    lineHeight: 36,

    justifyContent: "center",
  },
  signIn: {
    width: "100%",
    height: 812,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  Color: {
    colorWhite: "#fff",
    colorBlack: "#000",
    colorGray: "#828282",
    colorGainsboro_100: "#e6e6e6",
    colorGainsboro_200: "#e0e0e0",
  },
});

export default Login;
