import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import CalculateTipScreen from '../screens/CalculateTip/CalculateTipScreen'
import SignInScreen from '../screens/SignInScreen'
import SignUpScreenUser from '../screens/SignUpScreenUser'
import ConfirmSignUp from '../screens/ConfirmSignUp';
import HomeScreen from '../screens/HomeScreen';
import SignUpScreenEmployee from '../screens/SignUpScreenEmployee'
import SignUpChoice from '../screens/SignUpChoiceScreen/SignUpChoice'
import ResetPasswordEnterEmail from '../screens/EmailCodeResetPassword/ResetPasswordEnterEmail'
import ResetPasswordScreen from '../screens/ResetPasswordScreen'
import QRCodeGenerationScreen from '../screens/QRCodeGenerationScreen/QRCodeGenerationScreen'
import UpdateAccountDetails from '../screens/UpdateAccountDetails/UpdateAccountDetails'
const Stack = createNativeStackNavigator()

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
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation