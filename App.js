import {React} from 'react';
import Navigation from './src/Navigation';
import { Amplify } from 'aws-amplify';
import config from './src/aws-exports';
import QRCodeGenerationScreen from './src/screens/QRCodeGenerationScreen/QRCodeGenerationScreen';
Amplify.configure(config)

import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';


  
function App() {
  //Auth.signOut()
  return (
    <SafeAreaView style={styles.root}>
       
       <QRCodeGenerationScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 root:{
  flex: 1,
  backgroundColor: '#F9FBFC'
 }
});


export default App;