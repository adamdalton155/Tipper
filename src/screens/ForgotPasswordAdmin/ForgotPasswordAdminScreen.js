import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from '@react-navigation/native';
import { Auth } from "aws-amplify";
import { Alert } from 'react-native';

const ForgotPasswordAdminScreen = () => {
    const [email, setEmaill] = useState('')
    const navi = useNavigation()
const onSendResetCode = async() => {
    try {
        const response = await Auth.forgotPassword(email)
        console.log(response)
        navi.navigate('ResetPasswordAdminScreen', {email})
    } catch (error) {
        Alert.alert("Oops ", error.message)
    }
    console.warn("Reset code sent")
}

const onReturnToSignIn = () => {
    console.warn("Return to sign in page")
    navi.navigate('SignIn')
}

return (
    <View style={styles.root}>
        <Text style={styles.title}>Reset password</Text>
        <TextInput style={styles.container} placeholder="Enter your email address" autoCapitalize='none' value={email} onChangeText={setEmaill} />
        <CustomButton text="Send reset code" onPress={onSendResetCode}></CustomButton>
        <CustomButton style={styles.footer} text="Return to sign in" onPress={onReturnToSignIn} type="TERTIARY"></CustomButton>
    </View>
)
}
const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 25
    },

    title: {
        fontWeight: 'bold'
    },

    footer:{
        flexDirection: 'column', // inner items will be added vertically
        flexGrow: 1,            // all the available vertical space will be occupied by it
        justifyContent: 'space-between'
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

export default ForgotPasswordAdminScreen;