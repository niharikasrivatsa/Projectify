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

const ProfileSetupScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{
      flex: 1, 
      justifyContent: 'center',
      backgroundColor: '#fff',
      //alignItems: 'center',
      }}>
        <Image 
          style={{ 
            width: 200, 
            height: 50,
            alignSelf: 'center',
            marginBottom: 20,
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
        <InputField/>
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
        <InputField/>
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
        <InputField/>
        </View>

        <View style ={{alignItems: 'center'}}>
        <OnboardingButton label={'Next'} onPress={() => {}} />
        </View>
    </SafeAreaView>
  );
};

export default ProfileSetupScreen;