import {React} from 'react';
import Navigation from './src/Navigation';
import { Amplify } from 'aws-amplify';
import config from './src/aws-exports';
import CalculateTipScreen from './src/screens/CalculateTip/CalculateTipScreen';
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
       
       <CalculateTipScreen/>
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