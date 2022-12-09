import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import _ from "lodash";

export default class BadgeCard extends Component {
  constructor(data) {
    super(data);

    this.state = {
      title: data["title"],
      tool: data["tool"],
      new: data["new"],
    };
  }

  render() {
    return (
      <View style={[styles.card, styles.shadowProp]}>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Text></Text>
          {this.state.new && (
            <View style={styles.flag}>
              <Text style={styles.flagText}>New</Text>
            </View>
          )}
        </View>

        <View style={styles.cardContent}>
          <Image
            style={styles.image}
            source={require("../assets/images/figma.png")}
          ></Image>
          <Text style={styles.title}>{this.state.title}</Text>
        </View>
      </View>
    );
  }
}

// TODO: look into how to do this
const badgeImageURLs = {
  figma: "../assets/images/figma.png",
  python: "../assets/images/python.png",
  // add a default
};
const styles = StyleSheet.create({
  image: {
    height: 69,
    width: 46,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 10,
    marginRight: 10,
    width: 129,
    height: 145,
    marginTop: 5, // play around with this value, the spacing looks off
    marginBottom: 10,
  },
  shadowProp: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  cardContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "Nunito_700Bold",
    fontSize: 12,
    color: "#2C2C2C",
    marginTop: 14,
    width: 80,
    textAlign: "center",
    lineHeight: 15,
  },
  flagText: {
    fontFamily: "Nunito_700Bold",
    fontSize: 10,
    color: "white",
  },
  flag: {
    marginRight: 10,
    backgroundColor: "#7250CA",
    borderRadius: 5,
    paddingVertical: 1,
    paddingHorizontal: 7,
    justifyContent: "center",
    alignItems: "center",
  },
});
