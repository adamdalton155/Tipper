import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import CustomButton from '../../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { Keyboard } from 'react-native'
const CalculateTipScreen = () => {
    
    const [billTotal, setBillTotal] = useState('')
    const [percentage, setPercentage] = useState('')
    var [calculatedTip, setCalculatedTip] = useState('')

    const navi = useNavigation()

    const CalculateTip = () => {
  const calculatedTip = (billTotal * percentage) / 100;
  const roundedTip = calculatedTip.toFixed(2); // round to 2 decimal places
  setCalculatedTip(roundedTip);
  setCalculatedTip.toString()
  const tipAsNumber = parseFloat(calculatedTip);//used for payments
  Keyboard.dismiss()
};

    const ScanQRCode = () =>{
      navi.navigate('QRCodeScan')
    }
 

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Calculate your Tip</Text>
      <TextInput keyboardType='numeric' style={styles.container} placeholder='Enter your bill total' value={billTotal} onChangeText={setBillTotal}></TextInput>
      <TextInput keyboardType='numeric' style={styles.container} placeholder='Enter the tip percentage' value={percentage} onChangeText={setPercentage}></TextInput>
      <CustomButton text="Calculate tip" onPress={CalculateTip}/>
      <CustomButton text="Scan QR Code" onPress={ScanQRCode}/>
      <Text style={styles.value}>{`€${calculatedTip}`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        padding: 25
    },
    title:{
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
    value:{
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10
    }
})

export default CalculateTipScreen