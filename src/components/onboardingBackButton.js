import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function OnboardingBackButton({label, onPress}) {
    return(
        <TouchableOpacity
          onPress={onPress}
          style={{
            backgroundColor: "#FFF",
            position:'absloute',
            marginLeft: 25,
            marginTop: 20,
            marginBottom: 25,
            width: 44,
            height: 44,
            borderRadius: 100,
            borderWidth: 2,
            borderColour: '#000',
          }}>
        
          <MaterialIcons name="arrow-back" size={30} color="#000" style={{ marginLeft: 5, marginTop: 5, justifiyContent: 'center'}}></MaterialIcons>
       
      </TouchableOpacity>
    );
}