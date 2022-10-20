import {  Button, View, Text,StyleSheet,Dimensions , ImageBackground,Image,TouchableOpacity } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;




export default function Home() {
  const navigation = useNavigation(); 

  const exit=async()=>{

    ;

    try {
      await AsyncStorage.removeItem('token');
      
     console.log("Done");
     navigation.replace('Login');

  }
  catch(exception) {
    console.log(exception);
  }
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={exit}>
      <Text style={styles.txt}>LogOut</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
  
    height:windowHeight,
    width:windowWidth,
  },
  txt:{

    marginTop:(windowHeight/2)-110,
    marginLeft:(windowWidth/2)-75,
    color: "black",
    fontSize:20
  }
});