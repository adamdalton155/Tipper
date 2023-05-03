import { Alert, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from '@react-navigation/native';
import { Auth } from 'aws-amplify';
import { useRoute } from '@react-navigation/native';

const ResetPasswordScreen = () => {
    //Here the user can enter the verification code and reset their password

    const [newPassword, setNewPassword] = useState('')
    const [emailCode, setCode] = useState('')
    const navi = useNavigation()
    const route = useRoute()

    //Return back to the sign in page
    const onPressReturnToSignIn = () => {
        console.warn("Back to sign in page")
        navi.navigate('SignIn')
    }
    //Function to update the users password. Takes users email address from enter email screen and if the verification code is valid, the user can update the password 
    //New password must also meet password requirements
    //User is then brought back to the sign in screen
    const onPressUpdatePassword = async () => {
        try {
            //Method from AWS
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
            <CustomButton text="Cancel" onPress={onPressReturnToSignIn} />
            <Text>- Password requires an uppercase character, lowercase character a number and needs to be atleast 8 characters long</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 25
    },
    title: {
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

