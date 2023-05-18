import { View, StyleSheet, Text, Button, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { BarCodeScanner } from 'expo-barcode-scanner'
import { useNavigation } from '@react-navigation/native'
import { useCreatePaymentIntentMutation } from '../../store/apiSlice'
import { useRoute } from '@react-navigation/native'
import { useStripe } from '@stripe/stripe-react-native'

const QRCodeScan = () => {
  // This screen is used to scan QR codes and then display the Stripe payment functionality

  const stripe = useStripe()
  const [hasPermission, setHasPermission] = useState('')
  const [scanned, setScanned] = useState(false)
  const [iban, setIban] = useState('Scan a QR Code')
  const [paymentMethodType, setPaymentMethodType] = useState('sepa_debit') // Provide the default payment method type
  const [createPaymentIntent] = useCreatePaymentIntentMutation()
  const { initPaymentSheet, presentPaymentSheet } = useStripe()
  const navi = useNavigation()
  const route = useRoute()

  // Asks the device for permission to use the camera and sets it to granted if allowed
  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
  }

  // The display box for the permission request
  useEffect(() => {
    askForCameraPermission()
  }, [])

  // Scans and stores the information scanned from the barcode and then loads the Stripe payment overlay
  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true)
    setIban(data)
    console.log('Type: ' + type)
    console.log('Data: ' + data)
  }

  const processPayment = async () => {
    onMakePayment()
  }

  // Sets the total from the calculated Tip
  const onMakePayment = async () => {
    try {
      const response = await createPaymentIntent({ amount: tip })

      console.log(response)

      if (response.error) {
        Alert.alert('Something went wrong,', response.error)
        return
      }

      const { paymentIntent } = response.data

      const paymentMethod = {
        type: paymentMethodType, // Use the selected payment method type
        [paymentMethodType]: {
          iban: iban, // set the IBAN to the scanned value
        },
        billing_details: {
          name: '***', // set the name for the billing details
        },
      }

      const { error } = await stripe.createPaymentMethod(paymentMethod)

      if (error) {
        Alert.alert('Something went wrong,', error.message)
        return
      }

      const initResponse = await initPaymentSheet({
        merchantDisplayName: 'Tipper',
        paymentIntentClientSecret: paymentIntent.client_secret,
        customFlow: true,
        paymentMethodId: paymentMethod.id,
      })

      if (initResponse.error) {
        console.log(initResponse.error)
        Alert.alert('Something went wrong,', initResponse.error)
        return
      }

      await presentPaymentSheet()
    } catch (error) {
      console.log('Unhandled error:', error)
      // Handle any unhandled errors here
    }
  }

  
  //If hasnt been granted or denied, device requests user to either grant or deny permission
  if(hasPermission === null) {
    return(
      <View style={styles.container}>
      <Text>Requesting camera permission</Text>
      </View>
    )
  }
  
  //If permission isnt granted, camera isnt used and displays no access to camera
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
    <View >
    <BarCodeScanner 
      onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
      style={{height: 400, width: 400}}>
      </BarCodeScanner>
    </View>
    <Text style={styles.maintext}>{iban}</Text>
    {scanned && <Button title={'Scan again'} onPress={() => setScanned(false)} color='tomato'></Button>}
    <Button title={'Make Payment'} onPress={processPayment} />
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