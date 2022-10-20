import React, { useEffect,useState } from 'react'
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { Button, View, Text,StyleSheet,Dimensions , ImageBackground,Image,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Home from './Home';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



WebBrowser.maybeCompleteAuthSession();

export default function Login() {

  const [keys, setKeys] = useState(false);

  const navigation = useNavigation();
  
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '149836028350-btc18i1583qfjip47jah1ips4bv4nc13.apps.googleusercontent.com',
    androidClientId: '149836028350-rtr0fud7e2m54do6jets2h1h68t8qc5a.apps.googleusercontent.com',
   });

  React.useEffect(() => {
    
      getUserData();
}, [response]);
    

 const  getUserData=async()=> {

if (response?.type === 'success') {
    const { authentication } = response;

    
    const tk= JSON.stringify(authentication.accessToken);
    const items = [['token', tk]];
   
    try{
  
/*const postUserData= await fetch("https://www.googleapis.com/userinfo/v2/me", {
  headers: { Authorization: `Bearer ${authentication.accessToken}`}
});
   const myData= await postUserData.json();
   console.log(myData);
    */
   

   AsyncStorage.multiSet(items, () => {
           
  });
  const tok = await AsyncStorage.getItem('token');
  if(tok){
    //console.log(tok);
    navigation.replace('Home');
    //setKeys(true);
  }
  
  
  }
  catch(e){
    console.log(e);
  }
    
  }

}

    
      
    


   

  return (
 <View style={styles.maincontant}>

<View style={styles.contain1}>

<ImageBackground
    style={styles.imgtop10}
    imageStyle={styles.imageStyle1}
    source={require("../assets/img/gp.png")}
    

  >
<Text style={styles.txt1}>- Welcome Back -</Text>

    </ImageBackground>

</View>

<View style={styles.contain2}>

<ImageBackground
    style={styles.imgtop11}
    imageStyle={styles.imageStyle1}
    source={require("../assets/img/log2.png")}
    

  >

<Text style={styles.txt2}>LOGIN</Text>

<TouchableOpacity onPress={() => {promptAsync();}}>

<Image
source={require('../assets/img/GButton.jpg')}
resizeMode="cover"
style={styles.imagex}
></Image>


</TouchableOpacity>

    </ImageBackground>


</View>

</View>

  );
}

const styles = StyleSheet.create({
  contain1: {
   height:(windowHeight/2)-50,
   width:windowWidth,
   borderWidth: 2,
   borderColor: "#313130",
borderRadius: 25,
overflow: "hidden",
//backgroundColor:'#6C63FF',
  },

  contain2: {
   height:(windowHeight/2)+50,
   width:windowWidth,
   borderWidth: 2,
borderColor: "#313130",
borderRadius: 18,
overflow: "hidden",
backgroundColor:'#FFF',
  },

  maincontant:{

      backgroundColor:'#313130',
  },


  imgtop10:{
  
    marginTop:0,
        
    height:(windowHeight/2)-50,
    
    width:windowWidth,
   
    
        
      },

  imgtop11:{
  
    marginTop:0,
        
    height:(windowHeight/2)+50,
    
    width:windowWidth,
   
    
        
      },

      imagex:{

       
        marginTop:(windowHeight/2)-220,
        marginLeft:(windowWidth/2)-105,
  
        height:90,
        width:210,
      },

      
      txt1:{
        marginTop:(windowHeight/2)-110,
        marginLeft:(windowWidth/2)-75,
        color: "rgba(255,255,255,1)",
        fontSize:20
      },
      txt2:{
        marginTop:(windowHeight/2)-300,
        marginLeft:(windowWidth/2)-39,
        color: "rgba(255,255,255,1)",
        fontSize:25
      }


});
