import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native';

// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const OnboardingScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: '1',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <View style={{flex: '1', justifyContent: 'center', alignItems: 'center'}}>
        <Image 
          style={{ 
            width: 300, 
            height: 300
          }}
          source={require("../assets/images/ProjectifyIcon.png")} />
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;