import React from 'react';
import SignInScreen from './src/screens/SignInScreen';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
  
function App() {

  return (
    <SafeAreaView style={styles.root}>
      <SignInScreen></SignInScreen>
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
