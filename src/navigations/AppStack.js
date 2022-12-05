import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import ExploreScreen from '../screens/ExploreScreen';
import AchievementsScreen from '../screens/AchievementsScreen';
import ProfileScreen from '../screens/ProfileScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#F4F6F9',
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        headerTitleStyle: {
          fontFamily: 'Nunito_700Bold',
          fontSize: 18,
          padding: 15,
        },
        tabBarShowLabel: true,
        tabBarStyle: {backgroundColor: '#FFF'},
        tabBarInactiveTintColor: 'grey',
        tabBarActiveTintColor: 'black',
        tabBarStyle: {height: 90, }
      }}>
      <Tab.Screen
        name="Achievements"
        component={AchievementsScreen}
        options={{
          tabBarLabelStyle: {fontFamily: 'Nunito_400Regular', fontSize: 13},
          tabBarIcon: ({color, size}) => (
            <Ionicons name="star-outline" color={color} size={size} />
          ),
          tabBarActiveTintColor: '#7250CA',
          tabBarIconStyle: {marginTop:9}
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabelStyle: {fontFamily: 'Nunito_400Regular', fontSize: 13},
          tabBarIcon: ({color, size}) => (
            <Ionicons name="search" color={color} size={size} />
          ),
          tabBarActiveTintColor: '#7250CA',
          tabBarIconStyle: {marginTop:9}
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabelStyle: {fontFamily: 'Nunito_400Regular', fontSize: 13},
          tabBarIcon: ({color, size}) => (
            <Ionicons name="person" color={color} size={size} />
          ),
          tabBarActiveTintColor: '#7250CA',
          tabBarIconStyle: {marginTop:9}
        }}
      />
    </Tab.Navigator>
  );
};

export default AppStack;