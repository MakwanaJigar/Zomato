import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import Successfully from '../Assets/check.png';

const OTP = ({route}) => {
  // const {OTPSend} = route.params;
  const navigation = useNavigation()

//   // .....GENERATE OTP
//   const OTPSend = (length) => {
//     const characters = '1234567890';
//     let result = '';
//     for (let i = 0; i < length; i++) {
//         result += characters.charAt(Math.floor(Math.random() * characters.length));
//     }
//     return result;
// }
// const RandomOTP = OTPSend(4)
// Alert.alert(RandomOTP);



  const [Success, setSuccess] = useState(false)

  const GoToHome = () => {
    setSuccess(true)
    setTimeout(() => {
      
      navigation.navigate("BottumTab")
    }, 1000);
  }

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: Success ? '#FFF' : '#DE3163', width: '100%', rowGap: 50 }}>

      <View style={{ width: 98, flexDirection: 'row', columnGap: 10, alignItems: 'center', justifyContent: 'center' }}>

        <TextInput placeholder='0' placeholderTextColor={"gray"} style={{ height: 50, width: '50%', textAlign: 'center', fontSize: 24, borderRadius: 15, backgroundColor: '#FFF' ,color:'#000'}} maxLength={1}/>
        <TextInput placeholder='0' placeholderTextColor={"gray"} style={{ height: 50, width: '50%', textAlign: 'center', fontSize: 24, borderRadius: 15, backgroundColor: '#FFF' ,color:'#000'}} maxLength={1}/>
        <TextInput placeholder='0' placeholderTextColor={"gray"} style={{ height: 50, width: '50%', textAlign: 'center', fontSize: 24, borderRadius: 15, backgroundColor: '#FFF' ,color:'#000'}} maxLength={1}/>
        <TextInput placeholder='0' placeholderTextColor={"gray"} style={{ height: 50, width: '50%', textAlign: 'center', fontSize: 24, borderRadius: 15, backgroundColor: '#FFF',color:'#000' }}maxLength={1} />

      </View>

      {/* ........VERIFY BUTTON......... */}

      <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 10, backgroundColor: '#000', width: '65%', height: 50 }} onPress={GoToHome}>
        <Text style={{ color: '#FFF', fontSize: 18 }}>Verify</Text>
      </TouchableOpacity>



      {/* .......SUCCESSFULLY REGISTER....... */}
      {
        Success ? <View style={{ alignItems: 'center', justifyContent: 'center', height: 200, width: '80%', backgroundColor: '#FFF', zIndex: 1, position: 'absolute', borderRadius: 10 }}>

          <Image source={Successfully} style={{ width: 50, height: 50 }} />
          <Text style={{ fontSize: 28, color: '#000', fontWeight: 'bold' }}>
            Successfully !!
          </Text>

        </View>
          : null
      }

    </View>
  );
}

export default OTP;
