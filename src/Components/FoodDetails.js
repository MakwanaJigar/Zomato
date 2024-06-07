import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import Back from '../Assets/FoodPage/back.png';
import { useNavigation } from '@react-navigation/native';
import ChickenBoneless from '../Assets/FoodPage/NonVegFood/ChickenBoneless.jpg';
import check from '../Assets/FoodPage/check.png';

const FoodDetails = ({route}) => {
  const { FoodName , rating , price , image} = route.params;

  const navigation = useNavigation()

  const [select, setSelect] = useState(!select)
  const [Paneer , setPaneer] = useState(!Paneer)
  const [Veggies , setVeggies] = useState(!Veggies)
  const [Mashroom , setMashroom] = useState(!Mashroom)
  const [Corn , setCorn] = useState(!Corn)
  const [ChilliPaneer , setChilliPaneer] = useState(!ChilliPaneer)
  const [PestoPaneer , setPestoPaneer] = useState(!PestoPaneer)

  const BackFoodMenu = () => {
    navigation.navigate("FoodMenu")
  }

  const GoToOrderPage = () => {
    navigation.navigate("OrderDone")
  }

  return (
    <View>

      {/* ...........TOPBAR BACK MENU....... */}

      <TouchableOpacity style={{ margin: 10 }} onPress={BackFoodMenu}>
        <Image source={Back} style={{ width: 30, height: 30 }} />
      </TouchableOpacity>

      <ScrollView style={{marginBottom:'15%'}}>

        {/* .......FOOD IMAGE........ */}
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Image source={image} style={{ width: '98%', height: 250, borderRadius: 25 }} />
        </View>

        {/* .......FOOD DETAIL...... */}
        <View style={{ width: '98%', alignItems: 'flex-start', justifyContent: 'center', borderBottomColor: 'gray', borderBottomWidth: 0.5, gap: 5 }}>
          <Text style={{ color: '#000', fontSize: 18, marginLeft: 10 }}>
            {FoodName}
          </Text>
          <Text style={{ color: 'green', fontSize: 15, marginLeft: 10 }}>
            {rating}
          </Text>
          <Text style={{ color: 'gray', fontSize: 15, width: '70%', marginBottom: 10, marginLeft: 10 }}>
            Veg preparation Spring mix , plant based , organic
          </Text>
          <Text style={{ color: '#000', fontSize: 18, marginLeft: 10,fontWeight:'bold' ,marginBottom:10}}>
          ₹{price}.00
          </Text>
        </View>

        {/* ........ADD ON .......... */}

        <Text style={{ color: '#000', fontSize: 18, marginLeft: 10, fontWeight: 'bold' }}>Add On</Text>
        <Text style={{ color: 'gray', fontSize: 13, marginLeft: 10 }}>You can choose up to 4 options </Text>
        <View style={{ marginBottom: '20%' }}>


          {/* .......add items list..... */}
          <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', margin: 10 }}>
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <View style={{ height: 15, width: 15, borderWidth: 1, borderColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ borderRadius: 50, backgroundColor: 'green', height: 10, width: 10 }}></View>
              </View>
              <Text style={{ color: 'gray', fontWeight: 'bold' }}>Pesto Paneer</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ color: 'gray' }}> ₹ 40 </Text>
              <TouchableOpacity onPress={() => setPestoPaneer(!PestoPaneer)}>
                <View style={{ width: 20, height: 20, borderWidth: 1, borderColor: PestoPaneer ? 'gray' : '#FFF', backgroundColor: PestoPaneer ? '#FFF' : 'green' ,alignItems:'center',justifyContent:'center'}}>
                  <Image source={check} style={{height:15,width:15}}/>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', margin: 10 }}>
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <View style={{ height: 15, width: 15, borderWidth: 1, borderColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ borderRadius: 50, backgroundColor: 'green', height: 10, width: 10 }}></View>
              </View>
              <Text style={{ color: 'gray', fontWeight: 'bold' }}>Paneer</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ color: 'gray' }}> ₹ 40 </Text>
              <TouchableOpacity onPress={() => setPaneer(!Paneer)}>
                <View style={{ width: 20, height: 20, borderWidth: 1, borderColor: Paneer ? 'gray' : '#FFF', backgroundColor: Paneer ? '#FFF' : 'green' ,alignItems:'center',justifyContent:'center'}}>
                  <Image source={check} style={{height:15,width:15}}/>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', margin: 10 }}>
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <View style={{ height: 15, width: 15, borderWidth: 1, borderColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ borderRadius: 50, backgroundColor: 'green', height: 10, width: 10 }}></View>
              </View>
              <Text style={{ color: 'gray', fontWeight: 'bold' }}>Extra Veggies</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ color: 'gray' }}> ₹ 40 </Text>
              <TouchableOpacity onPress={() => setVeggies(!Veggies)}>
                <View style={{ width: 20, height: 20, borderWidth: 1, borderColor: Veggies ? 'gray' : '#FFF', backgroundColor: Veggies ? '#FFF' : 'green' ,alignItems:'center',justifyContent:'center'}}>
                  <Image source={check} style={{height:15,width:15}}/>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', margin: 10 }}>
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <View style={{ height: 15, width: 15, borderWidth: 1, borderColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ borderRadius: 50, backgroundColor: 'green', height: 10, width: 10 }}></View>
              </View>
              <Text style={{ color: 'gray', fontWeight: 'bold' }}>Mushroom</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ color: 'gray' }}> ₹ 40 </Text>
              <TouchableOpacity onPress={() => setMashroom(!Mashroom)}>
                <View style={{ width: 20, height: 20, borderWidth: 1, borderColor: Mashroom ? 'gray' : '#FFF', backgroundColor: Mashroom ? '#FFF' : 'green' ,alignItems:'center',justifyContent:'center'}}>
                  <Image source={check} style={{height:15,width:15}}/>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', margin: 10 }}>
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <View style={{ height: 15, width: 15, borderWidth: 1, borderColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ borderRadius: 50, backgroundColor: 'green', height: 10, width: 10 }}></View>
              </View>
              <Text style={{ color: 'gray', fontWeight: 'bold' }}>Corn</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ color: 'gray' }}> ₹ 40 </Text>
              <TouchableOpacity onPress={() => setCorn(!Corn)}>
                <View style={{ width: 20, height: 20, borderWidth: 1, borderColor: Corn ? 'gray' : '#FFF', backgroundColor: Corn ? '#FFF' : 'green' ,alignItems:'center',justifyContent:'center'}}>
                  <Image source={check} style={{height:15,width:15}}/>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', margin: 10 }}>
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <View style={{ height: 15, width: 15, borderWidth: 1, borderColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ borderRadius: 50, backgroundColor: 'green', height: 10, width: 10 }}></View>
              </View>
              <Text style={{ color: 'gray', fontWeight: 'bold' }}>Chilli Paneer</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ color: 'gray' }}> ₹ 40 </Text>
              <TouchableOpacity onPress={() => setChilliPaneer(!ChilliPaneer)}>
                <View style={{ width: 20, height: 20, borderWidth: 1, borderColor: ChilliPaneer ? 'gray' : '#FFF', backgroundColor: ChilliPaneer ? '#FFF' : 'green' ,alignItems:'center',justifyContent:'center'}}>
                  <Image source={check} style={{height:15,width:15}}/>
                </View>
              </TouchableOpacity>
            </View>
          </View>

        </View>
      </ScrollView>


      <TouchableOpacity style={{position:'absolute',height:'10%',width:'100%',alignItems:'center',justifyContent:'center',alignSelf:'center',borderRadius:10,backgroundColor:'#ED2939',bottom:50}} onPress={() => navigation.navigate("OrderDone",{
        FoodName,
        price,
      })}>
        <Text style={{color:'#FFF',fontSize:18,fontWeight:'bold'}}>Add</Text>
      </TouchableOpacity>
     



    </View>
  );
}

export default FoodDetails;
