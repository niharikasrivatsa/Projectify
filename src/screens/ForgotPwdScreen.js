import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import OnboardingButton from "../components/OnboardingButton";
import OnboardingBackButton from "../components/onboardingBackButton";
import InputField from "../components/InputField";
import { useForm } from "react-hook-form";
import { Auth } from "aws-amplify";

const ForgotPwdScreen = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleOnSend = async (data) => {
    const { username } = data;
    try {
      const response = await Auth.forgotPassword(data.username);
      console.log(response);
      navigation.navigate("NewPwd", { username });
    } catch (e) {
      Alert.alert("Oops", e.message);
    }
  };

  const onBackButtonPressed = () => {
    navigation.navigate("Login");
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <SafeAreaView>
        <OnboardingBackButton onPress={onBackButtonPressed} />

        <Text style={styles.title}>Forgot Password</Text>

        <Text style={styles.usernameText}>
          Username<Text style={{ color: "#FF0000" }}>*</Text>
        </Text>
        <View style={{ alignItems: "center" }}>
          <InputField
            name="username"
            control={control}
            rules={{ required: "Username is required" }}
          />
        </View>

        <View style={{ alignItems: "center", marginTop: 30 }}>
          <OnboardingButton
            label={"Send Code"}
            onPress={handleSubmit(handleOnSend)}
          />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default ForgotPwdScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6F9",
  },
  title: {
    fontFamily: "Nunito_700Bold",
    fontSize: 36,
    color: "#333",
    marginHorizontal: 30,
    textAlign: "center",
    marginBottom: 45,
    marginTop: 100,
  },
  usernameText: {
    fontFamily: "Nunito_400Regular",
    fontSize: 16,
    color: "#333",
    marginLeft: 29,
    textAlign: "left",
    marginBottom: 8,
  },
});
