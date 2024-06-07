import { useContext, useState, useEffect } from 'react';
import { Text, TextInput, Image, TouchableOpacity, View, Dimensions, ScrollView, StyleSheet } from 'react-native';
import { AuthContext } from '../contextProvider/AuthContext';
import * as ImagePicker from 'expo-image-picker';
import { Divider } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { LinkedinFilled, GithubFilled, InstagramOutlined } from '@ant-design/icons';
import Icon from 'react-native-vector-icons/AntDesign';
import axios from 'axios';
import config from "../config";

const Metro_Bundler_Url = config.Metro_Bundler_Url;

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [username, setUsername] = useState(user);
    const [img, setImg] = useState('');
    const [ban, setBan] = useState('');
    const [data, setData] = useState(null); 
    const [loading, setLoading] = useState(true); 
    const Navigation = useNavigation();

    const selectImageBanner = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1
        });
        if (!result.canceled) {
            setBan(result.assets[0].uri);
        }
    }

    const selectImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1
        });
        if (!result.canceled) {
            setImg(result.assets[0].uri);
        }
    }

    const handleBack = () => {
        Navigation.navigate("HomeScreen");
    }

    const handleEdit = () => {
        Navigation.navigate("Edit");
    }

    const profileRet = async () => {
        try {
            const res = await axios.post("http://" + Metro_Bundler_Url + ":3000/getProfile", { username });
            setData(res.data);
            setLoading(false); 
            Navigation.navigate("HomeScreen")
        } catch (error) {
            console.log(error);
            setLoading(false); 
        }
    }

    useEffect(() => {
        profileRet();
    }, []);

    if (loading) {
        return <Text>Loading...</Text>; 
    }

    return (
        <ScrollView>
            <View style={{ flex: 1, flexDirection: "column", width: Dimensions.get("window").width }}>
                <TouchableOpacity onPress={selectImageBanner}>
                    {ban ? <Image source={{ uri: ban }} style={{ width: 380, height: 200, alignSelf: "center", marginTop: 50, borderRadius: 20 }} /> : <Image source={{ uri: "https://t3.ftcdn.net/jpg/06/04/96/54/360_F_604965492_lCfxDUwNF1YiogR3SN0lbmbdvFnfDCHa.jpg" }} style={{ width: 380, height: 200, alignSelf: "center", marginTop: 50, borderRadius: 20 }} />}
                </TouchableOpacity>
                <TouchableOpacity onPress={selectImage}>
                    {img ? <Image source={{ uri: img }} style={{ height: 100, width: 100, alignSelf: "center", borderRadius: 50, top: -30 }} /> : <Image source={{ uri: "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg" }} style={{ height: 100, width: 100, alignSelf: "center", borderRadius: 50, top: -30 }} />}
                </TouchableOpacity>
                <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: '700', top: -30 }}>{user}</Text>
                {data?.fullname ? <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: '400', top: -20, color: 'gray' }}>{data.fullname}</Text> : <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: '400', top: -20, color: 'gray' }}>fullname</Text>}
                <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: '400', top: -25, color: 'gray' }}>{data?.email || 'example@gmail.com'}</Text>
                <Divider inset={true} insetType="middle" width={0.8} />
                <View style={{ margin: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: '500', marginTop: 20 }}>Description:</Text>
                    <Text style={{ fontSize: 13.5, textAlign: 'left', marginLeft: 20 }}>{data?.desc || 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur nam delectus eveniet velit porro, cum repellendus ex expedita nostrum quis! Consequatur quaerat alias doloremque nesciunt. Tempora adipisci at sunt quas.'}</Text>
                </View>
                <View style={{ margin: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: '500', marginTop: 20 }}>Position (or) Role:</Text>
                    <Text style={{ fontSize: 13.5, textAlign: 'left', marginLeft: 20 }}>{data?.role || 'Business Owner'}</Text>
                </View>
                <View style={{ width: Dimensions.get("window").width, flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <TouchableOpacity onPress={handleBack} style={{ paddingVertical: 5, paddingHorizontal: 20, backgroundColor: 'black', borderRadius: 5, marginLeft: 20 }}>
                        <Text style={{ fontSize: 15, color: 'white' }}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleEdit} style={{ paddingVertical: 5, paddingHorizontal: 20, backgroundColor: 'blue', borderRadius: 5, marginLeft: 20 }}>
                        <Text style={{ fontSize: 14, color: 'white' }}>Edit</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 50, marginBottom: 10 }}>
                    <Text style={{ fontSize: 13, textAlign: 'center', marginBottom: 8 }}>Connect With Us</Text>
                    <Divider inset={true} insetType="middle" width={0.8} />
                    <View style={{ flex: 1, justifyContent: 'space-around', flexDirection: 'row', marginTop: 10 }}>
                        <Text>LinkedIn</Text>
                        <Text>GitHub</Text>
                        <Text>Instagram</Text>
                        {/* <LinkedinFilled />
                        <GithubFilled />
                        <InstagramOutlined /> */}
                    </View>
                    <Text style={{ fontSize: 10, textAlign: 'center', marginTop: 10 }}>© HireHive 2024 All rights reserved</Text>
                </View>
            </View>
        </ScrollView>
    );
}

export default Profile;

const styles = StyleSheet.create({
  // btnText:{
  //   paddingT:
  // }
});
