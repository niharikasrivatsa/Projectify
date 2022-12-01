import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

import InputField from '../components/InputField';
import OnboardingButton from '../components/OnboardingButton';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
//import Ionicons from 'react-native-vector-icons/Ionicons';

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{
      flex: 1, 
      justifyContent: 'center',
      backgroundColor: '#fff',
      //alignItems: 'center',
      }}>
        <Image 
          style={{ 
            width: 300, 
            height: 300,
            alignSelf: 'center',
            marginBottom: 20,
          }}
          source={require("../assets/images/ProjectifyIcon.png")} />
        
      <Text
          style={{
            fontFamily: 'Nunito_400Regular',
            fontSize: 16,
            color: '#333',
            marginLeft: 29,
            textAlign: 'left',
        }}> 
          Username <Text style={{color:'#FF0000'}}>*</Text>
        </Text>
        <View style={{alignItems: 'center'}} >
        <InputField/>
        </View>

        <Text
          style={{
            fontFamily: 'Nunito_400Regular',
            fontSize: 16,
            marginLeft: 29,
            textAlign: 'left',
        }}> 
          Password <Text style={{color:'#FF0000'}}>*</Text>
        </Text>
        <View style={{alignItems: 'center'}} >
        <InputField/>
        </View>
        <Text onPress={() => navigation.navigate('Forgot')}>
          <Text  style={{ 
            textDecorationLine: 'underline',
            textAlign: 'center',
            marginTop:30,
            }}>
            Forgot your password?
          </Text>
          
        </Text>

        <View style ={{alignItems: 'center'}}>
        <OnboardingButton label={'Log In'} onPress={() => {}} />
        </View>
    </SafeAreaView>
  );
};

export default LoginScreen;