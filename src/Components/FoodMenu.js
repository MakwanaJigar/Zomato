import React, { useState } from 'react';
import { View, Text, Image, Pressable, FlatList, TouchableOpacity, Switch, Alert } from 'react-native';
import BackArrow from '../Assets/FoodPage/back.png';
import { useNavigation } from '@react-navigation/native';

import VegBiriyani from '../Assets/FoodPage/VegFood/VegBiriyani.jpg';
import DalMakhni from '../Assets/FoodPage/VegFood/DalMakhni.jpg';
import PaneerChilly from '../Assets/FoodPage/VegFood/PaneerChilly.jpg';
import PneerTikka from '../Assets/FoodPage/VegFood/PneerTikka.jpg';
import AaluTikki from '../Assets/FoodPage/VegFood/AaluTikki.jpg';

import ChickenBoneless from '../Assets//FoodPage/NonVegFood/ChickenBoneless.jpg';
import ChickenMasala from '../Assets/FoodPage/NonVegFood/ChickenMasala.jpg';
import CrabMasala from '../Assets/FoodPage/NonVegFood/CrabMasala.jpg';
import FishCurry from '../Assets/FoodPage/NonVegFood/FishCurry.jpg';
import FishFRY from '../Assets/FoodPage/NonVegFood/FishFRY.jpg';
import LobsterFRY from '../Assets/FoodPage/NonVegFood/LobsterFRY.jpg';
import MuttonMughlai from '../Assets/FoodPage/NonVegFood/MuttonMughlai.jpg';
import { ScrollView } from 'react-native-gesture-handler';

const FoodMenu = () => {
  const navigation = useNavigation()

  const [addItem, setAddItem] = useState(false)
  const [quantities, setQuantities] = useState({});

  const handleAdd = (productId) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 0) + 1
    }));
    setAddItem(true)
  };

  const handleMinus = (productId) => {
    if (quantities[productId] > 0) {
      setQuantities(prevQuantities => ({
        ...prevQuantities,
        [productId]: prevQuantities[productId] - 1
      }));
      setAddItem(false)
    }
  };



  const [Veg, setVeg] = useState(true);
  const [NonVeg, setNonVeg] = useState(false)

  const HandleVeg = () => {
    setVeg(true)
    setNonVeg(false)
  }

  const HandleNonVeg = () => {
    setVeg(false)
    setNonVeg(true)
  }

  const GoToHome = () => {
    navigation.navigate("Home")
  }


  // ........VEG FOOD LIST
  const VegFood = [
    {
      id: 1,
      FoodName: "Veg Biriyani",
      rating: '★ 30 Ratings',
      price: 190,
      image: VegBiriyani
    },
    {
      id: 2,
      FoodName: "Paneer Tikka",
      rating: '★ 45 Ratings',
      price: 320,
      image: PneerTikka
    }, {
      id: 3,
      FoodName: "Paneer Chilly",
      rating: '★ 28 Ratings',
      price: 390,
      image: PaneerChilly
    }, {
      id: 4,
      FoodName: "Dal Makhni",
      rating: '★ 40 Ratings',
      price: 250,
      image: DalMakhni
    }, {
      id: 5,
      FoodName: "Aalu Tikki",
      rating: '★ 28 Ratings',
      price: 85,
      image: AaluTikki
    }, {
      id: 6,
      FoodName: "Veg Biriyani",
      rating: '★ 30 Ratings',
      price: 190,
      image: PaneerChilly
    },
    {
      id: 7,
      FoodName: "Paneer Tikka",
      rating: '★ 45 Ratings',
      price: 320,
      image: PneerTikka
    }, {
      id: 8,
      FoodName: "Paneer Chilly",
      rating: '★ 28 Ratings',
      price: 390,
      image: PaneerChilly
    },
  ]

  //NON-VEG FOOD LIST.......

  const NonVegFood = [
    {
      id: 1,
      FoodName: "Chicken Boneless",
      rating: '★ 30 Ratings',
      price: 190,
      image: ChickenBoneless
    },
    {
      id: 2,
      FoodName: "Chicken Masala",
      rating: '★ 45 Ratings',
      price: 320,
      image: ChickenMasala
    }, {
      id: 3,
      FoodName: "Crab Masala",
      rating: '★ 28 Ratings',
      price:390,
      image: CrabMasala
    }, {
      id: 8,
      FoodName: "Mutton Mughlai",
      rating: '★ 28 Ratings',
      price: 390,
      image: MuttonMughlai
    }, {
      id: 5,
      FoodName: "Fish Curry",
      rating: '★ 28 Ratings',
      price: 85,
      image: FishCurry
    }, {
      id: 6,
      FoodName: "Fish FRY",
      rating: '★ 30 Ratings',
      price: 190,
      image: FishFRY
    },
    {
      id: 7,
      FoodName: "Lobster FRY",
      rating: '★ 45 Ratings',
      price: 320,
      image: LobsterFRY
    }
  ]


  const GoToOrderPage = () => {
    
    
  }


  return (
    <View style={{ height: '100%', width: '100%' }}>

      {/* ........BACK ARROW....... */}
      <Pressable style={{ margin: 10 }} onPress={GoToHome}>
        <Image source={BackArrow} style={{ width: 30, height: 30 }} />
      </Pressable>



      <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 5 }}>

        <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 24 }}>
          Eat Healthy
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ height: 20, width: 20, borderWidth: 1, borderColor: Veg ? 'green' : 'red', alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ borderRadius: 50, backgroundColor: Veg ? 'green' : 'red', height: 10, width: 10 }}></View>
          </View>
          <Text style={{ color: '#BBB' }}> {Veg ? "100% Veg-Only , Wraps , Beverages" : "100% Non-veg , Wraps , Beverages"} </Text>
        </View>
        <Text style={{ color: '#BBB' }}>Multi Brands Kitchen</Text>

      </View>

      {/*  ......MAIN CONTENT....... */}

      <View style={{ marginBottom: '40%' }}>

        <View style={{ alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row', height: 30, width: '95%', alignSelf: 'center', marginBottom: 5 }}>

          <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', borderWidth: 0.5, borderRadius: 10, width: '49%', height: 30, backgroundColor: Veg ? "green" : '#FFF' }} onPress={HandleVeg}>
            <Text style={{ color: Veg ? "#FFF" : '#000', fontWeight: 'bold' }}>
              Veg
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', borderWidth: 0.5, borderRadius: 10, width: '49%', height: 30, backgroundColor: NonVeg ? "green" : '#FFF' }} onPress={HandleNonVeg}>
            <Text style={{ color: NonVeg ? "#FFF" : '#000', fontWeight: 'bold' }}>
              Non-Veg
            </Text>
          </TouchableOpacity>
        </View>

        {
          Veg ?
            <ScrollView>
              {VegFood.map((item) => (
                <Pressable key={item.id} style={{ flexDirection: 'row', padding: 20, borderBottomWidth: 0.4, marginBottom: '5%' }} onPress={() => navigation.navigate("FoodDetails",{
                  FoodName : item.FoodName,
                  price : item.price,
                  image : item.image,
                  rating : item.rating
                })}>
                  <View style={{ flex: 1, marginLeft: 10, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000' }}>{item.FoodName}</Text>
                    <Text style={{ color: 'green' }}>{item.rating}</Text>
                    <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 18 }}>₹{item.price}.00</Text>
                  </View>
                  <View>
                    <Image source={item.image} style={{ width: 120, height: 120, borderRadius: 15 }} />
                    <View style={{ alignItems: 'center', justifyContent: 'space-around', height: 30, width: 100, backgroundColor: '#FFECEC',borderColor:'#DE3565',borderWidth:0.5, position: 'absolute', bottom: -10, borderRadius: 10, flexDirection: 'row', alignSelf: 'center', zIndex: 1 }}>
                      <TouchableOpacity onPress={() => handleMinus(item.id)}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20,color:'#DE3565' }}>
                          -
                        </Text>
                      </TouchableOpacity>
                      <Text style={{ fontWeight: 'bold',color:'#DE3565' }}>{quantities[item.id] > 0 ? quantities[item.id] : "Add"}</Text>
                      <TouchableOpacity onPress={() => handleAdd(item.id)}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18,color:'#DE3565' }}>
                          +
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Pressable>
              ))}
            </ScrollView>
            :
            <ScrollView>
              {NonVegFood.map((item) => (
                <Pressable key={item.id} style={{ flexDirection: 'row', padding: 20, borderBottomWidth: 0.4, marginBottom: '5%' }} onPress={() => navigation.navigate("FoodDetails",{
                  FoodName : item.FoodName,
                  price : item.price,
                  image : item.image,
                  rating : item.rating
                })}>
                  <View style={{ flex: 1, marginLeft: 10, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000' }}>{item.FoodName}</Text>
                    <Text style={{ color: 'green' }}>{item.rating}</Text>
                    <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 18 }}>₹{item.price}.00</Text>
                  </View>
                  <View>
                    <Image source={item.image} style={{ width: 120, height: 120, borderRadius: 15 }} />
                    <View style={{ alignItems: 'center', justifyContent: 'space-around', height: 30, width: 100, backgroundColor: '#FFECEC',borderColor:'#DE3565',borderWidth:0.5, position: 'absolute', bottom: -10, borderRadius: 10, flexDirection: 'row', alignSelf: 'center', zIndex: 1 }}>
                      <TouchableOpacity onPress={() => handleMinus(item.id)}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20,color:'#DE3565' }}>
                          -
                        </Text>
                      </TouchableOpacity>
                      <Text style={{ fontWeight: 'bold' ,color:'#DE3565' }}>{quantities[item.id] > 0 ? quantities[item.id] : "Add"}</Text>
                      <TouchableOpacity onPress={() => handleAdd(item.id)}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 ,color:'#DE3565' }}>
                          +
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Pressable>
              ))}
            </ScrollView>
        }




      </View>


      {/* ......ADD ITEM BUTTON....... */}
{/* 
      {
        addItem ?
          <TouchableOpacity style={{ backgroundColor: '#DE3565', position: 'absolute', zIndex: 1, bottom: 10, alignSelf: 'center', height: '8%', width: '90%', alignItems: 'center', justifyContent: 'center', borderRadius: 10 }} >
            <Text style={{ color: '#FFF', fontSize: 16, fontWeight: 'bold' }}>
              Add Item
            </Text>
          </TouchableOpacity>
          :
          null
      } */}


    </View>
  );
}

export default FoodMenu;
