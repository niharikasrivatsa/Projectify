import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';

// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ProjectifyIcon from '../assets/images/ProjectifyIcon.png';

const OnboardingScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ProjectifyIcon
          width={300}
          height={300}
        />
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;