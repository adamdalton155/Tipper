import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { React, useEffect, useState, Button } from 'react'
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from '@react-navigation/native';
import { Auth } from 'aws-amplify';
const HomeScreen = () => {
  //This is the home screen the user sees when they have signed in

  const navi = useNavigation()
  //Button to bring user to make a tip screen
  const MakeTip = () => {
    navi.navigate('CalculateTipScreen')
  }
  //Button to bring user to update password screen
  const UpdateAccountDetails = () => {
    navi.navigate('UpdateAccountDetails')
  }
  //Button to allow the user to sign out and go back to the home screen
  const SignOut = async () => {
    try {
      await Auth.signOut();
      navi.navigate('SignIn')
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Welcome!</Text>
        <CustomButton text="Make a Tip" onPress={MakeTip}></CustomButton>
        <CustomButton text="Update account details" onPress={UpdateAccountDetails}></CustomButton>

        <CustomButton text="Sign out" bgColor='#DC143C' onPress={SignOut}></CustomButton>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 25,
    marginTop: 50
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 25
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
  },
   secondaryButtonsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 250,
    padding: 25
}
})

export default HomeScreen