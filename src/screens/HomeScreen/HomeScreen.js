import { View, Text } from 'react-native'
import {React, useEffect, useState, Button} from 'react'
import { BarCodeScanner } from 'expo-barcode-scanner'

const HomeScreen = () => {
  const [hasPermission, setHasPermission] = useState('')
  const [scanned, setScanned] = useState(false)
  const [text, setText] = useState('Not yet scanned')

  const askForCameraPermision = () =>{
    (async () =>{
      const{status} = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status =='granted')
  })()
  }

  useEffect(() =>{
      askForCameraPermision()
  }, [])

  const handleBarCodeScanned = ({type, data}) =>{
    setScanned(true)
    setText(data)
    console.log("Type: " + type + "\n Data: " + data)
  }
  if(hasPermission === null){
    <View>
      <Text>Requesting permission for camera access</Text>
    </View>
  }


  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen