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
          {this.state.new && <Text style={styles.flag}>New</Text>}
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
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 10,
    marginRight: 10,
    width: 129,
    height: 145,
    marginVertical: 10,
  },
  shadowProp: {
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
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
    width: 90,
    textAlign: "center",
  },
  flag: {
    marginRight: 10,
    fontFamily: "Nunito_700Bold",
    fontSize: 11,
    color: "#2C2C2C",
  },
});
