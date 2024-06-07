import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Pressable, Alert, Modal } from 'react-native';
import clock from '../Assets/OrderPage/clock.png';
import location from '../Assets/OrderPage/location.png';
import discount from '../Assets/OrderPage/discount.png';
import leaf from '../Assets/OrderPage/leaf.png';
import Video from 'react-native-video';


import amazonpayIMG from '../Assets/OrderPage/amazonPay.png';
import gPayIMG from '../Assets/OrderPage/gPay.png';
import paytmIMg from '../Assets/OrderPage/paytm.png';
import close from '../Assets/OrderPage/close.png';
import Animation from '../Assets/OrderPage/Animation.mp4';
import { useNavigation } from '@react-navigation/native';

const OrderDone = ({ route }) => {

  const { FoodName, price } = route.params;


  const navigation = useNavigation()

  const taxes = 5
  const delivery = 50
  const GrandTotal = price + taxes + delivery

  const [modalVisible, setModalVisible] = useState(false);

  const [orderSuccess, setorderSuccess] = useState(false);

  const [gpay, setGPay] = useState(true)
  const [payTM, setPayTM] = useState(false)
  const [amazonPay, setAmazonPay] = useState(false)

  const [Add, setAdd] = useState(1)

  const handleMinusQuantity = () => {
    if (Add >= 2) {
      setAdd(Add - 1)
    }
  }

  const handleAddQuantity = () => {
    setAdd(Add + 1)
  }

  const handleSuccess = () => {
    setTimeout(() => {
      navigation.navigate("FoodMenu")
    }, 1500);
    setorderSuccess(true)
  }


  const handleGPAY = () => {
    setGPay(true)
    setPayTM(false)
    setAmazonPay(false)
    setModalVisible(false)
  }
  const handlePAYTM = () => {
    setGPay(false)
    setPayTM(true)
    setAmazonPay(false)
    setModalVisible(false)
  }
  const handleAMAZONPAY = () => {
    setGPay(false)
    setPayTM(false)
    setAmazonPay(true)
    setModalVisible(false)
  }


  return (
    <ScrollView style={{ height: '100%', width: '100%' }}>

      <Pressable style={{ alignItems: 'center', justifyContent: 'center', zIndex: 1 }} onPress={() => navigation.navigate("FoodMenu")}>
        <View style={{ alignItems: 'center', justifyContent: 'center', zIndex: 1, backgroundColor: '#BBB', borderRadius: 50, height: 50, width: 50 }}>
          <Image source={close} style={{ width: 30, height: 30 }} />
        </View>
      </Pressable>

      <View style={{ marginTop: '7%', borderTopRightRadius: 30, borderTopLeftRadius: 30, backgroundColor: '#FFF', marginBottom: 10 }}>


        {/* .......LOCATION AND TIME......... */}

        <View style={{ alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row', marginTop: 20,marginBottom:10 }}>
          <Image source={location} style={{ width: 20, height: 20 }} />
          <Text style={{ color: '#000', width: '80%' }}>12/Harshidhh society Radhanpur Road , Mehsana-384002</Text>
        </View>

        <View style={{ alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row' }}>
          <Image source={clock} style={{ width: 20, height: 20 }} />
          <Text style={{ color: '#000', width: '80%' }}>Delivery in 42 mins</Text>
        </View>

        {/* .........SELECTED FOOD ITEMS ..........*/}

        <View style={{ alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row' }}>

          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
            <View style={{ backgroundColor: '#BBB', borderRadius: 50, height: 10, width: 10 }}></View>
            <Text style={{ color: '#000', fontSize: 18, fontWeight: 'bold' }}>
              {FoodName}
            </Text>
          </View>

          <View style={{ alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row', backgroundColor: '#FFDDDD', height: 40, width: 80, borderRadius: 10 }}>
            <TouchableOpacity onPress={handleMinusQuantity}>
              <Text style={{ color: "#000", fontWeight: 'bold', fontSize: 22 }}> - </Text>
            </TouchableOpacity>
            <Text style={{ color: "#000", fontWeight: 'bold' }}> {Add} </Text>
            <TouchableOpacity onPress={handleAddQuantity}>
              <Text style={{ color: "#000", fontWeight: 'bold', fontSize: 18 }}> + </Text>
            </TouchableOpacity>
          </View>

        </View>

        <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
          <Text style={{ color: '#000', fontWeight: '400', marginLeft: 45 }}>
               {price}.00
          </Text>
          <Text style={{ color: '#000', fontWeight: '400', marginRight: 50 }}>
            ₹ {price}.00
          </Text>
        </View>



        {/* ............OFFERS............ */}

        <View style={{ marginLeft: 10, marginTop: 20 }}>
          <Text style={{ color: '#000', fontSize: 18, fontWeight: 'bold' }}>
            Offers
          </Text>
          <View>
            <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
              <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                <Image source={discount} style={{ width: 25, height: 25 }} />
                <Text style={{ color: '#000' }}>Select a Promo Code</Text>
              </View>
              <Pressable onPress={() => Alert.alert("Hello")} style={{ marginRight: 10 }}>
                <Text style={{ color: '#DE3565' }}>View Offers</Text>
              </Pressable>
            </View>
            <Text style={{ color: '#BBB', fontSize: 12, marginLeft: 25 }}>Save ₹50 with code ZOMSAFETY</Text>
          </View>
        </View>

        {/* ............TOTAL OF FOOD ITEMS.......... */}

        <View style={{ alignSelf: 'center', width: '95%', height: 200, borderColor: '#DE3565', borderWidth: 0.4, backgroundColor: '#FFFFE0', marginTop: '5%', justifyContent: 'center' }}>

          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 10 }}>
            <Text style={{ color: '#BBB' }}>Item total</Text>
            <Text style={{ color: '#BBB' }}>₹ {price}.00</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 10 }}>
            <Text style={{ color: '#BBB' }}>Delivery Charge</Text>
            <Text style={{ color: '#BBB' }}>₹{delivery}.00</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 10 }}>
            <Text style={{ color: '#BBB' }}>Taxes</Text>
            <Text style={{ color: '#BBB' }}>₹{taxes}.00</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 10 }}>
            <Text style={{ color: '#000', fontSize: 18, fontWeight: 'bold' }}>Grand Total</Text>
            <Text style={{ color: '#000', fontSize: 15, fontWeight: 'bold' }}>₹ {GrandTotal}.00</Text>
          </View>

        </View>


        {/* ...........YOUR DETAILS........ */}
        <View style={{ margin: 10 }}>

          <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 15 }}>Your Details</Text>
            <Pressable>
              <Text style={{ color: '#DE3565', fontWeight: 400, fontSize: 15 }}>Change</Text>
            </Pressable>
          </View>
          <Text style={{ color: '#AAA', marginTop: 10 }}>
            Jigar Makwana, 9236547989
          </Text>

        </View>


        {/* .......CLIMATE CONSCIOUS DELIVERY...... */}

        <View style={{ margin: 10 }}>
          <View style={{ alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', columnGap: 10 }}>
            <Image source={leaf} style={{ height: 30, width: 30 }} />
            <Text style={{ color: '#000', fontWeight: 'bold' }}>
              CLIMATE CONSCIOUS DELIVERY
            </Text>
          </View>
          <Text style={{ color: '#AAA', width: '95%' }}>
            We fund environmental projects to offset the carbon footprint of our deliveris.
          </Text>
        </View>

        <View style={{ margin: 10, borderBottomColor: '#BBB', borderBottomWidth: 0.5 }}>

          <Text style={{ color: 'red', width: '95%', marginBottom: 10 }}>
            Orders once placed cannoot be cancelled and are non-refundable.
          </Text>
        </View>


        {/* .......BUTTONS......  */}

        {/*  */}
        <View style={{ alignItems: 'center', justifyContent: 'space-around', width: '100%', flexDirection: 'row' }}>

          <Pressable onPress={() => setModalVisible()}>

            <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', gap: 10 }}>
              <Image source={gpay ? gPayIMG : null || amazonPay ? amazonpayIMG : null || payTM ? paytmIMg : null} style={{ width: 30, height: 30 }} />
              <Text style={{ color: "#000", fontSize: 15 }}>Pay Using</Text>
            </View>
            <Text style={{ color: "#000", fontSize: 18, fontWeight: 'bold' }}>{gpay ? "Google pay" : null || amazonPay ? "Amazon Pay" : null || payTM ? "PayTM" : null}</Text>

          </Pressable>

          <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row', height: 70, width: '60%', backgroundColor: '#DE3565', borderRadius: 10 }} onPress={handleSuccess}>
            <View style={{ justifyContent: 'center' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#FFF' }}>₹ {GrandTotal}.00</Text>
              <Text>Total</Text>
            </View>
            <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#FFF' }}>Place Order </Text>
          </TouchableOpacity>

        </View>


        {/* ........MODAL......... */}

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >

          <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
          >

            <View style={{
              width: '90%',
              backgroundColor: '#FFF',
              borderRadius: 30,
              padding: 20,
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}>

              <Pressable style={{ alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row', width: '90%', backgroundColor: '#FFF', borderBottomWidth: 0.5, borderBottomColor: '#BBB', height: 70 }} onPress={handleGPAY}>
                <Image source={gPayIMG} style={{ width: 50, height: 50 }} />
                <Text style={{ color: '#000', fontWeight: 'bold' }}>Google Pay UPI</Text>
              </Pressable>

              <Pressable style={{ alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row', width: '90%', backgroundColor: '#FFF', borderBottomWidth: 0.5, borderBottomColor: '#BBB', height: 70 }} onPress={handleAMAZONPAY}>
                <Image source={amazonpayIMG} style={{ width: 50, height: 50 }} />
                <Text style={{ color: '#000', fontWeight: 'bold' }}>Amazon Pay UPI</Text>
              </Pressable>

              <Pressable style={{ alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row', width: '90%', backgroundColor: '#FFF', height: 70 }} onPress={handlePAYTM}>
                <Image source={paytmIMg} style={{ width: 50, height: 50 }} />
                <Text style={{ color: '#000', fontWeight: 'bold' }}>PayTM Pay UPI</Text>
              </Pressable>


            </View>

          </View>

        </Modal>


        {/*  .............CONFIRM ORDER...........*/}

        <Modal
          animationType="slide"
          transparent={true}
          visible={orderSuccess}
          onRequestClose={() => {
            setModalVisible(!orderSuccess);
          }}
        >

          <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
          >

            <View style={{
              width: '90%',
              backgroundColor: '#FFF',
              borderRadius: 30,
              padding: 10,
              alignItems: 'center',
              justifyContent: 'center',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}>

              <Video
                source={Animation}
                // style={styles.backgroundVideo}
                controls={false}
                resizeMode="cover"
                onError={(error) => console.log('Video Error: ', error)}
                style={{ height: '30%', width: '30%' }}
              />
              <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 24 }}>Order Placed Successfully.</Text>

            </View>

          </View>

        </Modal>


      </View>

    </ScrollView>
  );
}

export default OrderDone;
