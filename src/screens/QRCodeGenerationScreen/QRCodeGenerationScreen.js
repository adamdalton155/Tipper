import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../../components/CustomButton/CustomButton';
import QRCode from 'react-native-qrcode-svg';
import { useNavigation } from '@react-navigation/native';
const QRCodeGenerationScreen = () => {
  //This is used to generate the QR code from an employee

  const [input, setInput] = useState('')
  const [qrValue, setQrValue] = useState('')
  const [qrUri, setQrUri] = useState('')
  const navi = useNavigation()


  //Function to generate QR Code based on the information entered (users IBAN)
  //This is also used to set the size and colour of the QR Code
  const GenerateQrCode = () => {
    return (
      <QRCode
        value={qrValue ? qrValue : 'NA'}
        size={300}
        color="white"
        backgroundColor='black'>
      </QRCode>
    );
  }

  //Handles the generation of the QR Code
  const handleGenerate = () => {
    setQrValue(input);
  }

  //Button to return back to the sign in page
  const ReturnToSignIn = () => {
    navi.navigate('SignIn')
  }

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Generate your QR Code</Text>
      {qrValue ? (
        <View style={styles.qrContainer}>
          <GenerateQrCode />
        </View>
      ) : null}
      <TextInput style={styles.container} placeholder='Enter IBAN' placeholderTextColor='#000000' value={input} onChangeText={setInput}></TextInput>
      <CustomButton text="Generate QR Code" onPress={handleGenerate}></CustomButton>
      <CustomButton text="Return to sign-in" onPress={ReturnToSignIn}></CustomButton>
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
  },
  qrContainer: {
    marginTop: 20,
    alignItems: 'center'
  }
});

export default QRCodeGenerationScreen;