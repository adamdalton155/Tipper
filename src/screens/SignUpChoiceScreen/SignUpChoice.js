import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from '@react-navigation/native';
const SignUpChoice = () => {
  const navi = useNavigation()

  const onCustomerPressed = () =>{
    navi.navigate('SignUpScreenUser')
  }

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