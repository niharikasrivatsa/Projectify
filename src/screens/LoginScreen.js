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
import PwdInput from '../components/PwdInput';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
//import Ionicons from 'react-native-vector-icons/Ionicons';

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{
      flex: 1, 
      justifyContent: 'center',
      backgroundColor: '#F4F6F9',
      //alignItems: 'center',
      }}>
       
        <Image 
          style={{ 
            width: 300, 
            height: 300,
            alignSelf: 'center',
            marginTop: 5,
          }}
          source={require("../assets/images/ProjectifyLogo.png")} />
      
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
        <PwdInput/>
        </View>

        <View style={{marginBottom: 0}}>
          
          <Text  onPress={() => navigation.navigate('Forgot')} style={{ 
            fontFamily: 'Nunito_400Regular',
            textDecorationLine: 'underline',
            fontSize: 16,
            textAlign: 'right',
            marginRight: 35,
            }}>
            Forgot your password?
          </Text>
        </View>

        <View style ={{alignItems: 'center', marginBottom: 25}}>
        <OnboardingButton label={'Log In'} onPress={()=>navigation.navigate('Register')} />
        
        </View>

          <Text  style={{ 
            fontFamily: 'Nunito_400Regular',
            fontSize: 16,
            textAlign: 'center',
            }}>
            Don’t have an account? <Text onPress={() => navigation.navigate('Register')}style ={{color:'#FA8C47',textDecorationLine: 'underline',}}>Join</Text>
          
          </Text>
          
    </SafeAreaView>
  );
};

export default LoginScreen;