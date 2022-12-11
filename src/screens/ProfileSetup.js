import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
} from 'react-native';

import OnboardingButton from '../components/OnboardingButton';
import DropdownInput from '../components/DropdownInput';
import OnboardingBackButton from '../components/onboardingBackButton';

const ProfileSetupScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{
      justifyContent: 'center',
      backgroundColor: '#F4F6F9',
      }}>
        <OnboardingBackButton onPress={()=>navigation.navigate('Verification')}/>
        <Image 
          style={{ 
            width: 235, 
            height: 60,
            alignSelf: 'center',
            marginBottom: 30,
          }}
          source={require("../assets/images/OnboardingStatusbar3.png")} />
        <Text
          style={{
            fontFamily: 'Nunito_700Bold',
            fontSize: 36,
            color: '#333',
            marginHorizontal: 30,
            textAlign: 'center',
            marginBottom: 5,
          }}>
          Hello <Text style ={{color:'#FA8C47'}}>Rachel</Text>, 
        </Text>
        <Text
        style={{
            fontFamily: 'Nunito_400Regular',
            fontSize: 16,
            color: '#737171',
            marginHorizontal: 30,
            textAlign: 'center',
            marginBottom: 38,
        }}>
            Tell us about yourself 
        </Text>

      <Text
          style={{
            fontFamily: 'Nunito_400Regular',
            fontSize: 16,
            marginLeft: 29,
            textAlign: 'left',
        }}> 
          What grade are you in?
        </Text>
        <View style={{alignItems: 'center'}} >
        <DropdownInput 
          data={[
              '9',
              '10',
              '11',
              '12'
            ]}  />
        </View>

        <Text
          style={{
            fontFamily: 'Nunito_400Regular',
            fontSize: 16,
            marginLeft: 29,
            textAlign: 'left',
            marginTop: 18,
        }}> 
          What are your pronouns? 
        </Text>
        <View style={{alignItems: 'center'}} >
        <DropdownInput 
          data={[
              'she/her',
              'they/them',
            ]}  />
        </View>

        <Text
          style={{
            fontFamily: 'Nunito_400Regular',
            fontSize: 16,
            marginLeft: 29,
            textAlign: 'left',
            marginTop: 18,
        }}> 
          What city are you located? 
        </Text>
        <View style={{alignItems: 'center'}} >
        <DropdownInput 
          data={[
              'Brampton, ON',
              'Burlington, ON',
              'Toronto, ON',
              'Waterloo, ON',
            ]}  />
        </View>

        <View style ={{alignItems: 'center', marginTop: 70}}>
        <OnboardingButton label={'Next'} onPress={()=>navigation.navigate('InterestSkillsSetup')} />
        </View>
    </SafeAreaView>
  );
};

export default ProfileSetupScreen;