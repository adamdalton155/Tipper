import { View,StyleSheet, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { BarCodeScanner } from 'expo-barcode-scanner'

const QRCodeScan = () => {
  const[hasPermission, setHasPermission] = useState('')
  const[scanned, setScanned] = useState(false)
  const[text, setText] = useState('Not yet scanned')

  const askForCameraPermission = () =>{
    (async () =>{
      const {status} = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
  }

  useEffect(() =>{
    askForCameraPermission()
  }, [])

  const handleBarCodeScanned = ({type, data}) =>{
    setScanned(true)
    setText(data)
    console.log("Type: " + type)
    console.log("Data: " + data)
  }

  if(hasPermission === null) {
    return(
      <View styles={style.container}>
      <Text>Requesting camera permission</Text>
      </View>
    )
  }
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


export default QRCodeScan