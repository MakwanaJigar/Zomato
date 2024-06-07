import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TextInput, Pressable } from 'react-native';
import User from '../Assets/Home/man.png';
import Menu from '../Assets/Home/menu.png';
import SearchIMG from '../Assets/Home/search.png';

import Offer from '../Assets/Home/Offer.png';
import Discounts from '../Assets/Home/Discounts.png';

import Healthy from '../Assets/Home/Food/Healthy.png';
import Biryani from '../Assets/Home/Food/Biryani.png';
import Burger from '../Assets/Home/Food/Burger.png';
import Cake from '../Assets/Home/Food/Cake.png';
import Chicken from '../Assets/Home/Food/Chicken.png';
import Haleem from '../Assets/Home/Food/Haleem.png';
import Pizza from '../Assets/Home/Food/Pizza.png';
import Shawarma from '../Assets/Home/Food/Shawarma.png';

import Hotel1 from '../Assets/Home/Hotels/Hotel1.jpg';
import Hotel2 from '../Assets/Home/Hotels/Hotel2.jpg';
import Hotel3 from '../Assets/Home/Hotels/Hotel3.jpg';
import Hotel4 from '../Assets/Home/Hotels/Hotel4.jpg';
import Hotel5 from '../Assets/Home/Hotels/Hotel5.jpg';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';




const Home = () => {

    const navigation = useNavigation();

    const FoodDetails = () => {
        navigation.navigate("FoodMenu")
    }

    const TabMenu = () => {
        navigation.navigate("BottumTab")
    }

    const [Search, setSearch] = useState('')
    const handleSearch = (query) => {
        setSearch(query)
    }


    // .........CONST RESTRO LIST........

    const Restro = [
        {
            id: 1,
            RestroName: 'Nilkanth',
            food: 'Veg Only',
            rating: '★ 4.3',
            zomato: 'Zomato funds environmental projects to offset delivery carbon foodPrint',
            image: Hotel1
        },
        {
            id: 2,
            RestroName: 'Honest',
            food: 'Veg Only',
            rating: '★ 4.0',
            zomato: 'Zomato funds environmental projects to offset delivery carbon foodPrint',
            image: Hotel5
        }, {
            id: 3,
            RestroName: 'Legend',
            food: 'Veg Only',
            rating: '★ 3.5',
            zomato: 'Zomato funds environmental projects to offset delivery carbon foodPrint',
            image: Hotel4
        }, {
            id: 4,
            RestroName: 'Tilak',
            food: 'Veg Only',
            rating: '★ 4.0',
            zomato: 'Zomato funds environmental projects to offset delivery carbon foodPrint',
            image: Hotel3
        }, {
            id: 5,
            RestroName: 'Janpath',
            food: 'Veg Only',
            rating: '★ 5.0',
            zomato: 'Zomato funds environmental projects to offset delivery carbon foodPrint',
            image: Hotel1
        }, {
            id: 6,
            RestroName: 'Al Sahi',
            food: 'Non-Veg',
            rating: '★ 4.3',
            zomato: 'Zomato funds environmental projects to offset delivery carbon foodPrint',
            image: Hotel2
        }
    ]

    return (

        <ScrollView style={{ height: '100%', backgroundColor: '#FFF', padding: 5 }}>

            {/* ........ HOME HEADER SECTION....... */}
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomWidth: 0.2, height: 50 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    <Image source={User} style={{ height: 40, width: 40 }} />
                    <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 18 }}>
                        Jigar
                    </Text>
                </View>

                <TouchableOpacity onPress={TabMenu}>
                    <Image source={Menu} style={{ height: 30, width: 30 }} />
                </TouchableOpacity>


            </View>


            {/* ........SEARCH BAR SECTION........ */}

            <View style={{ alignItems: 'center', marginTop: 30, height: 40, width: '90%', borderColor: 'gray', borderWidth: 0.6, borderRadius: 10, alignSelf: 'center', flexDirection: 'row', paddingLeft: 10, columnGap: 15 }}>
                <Image source={SearchIMG} style={{ height: 20, width: 20 }} />
                <TextInput placeholder='Restaurant name Or A dish name..' placeholderTextColor={"gray"} style={{ width: '90%', color: '#000' }} 
                // value={Search}
                // onChangeText={handleSearch}
                />
            </View>


            {/* ..........OFFERS SECTION............ */}

            <View style={{ alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row', marginTop: 20 }}>

                <Image source={Offer} style={{ width: '45%', height: 150, objectFit: 'contain' }} />
                <Image source={Discounts} style={{ width: '45%', height: 150, objectFit: 'contain' }} />

            </View>



            {/* ........FOOD CATEGORY SECTION....... */}

            <View style={{ width: '98%', justifyContent: 'center' }}>

                <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 16 }}>
                    Eat whats makes you happy
                </Text>

                {/* ...........FOOD............. */}

                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20, width: '100%' }}>
                    <ScrollView>


                        <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', columnGap: 15 }}>

                            <TouchableOpacity>
                                <Image source={Healthy} style={{ width: 70, height: 70, objectFit: 'contain' }} />
                                <Text style={{ color: '#000', textAlign: 'center', fontSize: 14 }}>
                                    Healthy
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Image source={Biryani} style={{ width: 70, height: 70, objectFit: 'contain' }} />
                                <Text style={{ color: '#000', textAlign: 'center', fontSize: 14 }}>
                                    Biryani
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Image source={Pizza} style={{ width: 70, height: 70, objectFit: 'contain' }} />
                                <Text style={{ color: '#000', textAlign: 'center', fontSize: 14 }}>
                                    Pizza
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Image source={Haleem} style={{ width: 70, height: 70, objectFit: 'contain' }} />
                                <Text style={{ color: '#000', textAlign: 'center', fontSize: 14 }}>
                                    Haleem
                                </Text>
                            </TouchableOpacity>

                        </View>

                        <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', columnGap: 15 }}>

                            <TouchableOpacity>
                                <Image source={Chicken} style={{ width: 70, height: 70, objectFit: 'contain' }} />
                                <Text style={{ color: '#000', textAlign: 'center', fontSize: 14 }}>
                                    Chicken
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Image source={Burger} style={{ width: 70, height: 70, objectFit: 'contain' }} />
                                <Text style={{ color: '#000', textAlign: 'center', fontSize: 14 }}>
                                    Cake
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Image source={Cake} style={{ width: 70, height: 70, objectFit: 'contain' }} />
                                <Text style={{ color: '#000', textAlign: 'center', fontSize: 14 }}>
                                    Burger
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Image source={Shawarma} style={{ width: 70, height: 70, objectFit: 'contain' }} />
                                <Text style={{ color: '#000', textAlign: 'center', fontSize: 14 }}>
                                    Shawarma
                                </Text>
                            </TouchableOpacity>

                        </View>

                        <TouchableOpacity style={{ borderWidth: 0.5, borderRadius: 10, height: 25, alignItems: 'center', justifyContent: 'center', width: '100%', marginTop: 10 }}>
                            <Text style={{ color: '#000' }}>
                                See more
                            </Text>
                        </TouchableOpacity>
                    </ScrollView>

                </View>
            </View>




            {/* .........RESTAURANTS LIST ....... */}

            <View style={{ alignItems: 'center', justifyContent: 'center', width: '98%', marginTop: 30, gap: 20, marginBottom: '8%' }}>

                {Restro.map((item) => (
                    <Pressable
                        key={item.id}
                        style={{ width: '98%', height: 300, borderWidth: 0.5, marginBottom: 10 }}
                        onPress={() => FoodDetails(item)}
                    >
                        <Image
                            source={item.image}
                            style={{ height: 200, width: '100%', resizeMode: 'cover' }}
                        />

                        <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', width: '95%', marginHorizontal: 10 }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center', marginLeft: 10 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#000' }}>{item.RestroName}</Text>
                                <Text style={{ color: '#BBB' }}>{item.food}</Text>
                            </View>
                            <View style={{ backgroundColor: 'green', height: 30, width: 60, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: '#FFF' }}>{item.rating}</Text>
                            </View>
                        </View>

                        <View style={{ marginLeft: 10, marginTop: 10 }}>
                            <Text style={{ color: '#BBB' }}>{item.zomato}</Text>
                        </View>
                    </Pressable>
                ))}
                
            </View>

        </ScrollView>

    );
}

export default Home;
