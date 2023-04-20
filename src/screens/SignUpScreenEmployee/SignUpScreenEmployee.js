import React from "react";
import { useState} from "react";
import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import CustomButton from "../../components/CustomButton/CustomButton";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Auth } from "aws-amplify";

const SignUpScreenEmployee = () => {
    const [firstName, setFirstName] = useState('')
    const [secondName, setSecondName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNum, setPhoneNum] = useState('')
    const [password, setPassword] = useState('')
    const [iban, setiban] = useState('')
    const navi = useNavigation()

    const onRegisterEmployeePressed = async () => {
        try {
            const response= await Auth.signUp({
                username: email,
                password,
                attributes: {
                    email,
                    name: firstName,
                    family_name: secondName,
                    phone_number: phoneNum,
                }
            });
            console.log(response);
            navi.navigate('ConfirmSignUp', {email})
        } catch (error) {
            Alert.alert('Oops', error.message);
        }
    }

    const onSignInPressed = () => {
        console.warn("Return to Sign in pressed")
        navi.navigate('SignIn')
    }

    return (
        <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Register your account</Text>
                <TextInput style={styles.container} placeholder="First name" value={firstName} onChangeText={setFirstName} />
                <TextInput style={styles.container} placeholder="Second name" value={secondName} onChangeText={setSecondName} />
                <TextInput style={styles.container} placeholder="Email address" autoCapitalize="none" value={email} onChangeText={setEmail} />
                <TextInput style={styles.container} placeholder="Phone number (+ and country code)" value={phoneNum} onChangeText={setPhoneNum} />
                <TextInput style={styles.container} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry={true} />
                <CustomButton text="Register account" onPress={onRegisterEmployeePressed} />
                <CustomButton text="Have an account? Sign in" onPress={onSignInPressed} type="TERTIARY" />
            </View>
        </ScrollView>
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

export default SignUpScreenEmployee