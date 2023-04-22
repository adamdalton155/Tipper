import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import CustomButton from "../../components/CustomButton/CustomButton";
const UpdateAccountDetails = () => {
  const navi = useNavigation()

  const UpdateEmail = () =>{
    navi.navigate('UpdateEmail')
  }

  const UpdatePassword = () =>{
    navi.navigate('UpdatePasswordScreen')
  }

  return (
    <View>
      <View style={styles.root}>
       <Text style={styles.title}>Update account details</Text>
      <CustomButton text="Update Email" onPress={UpdateEmail}></CustomButton>
      <CustomButton text="Update Password" onPress={UpdatePassword}></CustomButton>
    </View>
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

export default UpdateAccountDetails