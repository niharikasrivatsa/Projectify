import React, { useState }  from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  StyleSheet
} from "react-native";

import OnboardingButton from "../components/OnboardingButton";
import OnboardingBackButton from "../components/onboardingBackButton";
import InputField from "../components/InputField";

const VerificationScreen = ({ navigation }) => {
  const [code, setCode] = useState('');

  const handleVerify = () => {
    navigation.navigate("ProfileSetup")
    console.log("Verify");
  };

  const handleResend = () => {
    console.log("Resend");
  };

  const onBackButtonPressed = () => {
    navigation.navigate("Register")
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <SafeAreaView>
        <View style={{ alignItems: "flex-start" }}>
          <OnboardingBackButton
            onPress={onBackButtonPressed}
          />
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

        <Text style={styles.text}>
        We sent a verification code to your student email to help verify your account!
        </Text>

        <View style={{alignItems: 'center', marginBottom: 85}} >
        <InputField
        value={code}
        setValue={setCode}
        />
        </View>

        <View style={{ alignItems: "center", marginBottom: 15 }}>
          <OnboardingButton
            label={"Verify"}
            onPress={handleVerify}
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
    justifyContent: "center",
    backgroundColor: "#F4F6F9",
  },
  statusbar: {
    width: 235,
    height: 65,
    alignSelf: "center"
  },
  verifyIcon: {
    width: 180,
    height: 180,
    alignSelf: "center",
  },
  title: {
    fontFamily: "Nunito_700Bold",
    fontSize: 36,
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  text: {
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
});
