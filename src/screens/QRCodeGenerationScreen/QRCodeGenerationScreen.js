import { View, TextInput, Text } from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton/CustomButton';
import QRCode from 'react-native-qrcode-svg';

const QRCodeGenerationScreen = ({value, getRef}) => {
  return(
      <QRCode
      value={value}
      size={250}
      color="black"
      backgroundColor="white"
      getRef={getRef}
      />
      )
  }

export default QRCodeGenerationScreen