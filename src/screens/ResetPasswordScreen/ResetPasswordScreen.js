import { Alert, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import {useState} from 'react'
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from '@react-navigation/native';
import { Auth } from 'aws-amplify';
import { useRoute } from '@react-navigation/native';

const ResetPasswordScreen = () => {
    const[newPassword, setNewPassword] = useState('')
    const[emailCode, setCode] = useState('')
    const navi = useNavigation()
    const route = useRoute()

const onPressReturnToSignIn = () => {
    console.warn("Back to sign in page")
    navi.navigate('SignIn')
}

const onPressUpdatePassword = async() => {
    try {
        const response = await Auth.forgotPasswordSubmit(route.params.email, emailCode, newPassword)
        console.log(response)
        console.warn("Password updated")
        navi.navigate('SignIn')
    } catch (error) {
        Alert.alert("Oops " + error.message)
    }
}



return (
    <View style={styles.root}>
     <Text style={styles.title}>Reset password</Text>
     <TextInput style={styles.container} placeholder="Enter code" value={emailCode} onChangeText={setCode}></TextInput>
     <TextInput style={styles.container} placeholder="New password" value={newPassword} onChangeText={setNewPassword}></TextInput>
     <CustomButton text="Submit" onPress={onPressUpdatePassword}> </CustomButton>
     <CustomButton text="Cancel" onPress={onPressReturnToSignIn}/>
    </View>
)
}

const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        padding: 25
    },
    title:{
        fontWeight: 'bold',
        fontSize: 24,
        padding: 15
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

export default ResetPasswordScreen

