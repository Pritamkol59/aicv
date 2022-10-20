import React, { useEffect,useState } from 'react'
import { Text, View ,StyleSheet,Image,Dimensions} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from './Login';
import Home from './Home';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



export default function Auth() {
    const navigation = useNavigation(); 
const [keys, setKeys] = useState("");
 const [isLoad, setIsLoad] = useState(false);



 useEffect(()=>{
    setIsLoad(true);
    AsyncStorage.getItem('token')
    .then(setKeys).then(setIsLoad(false))
    .catch(e => {})
},[]);

if(isLoad){
    return(

      <View >


<Image
source={require('../assets/img/cv.gif')}
resizeMode="cover"
style={styles.container}
></Image>


      </View>


    );

  }

else{

  if(keys!== null && keys!=='' ){

    return (
      <View>
        <Home/>
      </View>
    )
  
  }
  
  else{
  
    if(keys== null && keys!=='' ){
  
      return (
        <View>
          <Login/>
        </View>
      )
    
    
      }

      else{

        return (
          <View>

<Image
source={require('../assets/img/cv.gif')}
resizeMode="cover"
style={styles.container}
></Image>
            
          </View>
        )

      }
  
  }

}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      height:100,
      width:100,
    },
  });