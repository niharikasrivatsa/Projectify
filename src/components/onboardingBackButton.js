import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function OnboardingBackButton({label, onPress}) {
    return(
        <TouchableOpacity
          onPress={onPress}
          style={{
            backgroundColor: '#FFF',
            position:'static',
            left: 5,
            top:0,
            marginLeft: 15,
            width: 50,
            height: 50,
            borderRadius: 100,
            borderWidth: 4,
            borderColour: '#000',
          }}>
        
          <MaterialIcons name="arrow-back" size={30} color="#000" style={{ marginLeft: 5, marginTop: 5, justifiyContent: 'center'}}></MaterialIcons>
       
      </TouchableOpacity>
    );
}