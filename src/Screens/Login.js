import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Alert, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import EmailIMG from '../Assets/email.png'
import GoogleIMG from '../Assets/google.png'
import FacebookIMG from '../Assets/facebook.png';
import { useNavigation } from '@react-navigation/native';

const Login = () => {

    // const OTPSend = (length) => {
    // //     const characters = '1234567890';
    // //     let result = '';
    // //     for (let i = 0; i < length; i++) {
    // //         result += characters.charAt(Math.floor(Math.random() * characters.length));
    // //     }
    // //     return result;
    // // }

    // const RandomOTP = OTPSend(4)
    // console.log(RandomOTP);


    const navigation = useNavigation();


    const [number, setNumber] = useState([])
    const [error, setError] = useState('');

    const handlePhoneNumberChange = (value) => {
        setNumber(value);
    };


    const handleSubmit = () => {
        if (number == '') {
            setError('Phone number cannot be empty');
        } else {
            setError('');
            // const RandomOTP = OTPSend(4)
            // console.log(RandomOTP);
            // Alert.alert('Phone number:', number);
            navigation.navigate("OTP")
            setNumber('')
        }
    };


    const handleClick = () => {
        Alert.alert('THIS IS AN ALERT BUTTON')
    }

    return (

        <KeyboardAvoidingView>


            <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#ABC', height: '100%' }}>

                {/* .......MAIN CONTENT....... */}


                {/* ........NUMBER INPUT FIELD.....OR BUTTON..... */}
                <View style={{ width: '95%', alignItems: 'center', justifyContent: 'center', rowGap: 20 }}>
                    <TextInput maxLength={10} placeholder='ENTER YOUR PHONE NUMBER' textContentType='numeric' placeholderTextColor={error ? "red" : "gray"} style={{ width: '100%', height: 60, backgroundColor: '#FFF', borderRadius: 10, padding: 10, color: 'gray', borderWidth: error ? 5 : null, borderColor: error ? "red" : null }} value={number} onChangeText={handlePhoneNumberChange} />
                    {/* {error ? <Text style={{ color: '#FFF',fontSize:24,fontWeight:'bold' }}>{error}</Text> : null} */}
                    <TouchableOpacity style={{ width: '100%', alignItems: 'center', justifyContent: 'center', height: 60, backgroundColor: '#000', borderRadius: 10 }} onPress={handleSubmit}>
                        <Text style={{ color: '#FFF', fontSize: 18 }}>
                            Send OTP
                        </Text>
                    </TouchableOpacity>

                    <Text style={{ color: '#FFF', fontSize: 20 }}>
                        -:  Or  :-
                    </Text>

                </View>

                {/* ..........LOGIN WITH OTHER WAYS...... */}

                <View style={{ width: '95%', alignItems: 'center', justifyContent: 'center', rowGap: 20, marginTop: 30 }}>


                    <Pressable style={{ width: '100%', alignItems: 'center', justifyContent: 'center', height: 60, backgroundColor: '#FFF', borderRadius: 10, flexDirection: 'row', columnGap: 20 }} onPress={handleClick}>

                        <Image source={EmailIMG} style={{ width: 30, height: 30 }} />
                        <Text style={{ color: '#000', fontSize: 18 }}>
                            Continue with Email
                        </Text>
                    </Pressable>

                    {/* ......GOOGLE AND FACEBOOK BUTTON........ */}

                    <View style={{ flexDirection: 'row', columnGap: 5 }}>
                        <Pressable style={{ width: '50%', alignItems: 'center', justifyContent: 'space-evenly', height: 60, backgroundColor: '#FFF', borderRadius: 10, flexDirection: 'row', }} onPress={handleClick}>

                            <Image source={FacebookIMG} style={{ width: 30, height: 30 }} />
                            <Text style={{ color: '#000', fontSize: 18 }}>
                                Facebook
                            </Text>
                        </Pressable>

                        <Pressable style={{ width: '50%', alignItems: 'center', justifyContent: 'space-evenly', height: 60, backgroundColor: '#FFF', borderRadius: 10, flexDirection: 'row', }} onPress={handleClick}>

                            <Image source={GoogleIMG} style={{ width: 30, height: 30 }} />
                            <Text style={{ color: '#000', fontSize: 18 }}>
                                Google
                            </Text>
                        </Pressable>

                    </View>

                </View>


            </View>

        </KeyboardAvoidingView>
    );
}

export default Login;
