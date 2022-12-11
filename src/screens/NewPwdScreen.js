import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  KeyboardAvoidingView,
  Alert,
  StyleSheet,
} from "react-native";
import PwdField from "../components/PwdInput";
import OnboardingButton from "../components/OnboardingButton";
import OnboardingBackButton from "../components/onboardingBackButton";
import { useForm } from "react-hook-form";
import InputField from "../components/InputField";
import { Auth } from "aws-amplify";
import { useRoute } from "@react-navigation/native";

const NewPwdScreen = ({ navigation }) => {
  const route = useRoute();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { username: route?.params?.username },
  });

  const handleNewPassword = async (data) => {
    try {
      await Auth.forgotPasswordSubmit(data.username, data.code, data.password);
      navigation.navigate("Login");
    } catch (e) {
      Alert.alert("Oops", e.message);
    }
  };

  const handleBackButton = () => {
    navigation.navigate("Forgot");
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <SafeAreaView style={styles.container}>
          <OnboardingBackButton onPress={handleBackButton} />

        <Text style={styles.title}>Create New Password</Text>

        <Text style={styles.text}>
          Username<Text style={{ color: "#FF0000" }}>*</Text>
        </Text>
        <View style={{ alignItems: "center" }}>
          <InputField
            name="username"
            control={control}
            rules={{ required: "Username is required" }}
          />
        </View>

        <Text style={styles.text}>
          Enter code from email<Text style={{ color: "#FF0000" }}>*</Text>
        </Text>
        <View style={{ alignItems: "center" }}>
          <InputField
            name="code"
            control={control}
            rules={{ required: "Code is required" }}
          />
        </View>

        <Text style={styles.text}>
          Enter new password<Text style={{ color: "#FF0000" }}>*</Text>
        </Text>
        <View style={{ alignItems: "center" }}>
          <PwdField
            name="password"
            control={control}
            rules={{ required: "Password is required" }}
          />
        </View>

        <View style={{ alignItems: "center", marginTop: 85 }}>
          <OnboardingButton
            label={"Reset Password"}
            onPress={handleSubmit(handleNewPassword)}
          />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default NewPwdScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6F9",
  },
  title: {
    marginTop: 50,
    fontFamily: "Nunito_700Bold",
    fontSize: 30,
    color: "#333",
    marginHorizontal: 30,
    textAlign: "center",
    marginBottom: 60,
  },
  text: {
    fontFamily: "Nunito_400Regular",
    fontSize: 16,
    color: "#333",
    marginLeft: 29,
    textAlign: "left",
    marginTop: 10,
  },
});
