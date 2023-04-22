import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import CustomButton from "../../components/CustomButton/CustomButton";
import { Auth } from 'aws-amplify';
import { Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
const UpdateEmail = () => {
  const navi = useNavigation()
  const [email, setEmail] = useState('')

  const handleUpdateEmail = async() =>{
    try {
      const user = await Auth.currentAuthenticatedUser();
      await Auth.updateUserAttributes(user, { email });
      console.log('Email updated successfully!')
      Alert.alert('Email updated successfully!')
      navi.navigate('HomeScreen')
    } catch (error) {
      console.log('Error updating email: ', error);
      Alert.alert('Oops ', error.message )
    }
  }

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Update your email</Text>
      <TextInput
        style={styles.container}
        placeholder="New Email"
        value={email}
        onChangeText={setEmail}
      />
    <CustomButton text="Update Email" onPress={handleUpdateEmail} />
    </View>
  )
}
const styles = StyleSheet.create({
  root: {
      alignItems: 'center',
      padding: 25
  },

  title: {
      fontSize: 20,
      fontWeight: 'bold',
      margin: 10
  },
  container: {
      backgroundColor: 'white',
      width: '100%',
      borderColor: '#E8E8E8',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      paddingVertical: 10,
      marginVertical: 7
  }

});
export default UpdateEmail