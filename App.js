import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Image, Text } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Ionicons } from '@expo/vector-icons';
import SignUp from './src/screens/SignUp';
import SignIn from './src/screens/SignIn';
import OnBoarding_1 from './src/screens/onboarding/onBoarding_1';
import OnBoarding_3 from './src/screens/onboarding/onBoarding_3';
import OnBoarding_2 from './src/screens/onboarding/onBoarding_2';

import Home from './src/screens/Home';
import Search from './src/screens/Search';
import Bookmarks from './src/screens/Bookmarks';
import Profile from './src/screens/Profile';
import Test from './src/screensComponent/Test';
import TestDone from './src/screensComponent/TestDone';
import Quiz1 from './src/screens/Quiz1';
import Quiz2 from './src/screens/Quiz2';
import Result from './src/screens/Result';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: '#447DB9',
        tabBarInactiveTintColor: 'grey',
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          borderTopColor: 'rgba(0, 0, 0, .2)',
          height: 80,
          shadowOpacity: 0.25,
        },

        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'md-search' : 'search';
          } else if (route.name === 'Bookmarks') {
            iconName = focused ? 'ios-bookmarks' : 'ios-bookmarks-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={30} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Bookmarks" component={Bookmarks} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

function App() {
  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Signin" component={SignIn} />
        <Stack.Screen name="Signup" component={SignUp} />
        <Stack.Screen name="OnBoarding_1" component={OnBoarding_1} />
        <Stack.Screen name="OnBoarding_2" component={OnBoarding_2} />
        <Stack.Screen name="OnBoarding_3" component={OnBoarding_3} />
        <Stack.Screen name="Test" component={Test} />
        <Stack.Screen name="TestDone" component={TestDone} />
        <Stack.Screen name="Quiz1" component={Quiz1} />
        <Stack.Screen name="Quiz2" component={Quiz2} />
        <Stack.Screen name="Result" component={Result} />
        <Stack.Screen name="Bottom" component={BottomTabScreen} />
      </Stack.Navigator>
    </>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};
