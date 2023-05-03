import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useState } from "react";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from '@react-navigation/native';
import { Auth } from 'aws-amplify';
import { useRoute } from '@react-navigation/native';
import { Alert } from 'react-native';
const ConfirmSignUpUser = () => {
    //This is screen is for a user to verify their account with a verification code

    const route = useRoute()
    const [code, setCode] = useState('')
    const navi = useNavigation()

    //Async function to confirm users email with the verification code
    //If code entered is valid, user is brought to sign in screen
    const onConfirmPressed = async () => {
        try {
            //Method from AWS Amplify
            const response = await Auth.confirmSignUp(route.params.email, code)
            console.log(response)
            navi.navigate('SignIn')
            //If code is invalid, user sees error message
        } catch (error) {
            Alert.alert("Oops ", error.message)
        }
        console.warn("Confirm Pressed")
    }
    //Button to resend verification code
    const onResendPressed = async () => {
        try {
            await Auth.resendSignUp(route.params.email)
            Alert.alert("Verification code has been resent")
        } catch (error) {
            Alert.alert("Oops ", error.message)
        }
        console.warn("Resend Pressed")
    }

    return (
        <View style={styles.root}>
            <Text style={styles.title}>Confirm your email address</Text>
            <TextInput style={styles.container} placeholder="Enter verification code" placeholderTextColor='#000000' value={code} onChangeText={setCode} />
            <CustomButton text="Verify code" onPress={onConfirmPressed} />
            <CustomButton text="Resend code" onPress={onResendPressed} type="TERTIARY" />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 25
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10
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

});

export default ConfirmSignUpUser