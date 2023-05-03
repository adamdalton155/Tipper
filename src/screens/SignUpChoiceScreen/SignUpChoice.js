import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from '@react-navigation/native';
const SignUpChoice = () => {
  //This screen is for the user to choose if they are a customer or an employee

  const navi = useNavigation()

  //If user is a customer, they click user button
  const onCustomerPressed = () =>{
    navi.navigate('SignUpScreenUser')
  }
  //If user is an employee, they click employee button
  const onEmployeePressed = () =>{
    navi.navigate('SignUpScreenEmployee')
  }

  return (
    <View style={styles.root}>
    <Text style={styles.title}>Are you an employee or customer?</Text>
      <CustomButton text="Customer" onPress={onCustomerPressed}></CustomButton>
      <CustomButton text="Employee" onPress={onEmployeePressed}></CustomButton>
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
})

export default SignUpChoice