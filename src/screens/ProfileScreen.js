import React from "react";
import {
  SafeAreaView,
  Text,
  Image,
  View,
  ScrollView,
  StyleSheet,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { SelectMultipleButton } from "react-native-selectmultiple-button";
import BadgeCard from "../components/BadgeCard";

export default class ProfileScreen extends React.Component {
  // need to understand how the components work
  state = {
    toolbox: ["Figma", "Canva", "Java", "Python", "C++", "Excel", "JavaScript"],
    interests: [
      "UI Design",
      "UX Design",
      "Web",
      "Adobe",
      "React",
      "Vue",
      "Angular",
    ],
  };

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#F4F6F9",
        }}
      >
        <View style={{ marginLeft: 30, marginRight: 30 }}>
          <View
            style={{
              flexDirection: "row",
              marginTop: 30,
              alignItems: "center",
            }}
          >
            <Image
              style={styles.profilePicture}
              source={require("../assets/images/ProjectifyIcon.png")}
            />
            <View>
              <Text style={styles.heading1}>Rachel Joy</Text>
              <Text style={styles.email}>rcopreros@dpcdsb.org</Text>
            </View>
            <Ionicons
              name="create-outline"
              color={"#928F8F"}
              size={30}
              style={{ marginLeft: 15 }}
            ></Ionicons>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 30,
            }}
          >
            <View
              style={{
                backgroundColor: "#EDEDEE",
                width: 169,
                height: 45,
                borderRadius: 15,
              }}
            ></View>
            {/* use this for toggle: https://blog.logrocket.com/build-animated-slide-toggle-react-native/ */}
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.heading2}>About Me</Text>
            <Text style={styles.body}>
              I’m a student at St. Augustine SS who is very interested in
              exploring the world of UI/UX design. I would appreciate any
              opportunity to dive into a project and meet others interested in
              the field.
            </Text>
          </View>
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.heading2}>Toolbox</Text>
            <Text style={styles.textButton}>View all (12)</Text>
          </View>
        </View>
        <View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 5, flexDirection: "row", paddingLeft: 30 }}
          >
            {this.state.toolbox.map((skill) => (
              <SelectMultipleButton
                key={skill}
                buttonViewStyle={styles.tagButton}
                textStyle={styles.tagText}
                highLightStyle={styles.tagButtonHighlight}
                value={skill}
              />
            ))}
          </ScrollView>
        </View>

        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginLeft: 30,
            marginRight: 30,
          }}
        >
          <Text style={styles.heading2}>Interests</Text>
          <Text style={styles.textButton}>View all (6)</Text>
        </View>
        <View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.tagScroll}
          >
            {this.state.interests.map((interest) => (
              <SelectMultipleButton
                key={interest}
                buttonViewStyle={styles.tagButton}
                textStyle={styles.tagText}
                highLightStyle={styles.tagButtonHighlight}
                value={interest}
              />
            ))}
          </ScrollView>
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginRight: 30,
            marginLeft: 30,
          }}
        >
          <Text style={styles.heading2}>Badges</Text>
          <Text style={styles.textButton}>View all (4)</Text>
        </View>
        <View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.tagScroll}
          >
            <BadgeCard
              title={"First Python Project"}
              tool={"python"}
              new={true}
            ></BadgeCard>
            <BadgeCard
              title={"Collaborated on Figma"}
              tool={"python"}
              new={true}
            ></BadgeCard>
            <BadgeCard
              title={"10 Figma Projects"}
              tool={"python"}
              new={false}
            ></BadgeCard>
            <BadgeCard
              title={"First GitHub Repo"}
              tool={"python"}
              new={false}
            ></BadgeCard>
          </ScrollView>
        </View>

        <View style={{ marginRight: 30, marginLeft: 30 }}></View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  tagButton: {
    borderRadius: 5,
    height: 30,
    fontFamily: "Nunito_700Bold",
    fontSize: 12,
  },
  tagButtonHighlight: {
    borderColor: "#7250CA",
    backgroundColor: "rgba(114, 80, 202, 0.3)",
    textColor: "#7250CA",
    borderTintColor: "#7250CA",
  },
  profilePicture: {
    width: 94,
    height: 94,
    borderRadius: 400,
  },
  heading1: {
    fontFamily: "Nunito_700Bold",
    fontSize: 36,
    color: "#2C2C2C",
    marginLeft: 10,
  },
  heading2: {
    fontFamily: "Nunito_700Bold",
    fontSize: 20,
    color: "#2C2C2C",
  },
  email: {
    // come up with better classes - can prob combine these 2 below if i fix the margin
    fontFamily: "Nunito_700Bold",
    fontSize: 14,
    color: "#928F8F",
    marginLeft: 10,
  },
  textButton: {
    fontFamily: "Nunito_700Bold",
    color: "#928F8F",
    fontSize: 12,
  },
  body: {
    fontFamily: "Nunito_400Regular",
    fontSize: 14,
    lineHeight: 18,
    color: "#2C2C2C",
    marginTop: 5,
  },
  tagScroll: {
    marginTop: 5,
    flexDirection: "row",
    paddingLeft: 30,
  },
  tagText: {
    fontSize: 12,
    fontFamily: "Nunito_400Regular",
  },
});
