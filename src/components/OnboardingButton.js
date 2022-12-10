import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

export default function OnboardingButton({label, onPress}) {
    return(
        
        <TouchableOpacity
          onPress={onPress}
          style={{
            backgroundColor: '#8265DB',
            padding: 10,
            width: '80%',
            borderRadius: 8,
            marginTop: 30,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
        <Text
          style={{
            color: 'white',
            fontSize: 17,
            textAlign: 'center',
            fontFamily: 'Nunito_700Bold',
            marginRight: 8,
          }}>
          {label}  
        </Text>
        
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8265DB',
    padding: 10,
    width: '80%',
    borderRadius: 8,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    marginTop: 16,
    width: 350,
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    textAlign: 'center',
    fontFamily: 'Nunito_700Bold',
     marginRight: 8,
  },
});

