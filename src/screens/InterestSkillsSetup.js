import React, { useState } from "react";
import { SafeAreaView, View, Text } from "react-native";

import OnboardingButton from "../components/OnboardingButton";
import OnboardingMultiSelect from "../components/OnboardingMultiSelect";
import AppStack from "../navigations/AppStack";

const InterestData = [
  "Healthcare",
  "Engineering",
  "UX/UI",
  "AI/ML",
  "PM",
  "Aerospace",
  "Math",
  "Cybersecurity",
];
const SkillData = [
  "Figma",
  "Canva",
  "Java",
  "Python",
  "C++",
  "HTML/CSS",
  "React",
  "Springboot",
  "MatLab",
  "Linux",
  "Frontend",
  "Backend",
  "Kotlin",
  "C",
];

const InterestSkillsSetupScreen = ({ navigation }) => {
  const OnCompletePressed = () => {
    console.warn("Sign In");
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#8265DB",
      }}
    >
      <View style={{ backgroundColor: "#FFF" }}>
        <View
          style={{
            width: "100%",
            backgroundColor: "#8265DB",
            borderBottomRightRadius: 40,
            borderBottomLeftRadius: 40,
            borderColor: "#8265DB",
            height: "35%",
          }}
        >
          <Text
            style={{
              fontFamily: "Nunito_700Bold",
              fontSize: 29,
              color: "#F4F1E6",
              textAlign: "left",
              marginTop: 40,
              marginBottom: 20,
              marginLeft: 35,
              marginRight: 90,
            }}
          >
            Choose your skills and interests
          </Text>
          <Text
            style={{
              fontFamily: "Nunito_400Regular",
              fontSize: 16,
              color: "#F4F1E6",
              textAlign: "left",
              marginBottom: 5,
              marginLeft: 35,
              marginRight: 90,
            }}
          >
            Choose at least 3 categories in each for more relevant projects. You
            can always change this under your profile.
          </Text>
        </View>

        <View
          style={{
            width: "100%",
            height: "75%",
            borderColor: "#FFF",
            backgroundColor: "#FFF",
            //alignItems: 'center',
            //justifyContent: 'center',
          }}
        >
          <View style={{ marginLeft: 30, marginTop: 23 }}>
            <Text
              style={{
                fontFamily: "Nunito_700Bold",
                fontSize: 18,
                color: "#000",
                textAlign: "left",
              }}
            >
              Interests
            </Text>
            <OnboardingMultiSelect data={InterestData} />
          </View>

          <View style={{ marginLeft: 30, marginRight: 10, marginTop: 25 }}>
            <Text
              style={{
                fontFamily: "Nunito_700Bold",
                fontSize: 18,
                color: "#000",
                textAlign: "left",
              }}
            >
              Skills
            </Text>
            <OnboardingMultiSelect data={SkillData} />
          </View>

          <View style={{ alignItems: "center", marginTop: 30 }}>
            <OnboardingButton label={"Complete Registration"} onPress={OnCompletePressed} />
            <Text
              style={{
                color: "#FA8C47",
                fontFamily: "Nunito_400Regular",
                fontSize: 15,
                textAlign: "center",
                marginTop: 15,
              }}
            >
              Skip for Now
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default InterestSkillsSetupScreen;
