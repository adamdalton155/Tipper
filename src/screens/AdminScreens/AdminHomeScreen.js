import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from '@react-navigation/native';


const AdminHomeScreen = () => {
    const navi = useNavigation()

    const onGoToEditAdminDetailsPressed = () => {
        console.warn("onGoToEditAdminDetailsPressed")
    }

    const onGoToAddEmployeePressed = () => {
        console.warn("onGoToAddEmployeePressed")
        navi.navigate('AddEmployeeScreen')
    }

    const onGoToSeeEmployeesPressed = () => {
        console.warn("onGoToSeeEmployeesPressed")
    }

    const onGetQrCodePressed = () => {
        console.warn("onGetQrCodePressed")
    }
    return (
        <View style={styles.root}>
            <CustomButton text="Edit admin login details" onPress={onGoToEditAdminDetailsPressed} />
            <CustomButton text="Add an Employee" onPress={onGoToAddEmployeePressed} />
            <CustomButton text="See all employees" onPress={onGoToSeeEmployeesPressed} />
            <CustomButton text="Get your QR code" onPress={onGetQrCodePressed} />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        padding: 25,
    },

});

export default AdminHomeScreen