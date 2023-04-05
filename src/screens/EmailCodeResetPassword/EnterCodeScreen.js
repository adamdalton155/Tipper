import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from "react";
import CustomInput from "../../components/custominputs/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from '@react-navigation/native';
import { Auth } from "aws-amplify";
import { useRoute } from '@react-navigation/native';
const EnterCodeScreen = () =>{
    const [emailCode, setemailCode] = useState('');
    const navi = useNavigation()

const onConfirmPressed = async() =>{
    console.warn("Confirm Pressed")
    navi.navigate('ResetPasswordAdminScreen')

}
const onResendPressed = () =>{
    console.warn("Resend Pressed")
}

return(
    <View style={styles.root}>
        <Text style={styles.title}>Enter your verification code</Text>
        <CustomInput placeholder="Enter SMS code" value={emailCode} setValue={setemailCode}/>
        <CustomButton text="Verify" onPress={onConfirmPressed}/>
        <CustomButton text="Resend code" onPress={onResendPressed}/>
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
    }

});

export default EnterCodeScreen