import React, { useState, useEffect } from "react";
import { ScrollView, Button, Text, Linking, Alert, View, StyleSheet, TextInput,Image, TouchableOpacity , SafeAreaView} from "react-native";
import { ListItem, Avatar } from "@rneui/themed";
import firebase from "../database/firebase.js";
import { Divider } from "@react-native-material/core";
import amount from "./UserDetail.js"
import { useNavigation } from "@react-navigation/native";
const UsersList = (props) => {
  
  const [users, setUsers] = useState([]);
  const navigation = useNavigation()
  useEffect(() => {
    firebase.db.collection("users").onSnapshot((querySnapshot) => {
      const users = [];
      querySnapshot.docs.forEach((doc) => {
        const { name, email, phone } = doc.data();
        users.push({ id: doc.id, name, email, phone });
      });
      setUsers(users);
    });
  }, []);
  const urll = async() =>{
    const url ='https://maps.app.goo.gl/1vXbpJ4zfCJDjmSPA'
    const supported = await Linking.canOpenURL(url);
    if (supported){
      await Linking.openURL(url);
    }else {
      Alert.alert("error")
    }
  }
  const getUserById = async (id) => {
    const dbRef = firebase.db.collection("users").doc(id);
    const doc = await dbRef.get();
    const user = doc.data();
    setUser({ ...user, id: doc.id });
    setLoading(false);
  };
  return (
    <View>
      <Text>

      </Text>
      <Text></Text>
      <Button color="#7DFFF9"  title="About user" onPress={() => navigation.navigate("Abount")}/>
      <Button color="#7DFFF9"  title="Get near location" onPress={urll}/>
      <ScrollView > 
        <View style={styles.roww}>
          <TouchableOpacity onPress={() => props.navigation.navigate("userdetaills")}>
          <Image  style={styles.logo} source={{ uri: 'https://static.vecteezy.com/system/resources/previews/011/098/093/original/medicine-capsule-pill-drug-with-bottle-3d-icon-illustration-png.png'}}></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate("userdetaills")}>
          <Text style={styles.text}>Medicine 1</Text>
          </TouchableOpacity>
          </View> 
          <Divider />
          

          <View style={styles.roww}>
          <TouchableOpacity onPress={() => props.navigation.navigate("userdetaills2")}>
          <Image style={styles.logo} source={{ uri: 'https://static.vecteezy.com/system/resources/previews/011/098/093/original/medicine-capsule-pill-drug-with-bottle-3d-icon-illustration-png.png'}}></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate("userdetaills2")}>
          <Text style={styles.text}>Medicine 2</Text>
          </TouchableOpacity>
          </View>
          <Divider />
          <View style={styles.roww}>
          <TouchableOpacity onPress={() => props.navigation.navigate("userdetaills3")}>
          <Image style={styles.logo} source={{ uri: 'https://static.vecteezy.com/system/resources/previews/011/098/093/original/medicine-capsule-pill-drug-with-bottle-3d-icon-illustration-png.png'}}></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate("userdetaills3")}>
          <Text style={styles.text}>Medicine 3</Text>
          </TouchableOpacity>
          </View>
          <Divider />

          
            </ScrollView>       
     </View>

  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    
  },
  logo:{
    width: 170,
    height: 170,
    
   


  },
  roww:{
    flexDirection: 'row',
    flexWrap: 'wrap',   
  
  },
  text:{
    marginTop: 80,
    marginRight: 5,
    fontWeight: "900",
    fontSize: 30,
    flex:1
  }
});

export default UsersList;
