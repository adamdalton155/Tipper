import { View, Text, StyleSheet } from 'react-native'
import {React, useEffect, useState, Button} from 'react'
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from '@react-navigation/native';
import { Auth } from 'aws-amplify';
const HomeScreen = () => {
  const navi = useNavigation()

  const MakeTip = () =>{
   
  }

  const UpdateAccountDetails = () =>{
    navi.navigate('UpdateAccountDetails')
  }

  const SignOut = async() =>{
    try {
      await Auth.signOut();
      navi.navigate('SignIn')
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

  return (
      <View style={styles.root}>
       <Text style={styles.title}>Welcome!</Text>
      <CustomButton text="Make a Tip" onPress={MakeTip}></CustomButton>
      <CustomButton text="Update account details" onPress={UpdateAccountDetails}></CustomButton>
      <CustomButton text="Sign out"  bgColor='#DC143C' onPress={SignOut}></CustomButton>
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

export default HomeScreen