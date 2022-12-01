import React, {useState} from 'react';
import {Text,SafeAreaView,} from 'react-native';

export default function ExploreScreen ({navigation}) {
    // const [AccomplishmentsTab, ProfileTab] = useState(1);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F4F6F9',
      }}>
      <Text>Explore Screen</Text>
    </SafeAreaView>
  );
};

