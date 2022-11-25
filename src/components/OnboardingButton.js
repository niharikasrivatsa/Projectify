import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

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
        <MaterialIcons name="arrow-right-alt" size={22} color="#fff" />
      </TouchableOpacity>
    );
}