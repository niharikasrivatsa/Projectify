import * as React from 'react';

import AuthStack from './src/navigations/AuthStack';
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  let [fontsLoaded] = useFonts({
    Nunito_400Regular, Nunito_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
);
}
