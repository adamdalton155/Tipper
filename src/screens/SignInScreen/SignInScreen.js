import React from "react";
import { useState } from "react";
import { View, Text, TextInput, Image, StyleSheet, Alert } from "react-native";
import Logo from '../../../assets/images/logo.png'
import CustomButton from "../../components/CustomButton/CustomButton";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Auth } from "aws-amplify";

const SignInScreen = () => {
    //This is the homescreen the user is met with when they first load up the app

    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navi = useNavigation()

    //Sign in button
    const onSignInPressed = async () => {
        //If loading is true (Sign in button has been pressed) it wont restart Login authentication
        if (loading) {
            return
        }
        setLoading(true)
        try {
            //Tries to authenticate login details and if login information is valid, user is brought to home screen
            const response = await Auth.signIn(email, password)
            console.log(response)
            navi.navigate('HomeScreen')
            //If login details are incorrect, user sees error message
        } catch (error) {
            Alert.alert("Oops: ", error.message)
        }

        
        setLoading(false)
    }
    //Button to sign up
    const onSignUpPressed = () => {
        console.log("Signed up pressed")
        navi.navigate('SignUpChoice')
    }
    //Button to reset password
    const onForgotPasswordPressed = () => {
        console.log("Forgot password")
        navi.navigate('ResetPasswordEnterEmail')
    }

    return (
        <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image source={Logo} style={styles.logo} resizeMode="contain"></Image>
                <TextInput style={styles.container} clearButtonMode="always" placeholderTextColor='#000000' placeholder="E-mail address" autoCapitalize="none" value={email} onChangeText={setEmail} />
                <TextInput style={styles.container}clearButtonMode="always" placeholderTextColor='#000000' placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry={true} />
                {/*Checks if loading is true, if it is, displays loading text*/}
                <CustomButton text={loading ? "Loading..." : "Sign in"} onPress={onSignInPressed} />
                <CustomButton text="Sign Up" onPress={onSignUpPressed} bgColor='#29A0B1' fgColor='#363636' type="TERTIARY" />
                <CustomButton text="Forgot password?" onPress={onForgotPasswordPressed} type="TERTIARY" />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
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