const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";


import SignIn from "../screens/SignIn";
import HomeScreen from "../screens/HomeScreen";

 
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Post from "../screens/Post";
import Profile from "../screens/Profile";
import EditProfile from "../screens/EditProfile";


const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
          <Stack.Screen name="post" component={Post} options={{headerShown:false}}/>
          <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}}/>
          <Stack.Screen name="Edit" component={EditProfile} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
export default App;
