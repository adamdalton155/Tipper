import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignInScreen from '../screens/SignInScreen'
import SignUpScreenAdmin from '../screens/SignUpScreenAdmin'
import ConfirmSignUp from '../screens/ConfirmSignUpAdmin';
import ForgotPasswordScreen from '../screens/ForgotPasswordAdmin/ForgotPasswordAdminScreen.js'
import ResetPasswordAdminScreen from '../screens/ResetPasswordAdminScreen/ResetPasswordAdminScreen.js'
import AdminHomeScreen from '../screens/AdminScreens/AdminHomeScreen';
import HomeScreen from '../screens/HomeScreen';
import SMSCodeResetPassword from '../screens/EmailCodeResetPassword';
import AddEmployeeScreen from '../screens/AddEmployeeScreen'
import SignUpScreen from '../screens/SignUpScreen'

const Stack = createNativeStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignInScreen}/>
        <Stack.Screen name="SignUpScreen" component={SignUpScreen}/>
        <Stack.Screen name="SignUpScreenAdmin" component={SignUpScreenAdmin}/>
        <Stack.Screen name="ConfirmSignUp" component={ConfirmSignUp}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="AdminHomeScreen" component={AdminHomeScreen}/>
        <Stack.Screen name="AddEmployeeScreen" component={AddEmployeeScreen}/>
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen}/>
        <Stack.Screen name="SMSCodeResetPassword" component={SMSCodeResetPassword}/>
        <Stack.Screen name="ResetPasswordAdminScreen" component={ResetPasswordAdminScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation