import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../../components/CustomButton/CustomButton';
import QRCode from 'react-native-qrcode-svg';
import RNFS from 'react-native-fs'
//import { useNavigation } from '@react-navigation/native';
const QRCodeGenerationScreen = () => {
  const [input, setInput] = useState('')
  const [qrValue, setQrValue] = useState('')
  const [qrUri, setQrUri] = useState('')
  //const navi = useNavigation()



  const GenerateQrCode = () =>{
      return (
        <QRCode
          value={qrValue ? qrValue : 'NA'}
          size={300}
          color = "white"
          backgroundColor = 'black'>
        </QRCode>
      );
  }

  const handleGenerate = () => {
    setQrValue(input);
    setQrUri(`data:image/png;base64,${qrCodeRef.current.toDataURL()}`);
  }

  const handleSaveImage = async () => {
    try {
      const directory = Platform.OS === 'ios' ? RNFS.LibraryDirectoryPath : RNFS.PicturesDirectoryPath;
      const fileName = 'QRCode.png';
      const path = `${directory}/${fileName}`;

      await RNFS.writeFile(path, qrUri, 'base64');

      alert('QR code image saved to device successfully!');
    } catch (error) {
      console.error(error);
    }
  }

  const ReturnToSignIn = () =>{
   // navi.navigate('SignIn')
  }

  return(
    <View style={styles.root}>
      <Text style={styles.title}>Generate your QR Code</Text>
      {qrValue ? (
        <View style={styles.qrContainer}>
          <GenerateQrCode />
        </View>
      ) : null}
      <TextInput style={styles.container} placeholder='Enter IBAN' value={input} onChangeText={setInput}></TextInput>
      <CustomButton text="Generate QR Code" onPress={handleGenerate}></CustomButton>
      <CustomButton text="Save Image" onPress={handleSaveImage} />
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