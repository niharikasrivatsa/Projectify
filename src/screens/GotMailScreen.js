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

const GotMailScreen = ({navigation}) => {
    return (
      <SafeAreaView style={{
            justifyContent: 'center',
            backgroundColor: '#F4F6F9',
        }}>
        <OnboardingBackButton onPress={()=>navigation.navigate('Forgot')}/>
       
        <Image 
          style={{ 
            width: 200, 
            height: 200,
            alignSelf: 'center',
            marginTop: 5,
          }}
          source={require("../assets/images/MailLogo.png")} />

        <Text
          style={{
            fontFamily: 'Nunito_700Bold',
            fontSize: 36,
            color: '#333',
            marginHorizontal: 30,
            textAlign: 'center',
            marginBottom: 20,
          }}>
          You've Got Mail!
        </Text>

        <Text
        style={{
            fontFamily: 'Nunito_400Regular',
            fontSize: 16,
            color: '#737171',
            marginHorizontal: 30,
            textAlign: 'center',
            marginBottom: 100,
        }}>
            Check your email for a password reset link. Make sure to check spam!
        </Text>

        <Text  style={{ 
            fontFamily: 'Nunito_400Regular',
            fontSize: 16,
            textAlign: 'center',
            }}>
            Didn't recieve link? <Text onPress={() => navigation.navigate('GotMail')}style ={{color:'#FA8C47',textDecorationLine: 'underline',}}>Resend</Text>
          
          </Text>

        </SafeAreaView>
    );
};

export default GotMailScreen;