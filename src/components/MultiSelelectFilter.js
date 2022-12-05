/*
 * @Author: Young
 */
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import _ from "lodash";
import {SelectMultipleButton} from "react-native-selectmultiple-button";

export default class FilterButtons extends Component{
  constructor(data) {
    super(data);

    this.state = {
      multipleSelectedData: ["Recent"],
      multipleData: data["options"]
    };
  }

  render() {
    return (
      <View>
        {/* <Text style={{ color: '#000', marginLeft: 10 }}>
          I like {_.join(this.state.multipleSelectedData, ", ")}
        </Text> */}
        <View
          style={{
            flexWrap: "wrap",
            flexDirection: "row",
            //justifyContent: "center"
          }}>
          {this.state.multipleData.map(interest => (
            <SelectMultipleButton
              key={interest}
              buttonViewStyle={{
                borderRadius: 7,
                height: 28,
              }}
              textStyle={{
                fontSize: 12,
                fontFamily:"Nunito_400Regular"
              }}
              highLightStyle={{
                borderColor: "#2C2C2C",
                backgroundColor: "#F4F6F9",
                textColor: "#2C2C2C",
                borderTintColor: "#7250CA",
                backgroundTintColor: "rgba(114, 80, 202, 0.3)",
                textTintColor: "#7250CA"
              }}
              value={interest}
              selected={this.state.multipleSelectedData.includes(interest)}
              singleTap={valueTap =>
                this._singleTapMultipleSelectedButtons(interest)
              }
            />
          ))}
        </View>
      </View>
    );
  }

  _singleTapRadioSelectedButtons(valueTap, gender) {
    // Alert.alert('', valueTap)
    this.setState({
      radioSelectedData: gender
    });
  }

  _singleTapMultipleSelectedButtons(interest) {
    if (this.state.multipleSelectedData.includes(interest)) {
      _.remove(this.state.multipleSelectedData, ele => {
        return ele === interest;
      });
    } else {
      this.state.multipleSelectedData.push(interest);
    }

    this.setState({
      multipleSelectedData: this.state.multipleSelectedData
    });
  }

  _singleTapMultipleSelectedButtons_limited(interest) {
    if (this.state.multipleSelectedDataLimited.includes(interest)) {
      _.remove(this.state.multipleSelectedDataLimited, ele => {
        return ele === interest;
      });
    } else {
      if (this.state.multipleSelectedDataLimited.length < 3)
        this.state.multipleSelectedDataLimited.push(interest);
    }

    this.setState({
      multipleSelectedDataLimited: this.state.multipleSelectedDataLimited
    });
  }
}

const styles = StyleSheet.create({
  welcome: {
    margin: 10,
    marginTop: 30,
    color: "gray"
  }
});