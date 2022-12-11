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
import OnboardingButton from '../components/OnboardingButton';
import OnboardingBackButton from '../components/onboardingBackButton';
import InputField from '../components/InputField';

const ForgotPwdScreen = ({navigation}) => {
    return (
      <SafeAreaView style={{
            justifyContent: 'center',
            backgroundColor: '#F4F6F9',
        }}>
        
        <OnboardingBackButton onPress={()=>navigation.navigate('Login')}/>
        
        <Text
          style={{
            fontFamily: 'Nunito_700Bold',
            fontSize: 36,
            color: '#333',
            marginHorizontal: 30,
            textAlign: 'left',
            marginBottom: 45,
            marginTop: 100,
          }}>
          Forgot Password
        </Text>
  
        <Text
          style={{
            fontFamily: 'Nunito_400Regular',
            fontSize: 16,
            color: '#333',
            marginLeft: 29,
            textAlign: 'left',
          }}> 
          Email Address<Text style={{color:'#FF0000'}}>*</Text>
          </Text>
        <View style={{alignItems: 'center'}} >
        <InputField/>
        </View>

        <View style ={{alignItems: 'center', marginBottom: 25}}>
        <OnboardingButton label={'Send Instructions'} onPress={()=>navigation.navigate('GotMail')} />
        </View>
       
      </SafeAreaView>
    );
  };
  
  export default ForgotPwdScreen;