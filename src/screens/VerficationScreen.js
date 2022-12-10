import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
} from 'react-native';

import OnboardingButton from '../components/OnboardingButton';
import OnboardingBackButton from '../components/onboardingBackButton';


const VerificationScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{
      flex: 1, 
      justifyContent: 'center',
      backgroundColor: '#F4F6F9',
      }}>
        <View style={{alignItems: 'flex-start'}} >
        <OnboardingBackButton onPress={()=>navigation.navigate('Register')}/>
        </View>
        <Image 
          style={{ 
            width: 235, 
            height: 65,
            alignSelf: 'center',
            marginBottom: 50,
          }}
          source={require("../assets/images/OnboardingStatusbar2.png")} />
          <Image 
          style={{ 
            width: 200, 
            height: 200,
            alignSelf: 'center',
            marginBottom: 45,
          }}
          source={require("../assets/images/VerifyIcon.png")} />
        <Text
          style={{
            fontFamily: 'Nunito_700Bold',
            fontSize: 36,
            color: '#333',
            marginHorizontal: 30,
            textAlign: 'center',
            marginBottom: 20,
          }}>
          Verification
        </Text>

        <Text
        style={{
            fontFamily: 'Nunito_400Regular',
            fontSize: 16,
            color: '#737171',
            marginHorizontal: 30,
            textAlign: 'center',
            marginBottom: 0,
        }}>
            We sent a verification link to your student email to help verify your account!
        </Text>

        <View style ={{alignItems: 'center', marginBottom:30}}>
        <OnboardingButton label={'Verify'} onPress={()=>navigation.navigate('ProfileSetup')} />
        </View>
        <Text
            style={{
                fontFamily: 'Nunito_400Regular',
                fontSize: 14,
                color: '#737171',
                marginHorizontal: 30,
                textAlign: 'center',
            }}>
            Didn’t recieve link? <Text 
            style ={{
                color:'#FA8C47', 
                fontFamily: 'Nunito_700Bold'
            }}>Resend Again</Text>
        </Text>
    </SafeAreaView>
  );
};

export default VerificationScreen;
