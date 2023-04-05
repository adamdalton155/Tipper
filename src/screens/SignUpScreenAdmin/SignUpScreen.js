import React from "react";
import { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import CustomInput from "../../components/custominputs/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
    const [businessName, setBusinessName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNum, setPhoneNum] = useState('')
    const [password, setPassword] = useState('')
    const [passwordRepeat, setPasswordRepeat] = useState('')
    const [iban, setIban] = useState('')
    const navi = useNavigation()

    const onRegisterBusinessPressed = () => {
        console.warn("Verify code page")
        navi.navigate('ConfirmSignUp')
    }
    const onSignInPressed = () => {
        console.warn("Return to Sign in pressed")
        navi.navigate('SignIn')
    }

    return (
        <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Register your business</Text>
                <CustomInput placeholder="Business name" value={businessName} setValue={setBusinessName} />
                <CustomInput placeholder="Email address" value={email} setValue={setEmail} />
                <CustomInput placeholder="Phone number" value={phoneNum} setValue={setPhoneNum} />
                <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true} />
                <CustomInput placeholder="Repeat password" value={passwordRepeat} setValue={setPasswordRepeat} secureTextEntry={true} />
                <CustomInput placeholder="IBAN" value={iban} setValue={setIban}/>
                <CustomButton text="Register business" onPress={onRegisterBusinessPressed} />
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
    }

});

export default SignUpScreen