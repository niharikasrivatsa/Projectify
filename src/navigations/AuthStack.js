import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ForgotPwdScreen from '../screens/ForgotPwdScreen';
import VerificationScreen from '../screens/VerficationScreen';
import ProfileSetupScreen from '../screens/ProfileSetup';
import IntrestSkillSetupScreen from '../screens/IntrestSkillsSetup';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} /> 
      <Stack.Screen name="Forgot" component={ForgotPwdScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Verification" component={VerificationScreen} />
      <Stack.Screen name="ProfileSetup" component={ProfileSetupScreen} />
      <Stack.Screen name="IntrestSkillSetup" component={IntrestSkillSetupScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;