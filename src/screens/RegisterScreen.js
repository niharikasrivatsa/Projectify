import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
} from 'react-native';

import InputField from '../components/InputField';
import OnboardingButton from '../components/OnboardingButton';
import OnboardingBackButton from '../components/onboardingBackButton';

const RegisterScreen = ({navigation}) => {
  return (
    
    <SafeAreaView style={{
      flex: 1, 
      justifyContent: 'center',
      backgroundColor: '#F4F6F9',
      }}>
        <View style={{alignItems: 'flex-start'}} >
        <OnboardingBackButton onPress={()=>navigation.navigate('Login')}/>
        </View>
         
        <Image 
          style={{ 
            width: 235, 
            height: 65,
            alignSelf: 'center',
            marginBottom: 15,
          }}
          source={require("../assets/images/OnboardingStatusbar1.png")} />
        <Text
          style={{
            fontFamily: 'Nunito_700Bold',
            fontSize: 36,
            color: '#333',
            marginHorizontal: 30,
            textAlign: 'center',
            marginBottom: 30,
          }}>
          Create your account!
        </Text>

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
            marginTop: 3,
        }}> 
          Full Name <Text style={{color:'#FF0000'}}>*</Text>
        </Text>
        <View style={{alignItems: 'center'}} >
        <InputField/>
        </View>

        <Text
          style={{
            fontFamily: 'Nunito_400Regular',
            fontSize: 16,
            color: '#333',
            marginLeft: 29,
            textAlign: 'left',
            marginTop: 3,
        }}> 
          School Email <Text style={{color:'#FF0000'}}>*</Text>
        </Text>
        <View style={{alignItems: 'center'}} >
        <InputField/>
        </View>

        <Text
          style={{
            fontFamily: 'Nunito_400Regular',
            fontSize: 16,
            color: '#333',
            marginLeft: 29,
            textAlign: 'left',
            marginTop: 3,
        }}> 
          Password <Text style={{color:'#FF0000'}}>*</Text>
        </Text>

        <View style={{alignItems: 'center', marginBottom: 30,}} >
        <InputField/>
        </View>

        <View style ={{alignItems: 'center'}}>
        <OnboardingButton label={'Sign Up'} onPress={()=>navigation.navigate('Verification')} />
        </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;