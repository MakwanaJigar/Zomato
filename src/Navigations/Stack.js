import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screens/Login';
import OTP from '../Screens/OTP';
import SplashSrc from '../Screens/SplashSrc';
import Home from '../Screens/Home';
import BottumTab from '../Components/BottumTab';
import FoodMenu from '../Components/FoodMenu';
import FoodDetails from '../Components/FoodDetails';
import OrderDone from '../Components/OrderDone';

const Stack = createStackNavigator();
const StackCom = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="SplashSrc" component={SplashSrc}  options={{ headerShown: false }} initialRouteName="SplashScreen" headerMode="none"/>
        <Stack.Screen name="Login" component={Login}  options={{ headerShown: false }}/>
        <Stack.Screen name="OTP" component={OTP}  options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={Home}  options={{ headerShown: false }}/>
        <Stack.Screen name="BottumTab" component={BottumTab}  options={{ headerShown: false }}/>
        <Stack.Screen name="FoodMenu" component={FoodMenu}  options={{ headerShown: false }}/>
        <Stack.Screen name="FoodDetails" component={FoodDetails}  options={{ headerShown: false }}/>
        <Stack.Screen name="OrderDone" component={OrderDone}  options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackCom;
