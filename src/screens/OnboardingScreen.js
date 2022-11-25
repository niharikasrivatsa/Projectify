import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native';

import OnboardingButton from '../components/OnboardingButton';

const OnboardingScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: '1',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image 
          style={{ 
            width: 300, 
            height: 300
          }}
          source={require("../assets/images/ProjectifyIcon.png")} />
      </View>
      <OnboardingButton label={"Let's Begin"} onPress={()=>{}} />
    </SafeAreaView>
  );
};

export default OnboardingScreen;