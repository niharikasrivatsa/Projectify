import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Alert,
} from "react-native";

import InputField from "../components/InputField";
import OnboardingButton from "../components/OnboardingButton";
import OnboardingBackButton from "../components/onboardingBackButton";
import { useForm, Controller } from "react-hook-form";
import { Auth } from "aws-amplify";

const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const RegisterScreen = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);

  const handleRegister = async (data) => {
    const { username, password, email, name } = data;
    try {
      await Auth.signUp({
        username,
        password,
        attributes: { email, name },
      });
      navigation.navigate("Verification", { username });
    } catch (e) {
      Alert.alert("Opps", e.message);
    }
  };

  const onBackButtonPressed = () => {
    navigation.navigate("Login");
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <SafeAreaView>
        <OnboardingBackButton onPress={onBackButtonPressed} />

        <Image
          style={styles.stausBar}
          source={require("../assets/images/OnboardingStatusbar1.png")}
        />
        <Text style={styles.title}>Create your account!</Text>

        <Text style={styles.text}>
          Username <Text style={{ color: "#FF0000" }}>*</Text>
        </Text>
        <View style={{ alignItems: "center" }}>
          <InputField
            name="username"
            control={control}
            rules={{ required: "Username is required" }}
          />
        </View>

        <Text style={styles.text}>
          Full Name <Text style={{ color: "#FF0000" }}>*</Text>
        </Text>
        <View style={{ alignItems: "center" }}>
          <InputField
            name="name"
            control={control}
            rules={{ required: "Name is required" }}
          />
        </View>

        <Text style={styles.text}>
          School Email <Text style={{ color: "#FF0000" }}>*</Text>
        </Text>
        <View style={{ alignItems: "center" }}>
          <InputField
            name="email"
            control={control}
            rules={{
              required: "Email is required",
              pattern: { value: EMAIL_REGEX, message: "Email is invalid" },
            }}
          />
        </View>

        <Text style={styles.text}>
          Password <Text style={{ color: "#FF0000" }}>*</Text>
        </Text>

        <View style={{ alignItems: "center", marginBottom: 30 }}>
          <InputField
            name="password"
            control={control}
            rules={{ required: "Password is required" }}
            secureTextEntry
          />
        </View>

        <View style={{ alignItems: "center" }}>
          <OnboardingButton
            label={"Sign Up"}
            onPress={handleSubmit(handleRegister)}
          />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // justifyContent: "center",
    backgroundColor: "#F4F6F9",
  },
  stausBar: {
    width: 235,
    height: 65,
    alignSelf: "center",
    marginBottom: 15,
  },
  title: {
    fontFamily: "Nunito_700Bold",
    fontSize: 36,
    color: "#333",
    marginHorizontal: 30,
    textAlign: "center",
    marginBottom: 30,
  },
  text: {
    fontFamily: "Nunito_400Regular",
    fontSize: 16,
    marginLeft: 29,
    textAlign: "left",
    marginTop: 3,
    color: "#333",
  },
});
