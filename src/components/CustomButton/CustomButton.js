import { View, Text, StyleSheet, Pressable, Scr } from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text, type = "PRIMARY", bgColor, fgColor}) => {
  return (
    <Pressable onPress={onPress} style = {[styles.container, styles[`container_${type}`], bgColor ? {backgroundColor : bgColor} : { }]}>
      <Text style={[styles.text, styles[`text_${type}`], fgColor ? {color:''} : { }]}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 15,
        marginVertical: 6,
        alignItems: 'center',
        borderRadius: 5
    },

    container_PRIMARY: {
        backgroundColor: '#3B71F3',
    },     

    container_TERTIARY: {

    },

    text: {
        fontWeight:'bold',
        color: 'white'
    },
    text_TERTIARY: {
        color:'#5A5A5A'
    }

})

export default CustomButton