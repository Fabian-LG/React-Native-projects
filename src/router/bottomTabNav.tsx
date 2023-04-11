import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import MenuScreen from '../screens/MenuScreen'
import ShoppingCartStack from './ShoppingCartStack'
import Entypo from 'react-native-vector-icons/Entypo'
import HomeStack from './HomeStack'

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarInactiveTintColor: '#ffbd7d',
            tabBarActiveTintColor: '#e47911',
            tabBarShowLabel: false,}}>
            <Tab.Screen 
            component={HomeStack} 
            name="home"
            options={{
                tabBarIcon: ({color}) => (
                    <Entypo name="home" color={color} size={25} />
                ), }}/>
            <Tab.Screen 
            component={HomeScreen} 
            name="profile" 
            options={{
                tabBarIcon: ({color}) => (
                    <Entypo name="user" color={color} size={25} />
                ), }} />
            <Tab.Screen 
            component={ShoppingCartStack} 
            name="shoppingCart" 
            options={{
                tabBarIcon: ({color}) => (
                    <Entypo name="shopping-cart" color={color} size={25} />
                ), }}/>

            <Tab.Screen 
            component={MenuScreen} 
            name="more" 
            options={{
                tabBarIcon: ({color}) => (
                    <Entypo name="menu" color={color} size={25} />
                ), }}/>

        </Tab.Navigator>
    )
}

export default BottomTabNav