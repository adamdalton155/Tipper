import React from "react";
import { useState} from "react";
import { View, Text, Image, StyleSheet, TextInput, Alert } from "react-native";
import CustomButton from "../../components/CustomButton/CustomButton";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Auth } from "aws-amplify";

const SignUpScreen = () => {
    const [firstName, setFirstName] = useState('')
    const [secondName, setSecondName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNum, setPhoneNum] = useState('')
    const [password, setPassword] = useState('')
    const [iban, setiban] = useState('')
    const navi = useNavigation()

    const onRegisterBusinessPressed = async () => {
        try {
            const response= await Auth.signUp({
                username: email,
                password,
                attributes: {
                    email,
                    name: firstName,
                    family_name: secondName,
                    phone_number: phoneNum,
                    nickname: iban
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
                <Text style={styles.title}>Register</Text>
                <TextInput style={styles.container} placeholder="First name" value={firstName} onChangeText={setFirstName} />
                <TextInput style={styles.container} placeholder="Second name" value={secondName} onChangeText={setSecondName} />
                <TextInput style={styles.container} placeholder="Email address" autoCapitalize="none" value={email} onChangeText={setEmail} />
                <TextInput style={styles.container} placeholder="Phone number (+ and country code)" value={phoneNum} onChangeText={setPhoneNum} />
                <TextInput style={styles.container} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry={true} />
                <TextInput style={styles.container} placeholder="IBAN" value={iban} onChangeText={setiban} />
                <CustomButton text="Register account" onPress={onRegisterBusinessPressed} />
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

export default SignUpScreen