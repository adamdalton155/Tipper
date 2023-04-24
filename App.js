import {React} from 'react';
import Navigation from './src/Navigation';
import { Amplify } from 'aws-amplify';
import config from './src/aws-exports';
import {StripeProvider} from '@stripe/stripe-react-native'
import {Provider} from 'react-redux'
import {store} from './src/store'
Amplify.configure(config)

import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';


  const STRIPE_KEY = 'pk_test_51N0AyWGZqAlvObDNAuU3KoyDFnqbDBwusxUq6F1921hTqp8MFSRTp3ZSIwBCehKZiqiU9apIdwNtWbCCuoggA11v006D9n9GJg'
function App() {
  
  return (
    <SafeAreaView style={styles.root}>
      <Provider store={store}>
      <StripeProvider publishableKey={STRIPE_KEY}>
       <Navigation/>
       </StripeProvider>
       </Provider>
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