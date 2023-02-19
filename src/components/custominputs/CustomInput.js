import React from "react";
import { View, Text, TextInput, StyleSheet} from "react-native";

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) =>{
    return(
        <View style = {Styles.container}>
            <TextInput 
                style = {Styles.input}
                value = {value}
                onChangeText = {setValue}
                placeholder = {placeholder}
                secureTextEntry = {secureTextEntry}
                >
            </TextInput>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        borderColor: '#E8E8E8',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 5
    },
    input: {}
})

export default CustomInput