import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useState } from "react";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from '@react-navigation/native';
import { Auth } from "aws-amplify";
import { useRoute } from '@react-navigation/native';
const ResetPasswordEnterEmail = () =>{
    const [email, setEmail] = useState('');
    const navi = useNavigation()

const onConfirmPressed = async() =>{
try {
    await Auth.forgotPassword(email)
    console.warn("Confirm Pressed")
    navi.navigate('ResetPasswordScreen', {email})
} catch (error) {
    Alert.alert("Oops " + error.message)
    }
}

const onResendPressed = () =>{
    console.warn("Resend Pressed")
}

return(
    <View style={styles.root}>
        <Text style={styles.title}>Enter your your E-Mail address</Text>
        <TextInput style={styles.container} placeholder="E-Mail" autoCapitalize="none" value={email} onChangeText={setEmail}/>
        <CustomButton text="Get verification code" onPress={onConfirmPressed}/>
    </View>
)
}

const styles = StyleSheet.create({
    root:{
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

export default ResetPasswordEnterEmail