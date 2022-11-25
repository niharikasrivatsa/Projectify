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

const RegisterScreen = ({navigation}) => {
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
        }}> 
          Password <Text style={{color:'#FF0000'}}>*</Text>
        </Text>

        <View style={{alignItems: 'center'}} >
        <InputField/>
        </View>

        <View style ={{alignItems: 'center'}}>
        <OnboardingButton label={'Sign Up'} onPress={() => {}} />
        </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
