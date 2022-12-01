import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
} from 'react-native';

import OnboardingButton from '../components/OnboardingButton';


const VerificationScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{
      flex: 1, 
      justifyContent: 'center',
      backgroundColor: '#fff',
      }}>
        <Image 
          style={{ 
            width: 235, 
            height: 65,
            alignSelf: 'center',
            marginBottom: 50,
          }}
          source={require("../assets/images/OnboardingStatusbar2.png")} />
        <Text
          style={{
            fontFamily: 'Nunito_700Bold',
            fontSize: 36,
            color: '#333',
            marginHorizontal: 30,
            textAlign: 'center',
            marginBottom: 30,
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
            marginBottom: 50,
        }}>
            We sent a verification link to your student email to help verify your account!
        </Text>

        <Image 
          style={{ 
            width: 220, 
            height: 220,
            alignSelf: 'center',
            marginBottom: 45,
          }}
          source={require("../assets/images/Verify.png")} />

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

    
        <View style ={{alignItems: 'center'}}>
        <OnboardingButton label={'Verify'} onPress={()=>navigation.navigate('ProfileSetup')} />
        </View>
    </SafeAreaView>
  );
};

export default VerificationScreen;
