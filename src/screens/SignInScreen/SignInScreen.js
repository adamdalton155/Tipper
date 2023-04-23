import React from "react";
import { useState } from "react";
import { View, Text, TextInput, Image, StyleSheet, Alert } from "react-native";
import Logo from '../../../assets/images/logo.png'
import CustomButton from "../../components/CustomButton/CustomButton";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Auth } from "aws-amplify";

const SignInScreen = () =>{
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navi = useNavigation()


const onSignInPressed = async () =>{ 
    if(loading){
        return
    }
    setLoading(true)
    try {
        const response = await Auth.signIn(email, password)
        console.log(response)
        navi.navigate('HomeScreen')
    } catch (error) {
        Alert.alert("Oops: ", error.message)
    }
    setLoading(false)
}

const onSignUpPressed = () =>{
    console.log("Signed up pressed")
    navi.navigate('SignUpChoice')
}

const onForgotPasswordPressed = () => {
    console.log("Forgot password")
    navi.navigate('ResetPasswordEnterEmail')
}

return(
    <ScrollView showsHorizontalScrollIndicator = {false} showsVerticalScrollIndicator = {false}>
    <View style={styles.root}>
        <Image source={Logo} style={styles.logo} resizeMode="contain"></Image>
       <TextInput style={styles.container} placeholder="E-mail address" autoCapitalize="none" value={email} onChangeText={setEmail} />
        <TextInput style={styles.container} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry={true}/>
        <CustomButton text={loading ? "Loading..." : "Sign in"} onPress={onSignInPressed}/>
        <CustomButton text="Sign Up" onPress={onSignUpPressed} bgColor='#29A0B1' fgColor='#363636' type="TERTIARY"/>
        <CustomButton text="Forgot password?" onPress={onForgotPasswordPressed} type="TERTIARY"/>
    </View>
    </ScrollView>
)
}

const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        padding: 25
    },
    logo: {
        width: '150%',
        height: 100,
        padding: 25,
        paddingVertical: 10,
        marginVertical: 7
    },
    container: {
        backgroundColor: 'white',
        width: '100%',
        borderColor: '#E8E8E8',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginVertical: 7
    }
})

export default SignInScreen