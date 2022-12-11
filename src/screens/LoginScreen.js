import { Auth } from "aws-amplify";
import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import { useForm } from "react-hook-form";

import InputField from "../components/InputField";
import OnboardingButton from "../components/OnboardingButton";
import PwdInput from "../components/PwdInput";

const LoginScreen = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);

  const [loading, setLoading] = useState(false);

  const handleLogIn = async (data) => {
    console.log("Log In");
    if (loading) {
      return;
    }

    setLoading(true);
    try {
      const response = await Auth.signIn(
        String(data.username),
        String(data.password)
      );
      console.log(response);
    } catch (e) {
      Alert.alert("Oops", e.message);
    }
    setLoading(false);
  };

  const onRegisterPressed = () => {
    console.log("To Register Screen");
    navigation.navigate("Register");
  };

  const onForgotPwdPressed = () => {
    navigation.navigate("Forgot");
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <SafeAreaView>
        <Image
          style={styles.logo}
          source={require("../assets/images/ProjectifyLogo.png")}
        />

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
          Password <Text style={{ color: "#FF0000" }}>*</Text>
        </Text>
        <View style={{ alignItems: "center" }}>
          <PwdInput
            name="password"
            control={control}
            rules={{ required: "Password is required" }}
          />
          {/* add minLength + error message */}
        </View>

        <View style={{ marginBottom: 0 }}>
          <Text onPress={onForgotPwdPressed} style={styles.forgotPwdText}>
            Forgot your password?
          </Text>
        </View>

        <View style={{ alignItems: "center", marginBottom: 25 }}>
          <OnboardingButton
            label={loading ? "Loading..." : "Log In"}
            onPress={handleSubmit(handleLogIn)}
          />
        </View>

        <Text style={styles.registerText}>
          Don’t have an account?
          <Text
            onPress={onRegisterPressed}
            style={{ color: "#FA8C47", textDecorationLine: "underline" }}
          >
            {" "}
            Join
          </Text>
        </Text>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F4F6F9",
  },
  logo: {
    width: 300,
    height: 300,
    alignSelf: "center",
    marginTop: 5,
  },
  text: {
    fontFamily: "Nunito_400Regular",
    fontSize: 16,
    color: "#333",
    marginLeft: 29,
    textAlign: "left",
  },
  forgotPwdText: {
    fontFamily: "Nunito_400Regular",
    textDecorationLine: "underline",
    fontSize: 16,
    textAlign: "right",
    marginRight: 35,
  },
  registerText: {
    fontFamily: "Nunito_400Regular",
    fontSize: 16,
    textAlign: "center",
  },
});
