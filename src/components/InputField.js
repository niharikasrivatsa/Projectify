import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../utils/Dimentions";

import AntDesign from "react-native-vector-icons/AntDesign";

const InputField = ({ value, setValue, secureTextEntry }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={setValue}
        value={value}
        numberOfLines={1}
        secureTextEntry={secureTextEntry}
        enablesReturnKeyAutomatically
      />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 2,
    marginBottom: 15,
    width: "85%",
    height: windowHeight / 20,
    borderColor: "#ccc",
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
