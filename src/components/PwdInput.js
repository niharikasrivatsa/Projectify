import React, { useState } from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import { windowHeight, windowWidth } from "../utils/Dimentions";
import { PwdVisibility } from "../hooks/PwdVisibility";
import { Pressable } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Controller } from "react-hook-form";

//add error.message
const PwdField = ({ control, name, rules = {} }) => {
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    PwdVisibility();

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
          <View
            style={[
              styles.container,
              { borderColor: error ? "#FF0000" : "#2C2C2C" },
            ]}
          >
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              style={styles.inputContainer}
              autoCapitalize="none"
              autoCorrect={false}
              numberOfLines={1}
              secureTextEntry={passwordVisibility}
              enablesReturnKeyAutomatically
            />
            <Pressable onPress={handlePasswordVisibility}>
              <MaterialIcons
                name={rightIcon}
                size={22}
                color="#7251CA"
                style={{ marginRight: 5 }}
              />
            </Pressable>
          </View>
      )}
    />
  );
};
export default PwdField;

const styles = StyleSheet.create({
  container: {
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
  inputContainer: {
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
