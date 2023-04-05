import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from "react";
import CustomInput from "../../components/custominputs/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from '@react-navigation/native';

const AddEmployee = () =>{
    const [FirstName, setFirstName] = useState('');
    const [SecondName, setSecondName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [iban, setIban] = useState('');
    const navi = useNavigation()

const onAddEmployeePressed = () =>{
    console.warn("Employee add pressed")
    navi.navigate('AdminHomeScreen')
}

return(
    <View style={styles.root}>
        <Text style={styles.title}>Add employee</Text>
        <CustomInput placeholder="First name" value={FirstName} setValue={setFirstName}/>
        <CustomInput placeholder="Second name" value={SecondName} setValue={setSecondName}/>
        <CustomInput placeholder="Phone number" value={phoneNumber} setValue={setPhoneNumber}/>
        <CustomInput placeholder="IBAN" value={iban} setValue={setIban}/>
        <CustomButton text="Add Employee" onPress={onAddEmployeePressed}/>
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

export default AddEmployee