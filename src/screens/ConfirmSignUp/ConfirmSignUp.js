import { StyleSheet, Text, TextInput, View} from 'react-native'
import React from 'react'
import { useState } from "react";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation} from '@react-navigation/native';
import { Auth } from 'aws-amplify';
import { useRoute } from '@react-navigation/native';
import { Alert } from 'react-native';
const ConfirmSignUp = () =>{
    const route = useRoute()
    const [code, setCode] = useState('')
    const navi = useNavigation()


const onConfirmPressed = async() =>{
    try {
        const response = await Auth.confirmSignUp(route.params.email, code)
        console.log(response)
        navi.navigate('QRCodeGenerationScreen')
    } catch (error) {
        Alert.alert("Oops ", error.message)
    }
    console.warn("Confirm Pressed")
}
const onResendPressed = async() =>{
    try {
        await Auth.resendSignUp(route.params.email)
        Alert.alert("Verification code has been resent")
    } catch (error) {
        Alert.alert("Oops ", error.message)
    }
    console.warn("Resend Pressed")
}

return(
    <View style={styles.root}>
        <Text style={styles.title}>Confirm your email address</Text>
        <TextInput style={styles.container} placeholder="Enter verification code" value={code} onChangeText={setCode}/>
        <CustomButton text="Verify code" onPress={onConfirmPressed} />
        <CustomButton text="Resend code" onPress={onResendPressed} type="TERTIARY"/>
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

export default ConfirmSignUp