import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  StyleSheet
} from 'react-native';

import InputField from '../components/InputField';
import OnboardingButton from '../components/OnboardingButton';
import OnboardingBackButton from '../components/onboardingBackButton';

const RegisterScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    console.log("Regsiter");
    navigation.navigate('Verification')
  };

  const onBackButtonPressed = () => {
    navigation.navigate("Login");
  };

  return (
    <KeyboardAvoidingView  behavior="padding" style={styles.container}>
      <SafeAreaView>
        <OnboardingBackButton onPress={onBackButtonPressed}/>
         
        <Image 
          style={styles.stausBar}
          source={require("../assets/images/OnboardingStatusbar1.png")} />
        <Text
          style={styles.title}>
          Create your account!
        </Text>

      <Text
          style={styles.text}> 
          Username <Text style={{color:'#FF0000'}}>*</Text>
        </Text>
        <View style={{alignItems: 'center'}} >
        <InputField
        value={username}
        setValue={setUsername}
        />
        </View>

        <Text
          style={styles.text}> 
          Full Name <Text style={{color:'#FF0000'}}>*</Text>
        </Text>
        <View style={{alignItems: 'center'}} >
        <InputField value={name}
        setValue={setName}/>
        </View>

        <Text
          style={styles.text}> 
          School Email <Text style={{color:'#FF0000'}}>*</Text>
        </Text>
        <View style={{alignItems: 'center'}} >
        <InputField value={email}
        setValue={setEmail}/>
        </View>

        <Text
          style={styles.text}> 
          Password <Text style={{color:'#FF0000'}}>*</Text>
        </Text>

        <View style={{alignItems: 'center', marginBottom: 30,}} >
        <InputField value={password}
        setValue={setPassword}
        secureTextEntry/>
        </View>

        <View style ={{alignItems: 'center'}}>
        <OnboardingButton label={'Sign Up'} onPress={handleRegister} />
        </View>
    </SafeAreaView>

    </KeyboardAvoidingView>
    
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "#F4F6F9",
  },
  stausBar:{ 
    width: 235, 
    height: 65,
    alignSelf: 'center',
    marginBottom: 15
  },
  title: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 36,
    color: '#333',
    marginHorizontal: 30,
    textAlign: 'center',
    marginBottom: 30,
  }, 
  text: {
    fontFamily: 'Nunito_400Regular',
    fontSize: 16,
    marginLeft: 29,
    textAlign: 'left',
    marginTop: 3,
    color: '#333',
}

})