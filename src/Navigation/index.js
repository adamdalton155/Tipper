import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import CalculateTipScreen from '../screens/CalculateTip/CalculateTipScreen'
import SignInScreen from '../screens/SignInScreen'
import SignUpScreenUser from '../screens/SignUpScreenUser'
import ConfirmSignUp from '../screens/ConfirmSignUpEmployee';
import HomeScreen from '../screens/HomeScreen';
import SignUpScreenEmployee from '../screens/SignUpScreenEmployee'
import SignUpChoice from '../screens/SignUpChoiceScreen/SignUpChoice'
import ResetPasswordEnterEmail from '../screens/EmailCodeResetPassword/ResetPasswordEnterEmail'
import ResetPasswordScreen from '../screens/ResetPasswordScreen'
import QRCodeGenerationScreen from '../screens/QRCodeGenerationScreen/QRCodeGenerationScreen'
import UpdateAccountDetails from '../screens/UpdateAccountDetails/UpdateAccountDetails'
import UpdatePasswordScreen from '../screens/UpdatePassword/UpdatePasswordScreen'
import UpdateEmail from '../screens/UpdateEmail/UpdateEmail'
import ConfirmSignUpUser from '../screens/ConfirmSignUpUser/ConfirmSignUpUser'
import QRCodeScan from '../screens/QRCodeScanner/QRCodeScan'
const Stack = createNativeStackNavigator()
//This file is used for the user to be able to naivgate around the application. Creates a stack of screens and this is called in app.js
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignInScreen}/>
        <Stack.Screen name="SignUpChoice" component={SignUpChoice}/>
        <Stack.Screen name="SignUpScreenEmployee" component={SignUpScreenEmployee}/>
        <Stack.Screen name="SignUpScreenUser" component={SignUpScreenUser}/>
        <Stack.Screen name="ConfirmSignUp" component={ConfirmSignUp}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="ResetPasswordEnterEmail" component={ResetPasswordEnterEmail}/>
        <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen}/>
        <Stack.Screen name="QRCodeGenerationScreen" component={QRCodeGenerationScreen}/>
        <Stack.Screen name="CalculateTipScreen" component={CalculateTipScreen}/>
        <Stack.Screen name="UpdateAccountDetails" component={UpdateAccountDetails}/>
        <Stack.Screen name="UpdatePasswordScreen" component={UpdatePasswordScreen}/>
        <Stack.Screen name="UpdateEmail" component={UpdateEmail}/>
        <Stack.Screen name="ConfirmSignUpUser" component={ConfirmSignUpUser}/>
        <Stack.Screen name="QRCodeScan" component={QRCodeScan}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation