import React from "react";
import { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Logo from '../../assets/images/AppleLogo.png'
import CustomInput from "../components/custominputs/CustomInput";

const SignInScreen = () =>{
    const [username, setUsername] = useState('')
    const [password, setpassword] = useState('')


    return(
        <View style={styles.root}>
            <Image source={Logo} style={StyleSheet.logo} resizeMode="contain"></Image>
            <CustomInput placeholder="Username" value={username} setValue={setUsername}/>
            <CustomInput placeholder="Password" value={password} setValue={setpassword} secureTextEntry={true}/>
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        padding: 25
    },
    logo: {
        width: '70%',
        height: 90
    }
})

export default SignInScreen