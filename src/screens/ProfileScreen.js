import React from 'react'
import { SafeAreaView, Text } from 'react-native';


export default function ProfileScreen ({navigation}) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F4F6F9',
      }}>
      <Text>Profile Screen</Text>
    </SafeAreaView>
  );
};
