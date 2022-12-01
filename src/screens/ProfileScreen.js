import React from 'react'
import { SafeAreaView, Text } from 'react-native';


export default function ProfileScreen ({navigation}) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#CECECE',
      }}>
      <Text>Profile Screen</Text>
    </SafeAreaView>
  );
};
