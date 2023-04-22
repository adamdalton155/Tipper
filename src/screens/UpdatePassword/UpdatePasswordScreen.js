import { View, TextInput, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import CustomButton from "../../components/CustomButton/CustomButton";
import { Auth } from 'aws-amplify';
import { Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
const UpdatePasswordScreen = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navi = useNavigation();

 const onUpdatePasswordPressed = () => {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        return Auth.changePassword(user, oldPassword, newPassword);
      })
      .then(() => {
        Alert.alert('Password updated successfully!');
        navi.navigate('HomeScreen');
      })
      .catch((error) => {
        Alert.alert('Oops, incorrect password or requirments');
      });
  };

  

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Update your password</Text>
      <TextInput
        style={styles.container}
        placeholder="Old password"
        value={oldPassword}
        onChangeText={setOldPassword}
      />
      <TextInput
        style={styles.container}
        placeholder="New password"
        value={newPassword}
        onChangeText={setNewPassword}
      />
      <CustomButton text="Update password" onPress={onUpdatePasswordPressed} />

      <Text>- Password requires an uppercase character, lowercase character a number and needs to be atleast 8 characters long</Text>
    </View>
  );
};

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
export default UpdatePasswordScreen