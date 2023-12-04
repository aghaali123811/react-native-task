import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SplashScreen from '../screens/splash/SplashScreen';
import Colors from '../common/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from '../screens/home/HomeScreen';
import ProductDetailScreen from '../screens/productDetail/ProductDetailScreen';
import CartScreen from '../screens/cart/CartScreen';

const MainStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = props => {
  return (
    <>
      <NavigationContainer>
        <MainStack.Navigator screenOptions={{headerShown: false}}>
          <MainStack.Screen name="SplashScreen" component={SplashScreen} />
          <MainStack.Screen name="HomeScreen">
            {props => <MyTabs {...props} />}
          </MainStack.Screen>
        </MainStack.Navigator>
      </NavigationContainer>
    </>
  );
};

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="NotificationScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'HomeScreen',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons
              name="notifications"
              color={Colors.primaryBlack}
              size={22}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProductDetailScreen"
        component={ProductDetailScreen}
        options={{
          tabBarLabel: 'ProductDetailScreen',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons
              name="notifications"
              color={Colors.primaryBlack}
              size={22}
            />
          ),
        }}
      />
       <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons
              name="notifications"
              color={Colors.primaryBlack}
              size={22}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Navigation;
