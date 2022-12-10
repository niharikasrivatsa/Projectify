import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimentions';
import {PwdVisibility} from '../hooks/PwdVisibility';
import { Pressable } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// const [password, setPassword] = useState('');
export default function PwdField() {
    const [password, setPassword] = useState('');
    const { passwordVisibility, rightIcon, handlePasswordVisibility } = PwdVisibility();
    
  return (
    <View style={styles.container}>
        <TextInput
        style={styles.inputContainer}
          placeholder="Enter password"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="newPassword"
          secureTextEntry={passwordVisibility}
          value={password}
          enablesReturnKeyAutomatically
          onChangeText={text => setPassword(text)}
        />
        <Pressable onPress={handlePasswordVisibility}>
          <MaterialIcons name={rightIcon} size={22} color="#7251CA"style={{ marginRight: 5 }} />
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 2,
    marginBottom: 15,
    width: '85%',
    height: windowHeight / 20,
    borderColor: '#ccc',
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    fontFamily: 'Nunito_400Regular',
    color: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputField: {
    width: windowWidth / 1.5,
    height: windowHeight / 15,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
  }
});