import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import CustomButton from '../../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { Keyboard } from 'react-native'
const CalculateTipScreen = () => {
  //This screen is for the user to calculate their tip

  const [billTotal, setBillTotal] = useState('')
  const [percentage, setPercentage] = useState('')
  var [calculatedTip, setCalculatedTip] = useState('')
  let tipAsNumber
  const navi = useNavigation()

  //Calcuates tip based on inputs (Bill total and percentage)
  const CalculateTip = () => {
    //Converts to percentage
    let calculatedTip = (billTotal * percentage) / 100;
    let roundedTip = calculatedTip.toFixed(2); // round to 2 decimal places
    setCalculatedTip(roundedTip);
    setCalculatedTip.toString()
    tipAsNumber = parseFloat(calculatedTip);//used for payments
    //Dismisses keyboard when calculated tip button is pressed
    Keyboard.dismiss()
  };
  //Button to bring user to scan QR Code page and carries over calculated tip value
  const ScanQRCode = () => {
    navi.navigate('QRCodeScan', { calculatedTip })
  }


  return (
    <View style={styles.root}>
      <Text style={styles.title}>Calculate your Tip</Text>
      <TextInput keyboardType='numeric' style={styles.container} placeholder='Enter your bill total' placeholderTextColor='#000000' value={billTotal} onChangeText={setBillTotal}></TextInput>
      <TextInput keyboardType='numeric' style={styles.container} placeholder='Enter the tip percentage'  placeholderTextColor='#000000' value={percentage} onChangeText={setPercentage}></TextInput>
      <CustomButton text="Calculate tip" onPress={CalculateTip} />
      <CustomButton text="Scan QR Code" onPress={ScanQRCode} />
      <Text style={styles.value}>{`€${calculatedTip}`}</Text>
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
  value: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10
  }
})

export default CalculateTipScreen