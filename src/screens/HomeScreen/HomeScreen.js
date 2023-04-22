import { View, Text, StyleSheet } from 'react-native'
import {React, useEffect, useState, Button} from 'react'
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from '@react-navigation/native';
const HomeScreen = () => {
  const navi = useNavigation()

  const MakeTip = () =>{
   
  }

  const UpdateAccountDetails = () =>{
    navi.navigate('UpdateAccountDetails')
  }

  return (
    <View>
      <View style={styles.root}>
    <Text style={styles.title}>Welcome!</Text>
      <CustomButton text="Make a Tip" onPress={MakeTip}></CustomButton>
      <CustomButton text="Update account details" onPress={UpdateAccountDetails}></CustomButton>
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

export default HomeScreen