import React, { useState } from 'react';
import { View, Text, Pressable, Image } from 'react-native';

import delivery1 from '../Assets/BottumTab/delivery1.png';
import delivery2 from '../Assets/BottumTab/delivery2.png';

import list1 from '../Assets/BottumTab/list1.png';
import list2 from '../Assets/BottumTab/list2.png';

import wallet1 from '../Assets/BottumTab/wallet1.png';
import wallet2 from '../Assets/BottumTab/wallet2.png';
import { useNavigation } from '@react-navigation/native';

const BottumTab = () => {
    const navigation = useNavigation();

    const [Delivery , setDelivery] = useState(true)
    const [History , setHistory] = useState(false)
    const [Money , setMoney] = useState(false)


    const HandleDelivery = () => {
        navigation.navigate("Home")
        setDelivery(true)
        setHistory(false)
        setMoney(false)
    }

    const HandleHistory = () => {
        setDelivery(false)
        setHistory(true)
        setMoney(false)
    }

    const HandleMoney = () => {
        setDelivery(false)
        setHistory(false)
        setMoney(true)
    }
  
  
    return (
    <View style={{ width: '100%', backgroundColor: 'blue', height: '100%', position: 'relative' }}>
    <View style={{ width: '100%', backgroundColor: '#FFF', height: '10%', position: 'absolute', bottom: 0 ,alignItems:'center',justifyContent:'space-around',flexDirection:'row'}}>
            <Pressable onPress={HandleDelivery}>
                <Image source={Delivery ? delivery2 : delivery1} style={{width:30,height:30,alignSelf:'center'}}/>
                <Text style={{color:Delivery ? "#DE3163" :'#000'}}>
                    Delivery
                </Text>
            </Pressable>
            <Pressable onPress={HandleHistory}>
                <Image source={History ? list2 : list1} style={{width:30,height:30,alignSelf:'center'}}/>
                <Text style={{color:History ? "#DE3163" :'#000'}}>
                History
                </Text>
            </Pressable>
            <Pressable onPress={HandleMoney}>
                <Image source={Money ? wallet2 : wallet1} style={{width:30,height:30,alignSelf:'center'}}/>
                <Text style={{color:Money ? '#DE3163' : '#000'}}>
                Money
                </Text>
            </Pressable>
    </View>
  </View>
  

  
  );
}

export default BottumTab;
