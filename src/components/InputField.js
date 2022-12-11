import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../utils/Dimentions";
import { Controller } from "react-hook-form";

import AntDesign from "react-native-vector-icons/AntDesign";

//add error.message
const InputField = ({ control, name, rules = {}, secureTextEntry }) => {
  return (
      <Controller 
          control={control}
          name={name}
          rules={rules}
          render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
            <View style={[styles.inputContainer, {borderColor:error ? '#FF0000' : '#2C2C2C'}]}>
              <TextInput 
                value={value} 
                onChangeText={onChange} 
                onBlur={onBlur} 
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                numberOfLines={1}
                secureTextEntry={secureTextEntry}
                enablesReturnKeyAutomatically
              /> 
            </View>
        )}
        />
    
  );
};

export default InputField;

//add error message 
const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 2,
    marginBottom: 15,
    width: "85%",
    height: windowHeight / 20,
    borderColor: "#2C2C2C",
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    fontFamily: "Nunito_400Regular",
    color: "#333",
    justifyContent: "center",
    alignItems: "center",
  },
  inputField: {
    width: windowWidth / 1.5,
    height: windowHeight / 15,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
});
