import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

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
      <TouchableOpacity
        style={{
          backgroundColor: '#8265DB',
          padding: 15,
          width: '80%',
          borderRadius: 8,
          marginTop: 50,
          flexDirection: 'row',
          justifyContent: 'center',
        }}
        onPress={() => navigation.navigate('Login')}>
        <Text
          style={{
            color: 'white',
            fontSize: 17,
            textAlign: 'center',
            fontFamily: 'Nunito_700Bold',
            marginRight: 8,
          }}>
          Let's Begin  
        </Text>
        <MaterialIcons name="arrow-right-alt" size={22} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OnboardingScreen;