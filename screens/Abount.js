import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { auth } from '../database/firebase'
import { Button } from '@rneui/base'
import { useNavigation } from '@react-navigation/native';

const Abount = () => {
    const navigation = useNavigation()
  return (
    <View>
      <Text style={styles.text}>{auth.currentUser?.email}</Text>
      <Button title="Home" onPress={() => navigation.navigate("UsersList")}/>
      <Button title="Logout" onPress={() => navigation.navigate("CreateUserScreen")}/>
      <Text>age</Text>
    </View>
  )
}

export default Abount

const styles = StyleSheet.create({
    text:{
        alignSelf: "center",
        fontSize: 30,
        
        paddingHorizontal: 16,
        paddingVertical: 11,
        borderRadius: 11,
        marginTop: 6,        
    }
})