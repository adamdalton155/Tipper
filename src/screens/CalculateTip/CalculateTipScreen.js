import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import CustomButton from '../../components/CustomButton/CustomButton'

const CalculateTipScreen = () => {

    const [billTotal, setBillTotal] = useState('')
    const [percentage, setPercentage] = useState('')
    var [calculatedTip, setCalculatedTip] = useState('')
    const CalculateTip = () =>{
        setCalculatedTip((billTotal * percentage) / 100)
        calculatedTip.toString()
    }



  return (
    <View style={styles.root}>
      <Text style={styles.title}>Calculate your Tip</Text>
      <TextInput style={styles.container} placeholder='Enter your bill total' value={billTotal} onChangeText={setBillTotal}></TextInput>
      <TextInput style={styles.container} placeholder='Enter the tip percentage' value={percentage} onChangeText={setPercentage}></TextInput>
      <CustomButton text="Calculate tip" onPress={CalculateTip}/>
      <Text style={styles.value}>{calculatedTip}</Text>
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