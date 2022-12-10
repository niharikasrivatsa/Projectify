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
import PwdField from '../components/PwdInput';
import OnboardingButton from '../components/OnboardingButton';
import OnboardingBackButton from '../components/onboardingBackButton';

const NewPwdScreen = ({navigation}) => {
    return (
      <SafeAreaView style={{
            flex: 1, 
            justifyContent: 'center',
            backgroundColor: '#F4F6F9',
        }}>
        
        <View style={{alignItems: 'flex-start'}} >
        <OnboardingBackButton onPress={()=>navigation.navigate('GotMail')}/>
        </View>
        
        <Text
          style={{
            fontFamily: 'Nunito_700Bold',
            fontSize: 36,
            color: '#333',
            marginHorizontal: 30,
            textAlign: 'center',
            marginBottom: 20,
          }}>
          Create New Password
        </Text>
  
        <Text
          style={{
            fontFamily: 'Nunito_400Regular',
            fontSize: 16,
            color: '#333',
            marginLeft: 29,
            textAlign: 'left',
          }}> 
          New Password<Text style={{color:'#FF0000'}}>*</Text>
          </Text>
        <View style={{alignItems: 'center'}} >
        <PwdField/>
        </View>

        <Text
          style={{
            fontFamily: 'Nunito_400Regular',
            fontSize: 16,
            color: '#333',
            marginLeft: 29,
            textAlign: 'left',
          }}> 
          Confirm Password<Text style={{color:'#FF0000'}}>*</Text>
          </Text>
        <View style={{alignItems: 'center'}} >
        <PwdField/>
        </View>

        <View style ={{alignItems: 'center', marginBottom: 25}}>
        <OnboardingButton label={'Reset Password'} />
        </View>
       
      </SafeAreaView>
    );
  };
  
  export default NewPwdScreen;