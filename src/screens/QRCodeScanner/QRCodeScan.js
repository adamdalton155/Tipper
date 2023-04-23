import { View,StyleSheet, Text, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import { BarCodeScanner } from 'expo-barcode-scanner'
import { useNavigation } from '@react-navigation/native'
const QRCodeScan = () => {
  const[hasPermission, setHasPermission] = useState('')
  const[scanned, setScanned] = useState(false)
  const[iban, setIban] = useState('Not yet scanned')
 const navi = useNavigation()
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
    setIban(data)
    console.log("Type: " + type)
    console.log("Data: " + data)
    navi.navigate('HomeScreen')
  }

  if(hasPermission === null) {
    return(
      <View style={styles.container}>
      <Text>Requesting camera permission</Text>
      </View>
    )
  }
  

  if(hasPermission === false){
    return(
      <View style={styles.container}>
      <Text style={{margin: 10}}>No access to camera</Text>
      <Button title={'Allow camera'} onPress={() => askForCameraPermission()}></Button>
      </View>
    )
  }
  return(
    <View style={styles.container}>
    <View style={styles.barcodebox}>
    <BarCodeScanner
      onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
      style={{height: 400, width: 400}}>
      </BarCodeScanner>
    </View>
    <Text style={styles.maintext}>{iban}</Text>
    {scanned && <Button title={'Scan again'} onPress={() => setScanned(false)} color='tomato'></Button>}
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
    },
    barcodebox:{
      alignItems: 'center',
      justifyContent: 'center',
      height: 300,
      width: 300,
      overflow: 'hidden',
      borderRadius: 30,
      backgroundColor: 'tomato'
    },
    maintext:{
      fontSize: 16,
      margin: 20
    }
})


export default QRCodeScan