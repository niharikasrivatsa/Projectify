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

// const HomeStack = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Accomplishmnents"
//         component={AccomplishmentsScreen}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="Explore"
//         component={ExploreScreen}
//         options={({route}) => ({
//           title: route.params?.title,
//         })}
//       />
//     </Stack.Navigator>
//   );
// };

const AppStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
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
          // tabBarStyle: {
          //   //display: getTabBarVisibility(route),
          //   backgroundColor: '#FFF',
          // },
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
          // tabBarBadge: 3,
          // tabBarBadgeStyle: {backgroundColor: 'yellow'},
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

// const getTabBarVisibility = route => {
//   // console.log(route);
//   const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
//   // console.log(routeName);

//   if( routeName == 'GameDetails' ) {
//     return 'none';
//   }
//   return 'flex';
// };

export default AppStack;