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
            width: 320, 
            height: 320,
            alignSelf: 'center',
            marginTop: 5,
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

        <View style ={{alignItems: 'center', marginBottom: 18}}>
        <OnboardingButton label={'Log In'} onPress={()=>navigation.navigate('Register')} />
        </View>

        <View style={{marginBottom: 70}}>
          <Text onPress={() => navigation.navigate('Forgot')}>
          <Text  style={{ 
            fontFamily: 'Nunito_400Regular',
            fontSize: 16,
            textAlign: 'center',
            }}>
            Forgot your password?
          </Text>
          </Text>
        </View>

        <Text onPress={() => navigation.navigate('Register')}>
          <Text  style={{ 
            fontFamily: 'Nunito_400Regular',
            fontSize: 16,
            textAlign: 'center',
            }}>
            Don’t have an account? <Text style ={{color:'#FA8C47'}}>Join</Text>
          </Text>
          </Text>
          
    </SafeAreaView>
  );
};

export default LoginScreen;