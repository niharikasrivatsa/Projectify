import React, { useEffect, useState } from 'react';

import AuthStack from './src/navigations/AuthStack';
import AppStack from './src/navigations/AppStack';
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import {NavigationContainer} from '@react-navigation/native';
import { View, ActivityIndicator} from 'react-native';

import { Amplify, Auth, Hub} from 'aws-amplify';
import awsconfig from './src/aws-exports';

Amplify.configure(awsconfig);

export default function App() {
  const [user, setUser] = useState(undefined);

  const checkUser = async () => {
    try{
      const authUser = await Auth.currentAuthenticatedUser({bypassCache: true});
      setUser(authUser);
    } catch(e) {
      setUser(null);
    }
  };

  useEffect (() => {
    checkUser()
  }, []);

  useEffect(() => {
    const listener = data => {
      if (data.payload.event === 'signIn' || data.payload.event === 'signOut') {
        checkUser();
      }
    };

    Hub.listen('auth', listener);
    return () => Hub.remove('auth', listener);
  }, []);

  let [fontsLoaded] = useFonts({
    Nunito_400Regular, Nunito_700Bold,
  });


  if (user === undefined) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator />
      </View>
    );
  }

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      {user ? (
          <AppStack />
        ) : (
          <>
            <AuthStack />
          </>
        )}
    </NavigationContainer>
);
}
