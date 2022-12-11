import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Alert,
} from "react-native";

import OnboardingButton from "../components/OnboardingButton";
import OnboardingBackButton from "../components/onboardingBackButton";
import InputField from "../components/InputField";
import { useForm } from "react-hook-form";
import { useRoute } from "@react-navigation/native";
import { Auth } from "aws-amplify";

const VerificationScreen = ({ navigation }) => {
  const route = useRoute();
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: { username: route?.params?.username },
  });

  const username = watch("username");

  const handleVerify = async (data) => {
    try {
      await Auth.confirmSignUp(data.username, data.code);
      navigation.navigate("ProfileSetup");
    } catch (e) {
      Alert.alert("Oops", e.message);
    }
  };

  const handleResend = async () => {
    try {
      await Auth.resendSignUp(username);
      //IDK if we need to include it
      Alert.alert("Success", "Code was resent to your email");
    } catch (e) {
      Alert.alert("Oops", e.message);
    }
  };

  const onBackButtonPressed = () => {
    navigation.navigate("Register");
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <SafeAreaView>
        <View style={{ alignItems: "flex-start" }}>
          <OnboardingBackButton onPress={onBackButtonPressed} />
        </View>
        <Image
          style={styles.statusbar}
          source={require("../assets/images/OnboardingStatusbar2.png")}
        />
        <Image
          style={styles.verifyIcon}
          source={require("../assets/images/VerifyIcon.png")}
        />
        <Text style={styles.title}>Verification</Text>

        <Text style={styles.description}>
          We sent a verification code to your student email to help verify your
          account!
        </Text>

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
          Code <Text style={{ color: "#FF0000" }}>*</Text>
        </Text>

        <View style={{ alignItems: "center" }}>
          <InputField
            name="code"
            control={control}
            rules={{ required: "Code is required" }}
          />
        </View>

        <View style={{ alignItems: "center", marginBottom: 15, marginTop: 40 }}>
          <OnboardingButton
            label={"Verify"}
            onPress={handleSubmit(handleVerify)}
          />
        </View>
        <Text style={styles.resendLink}>
          Didn’t recieve link?{" "}
          <Text
            style={{
              color: "#FA8C47",
              fontFamily: "Nunito_700Bold",
            }}
            onPress={handleResend}
          >
            Resend Again
          </Text>
        </Text>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default VerificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "center",
    backgroundColor: "#F4F6F9",
  },
  statusbar: {
    width: 235,
    height: 65,
    alignSelf: "center",
  },
  verifyIcon: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },
  title: {
    fontFamily: "Nunito_700Bold",
    fontSize: 36,
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  description: {
    fontFamily: "Nunito_400Regular",
    fontSize: 16,
    color: "#737171",
    marginHorizontal: 30,
    textAlign: "center",
    marginBottom: 35,
  },
  resendLink: {
    fontFamily: "Nunito_400Regular",
    fontSize: 14,
    color: "#737171",
    marginHorizontal: 30,
    textAlign: "center",
  },
  text: {
    fontFamily: "Nunito_400Regular",
    fontSize: 16,
    color: "#333",
    marginLeft: 29,
    textAlign: "left",
  },
});
