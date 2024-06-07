import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import LOGO from '../Assets/google.png';
import { useNavigation } from '@react-navigation/native';



const SplashSrc = () => {

    const navigation = useNavigation()

    useEffect(() => {
        
        setTimeout(() => {
         
          navigation.replace('Login');
        }, 2000); 
      }, []);

    return (
    <View style={{alignItems:'center',justifyContent:'center',height:'100%',rowGap:10,backgroundColor:'#DE3163'}}>
     
    {/* <Image source={LOGO} style={{width:100,height:100}}/> */}
    <Text style={{fontSize:50,color:'#FFF',fontWeight:'bold',fontStyle:'italic'}}>ZOMATO</Text>
    <View>
     <Text style={{fontSize:16,color:'#FFF',fontWeight:'bold',textAlign:'center'}}>Carbon  and Plastic Neutral</Text>   
     <Text style={{fontSize:16,color:'#FFF',fontWeight:'bold',textAlign:'center'}}>Deliveries in India</Text> 
    </View>
    </View>
  );
}

export default SplashSrc;
