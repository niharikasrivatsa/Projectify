import React from 'react'
import { SafeAreaView, Text} from 'react-native';

export default function AccomplishmentsScreen ({navigation}) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F4F6F9',
      }}>
      <Text>Achievements Screen</Text>
    </SafeAreaView>
  );
};
