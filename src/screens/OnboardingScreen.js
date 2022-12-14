import React from "react";
import { SafeAreaView, View, Image } from "react-native";

import OnboardingButton from "../components/OnboardingButton";

const OnboardingScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F4F6F9",
      }}
    >
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          style={{
            width: 300,
            height: 300,
          }}
          source={require("../assets/images/ProjectifyLogo.png")}
        />
      </View>
      <OnboardingButton
        label={"Let's Begin"}
        onPress={() => navigation.navigate("Login")}
      />
    </SafeAreaView>
  );
};

export default OnboardingScreen;
