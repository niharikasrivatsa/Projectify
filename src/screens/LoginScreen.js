import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";

import InputField from "../components/InputField";
import OnboardingButton from "../components/OnboardingButton";
import PwdInput from "../components/PwdInput";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogIn = () => {
    console.log("Log In");
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
          <InputField value={username} setValue={setUsername} />
        </View>

        <Text style={styles.text}>
          Password <Text style={{ color: "#FF0000" }}>*</Text>
        </Text>
        <View style={{ alignItems: "center" }}>
          <PwdInput value={password} setValue={setPassword} />
        </View>

        <View style={{ marginBottom: 0 }}>
          <Text onPress={onForgotPwdPressed} style={styles.forgotPwdText}>
            Forgot your password?
          </Text>
        </View>

        <View style={{ alignItems: "center", marginBottom: 25 }}>
          <OnboardingButton label={"Log In"} onPress={handleLogIn} />
        </View>

        <Text style={styles.registerText}>
          Don’t have an account?
          <Text
            onPress={onRegisterPressed}
            style={{ color: "#FA8C47", textDecorationLine: "underline" }}
          > Join
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
