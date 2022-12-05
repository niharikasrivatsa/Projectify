import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import _ from "lodash";
import {SelectMultipleButton} from "react-native-selectmultiple-button";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TouchableHighlight } from "react-native-gesture-handler";

export default class ExploreProjectCard extends Component{
  constructor(data) {
    super(data);

    this.state = {
      author: data["author"],
      title: data["title"],
      imageLink: data["image"],
      tags: data["tags"],
      description: data["description"]
    };
  }

  render() {
    return (
      <View style={[styles.card, styles.shadowProp]}>
        <View style = {{
            flexDirection: "row",
            flexWrap:"wrap"
        }}>
            <Text style ={styles.author}>{this.state.author}</Text>
            {/* <MaterialIcons name="bookmark-outline" size={21} /> */}
        </View>

        <View style = {{
            flexDirection: "row",
            // flexWrap: "wrap"
        }}>
            <Image 
                style={styles.image}
                source={require("../assets/images/sampleProjectPic.png")} />

            <View style = {{
                flexDirection: "column",
                marginLeft: 10,
                marginRight: 18,
                marginVertical: 10,
                flexShrink: 1
            }}>
                <Text style= {styles.title}>{this.state.title}</Text>
                <View style={{flexDirection: "row"}}>
                    {this.state.tags.map(interest => (
                        <SelectMultipleButton
                            key={interest}
                            buttonViewStyle={styles.tagButton}
                            textStyle={{
                                fontSize: 10,
                                fontFamily:"Nunito_400Regular"
                            }}
                            highLightStyle={styles.tagButtonHighlight}
                            value={interest}
                            />
                    ))}
                </View>
                <Text style={styles.description}>{this.state.description}</Text>
                <TouchableOpacity
                    onPress={() => {}}
                    style={styles.button}>
                    <Text
                    style={styles.buttonTxt}>
                    Intrested 
                    </Text>
                </TouchableOpacity>
            </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    card: {
        alignSelf: 'center',
        marginVertical: 10,
        width: 330,
        height: 190,
        backgroundColor: "#FFF",
        borderRadius: 15,
        flexDirection: "column"
    },
    shadowProp: {
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 4,
        shadowRadius: 4
      },
    image: {
        width: 82, 
        height: 132,
        marginTop: 7,
        marginLeft: 15,
        borderWidth: 1,
        borderRadius: 5
     },
    title: {
        fontFamily: 'Nunito_700Bold',
        fontSize: 20,
        marginLeft: 5,
        color: "#2C2C2C",
        flexShrink: 1
    },
    author: {
        fontFamily: "Nunito_700Bold",
        fontSize: 12,
        textAlign: "left",
        marginLeft: 20,
        marginTop: 16,
        color: "rgba(146, 143, 143, 1)"
    },
    tagButton: {
        borderRadius: 7,
        height: 23,
    },
    tagButtonHighlight: {
        borderColor: "#7250CA",
        backgroundColor: "rgba(114, 80, 202, 0.3)",
        textColor: "#7250CA",
        borderTintColor: "#7250CA"
    },
    description: {
        fontFamily: "Nunito_400Regular",
        fontSize: 12,
        textAlign: "left",
        marginLeft: 5,
        marginTop: 6,
        color: "#928F8F",
        flexShrink: 1
    },
    button: {
        backgroundColor: '#FFF',
        marginTop: 8,
        width: 85,
        height: 28,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'rgba(44, 44, 44, 1)',
        justifyContent: 'center',
        alignSelf: 'flex-end'
    },
    buttonTxt:{
        color: 'rgba(44, 44, 44, 1)',
        fontSize: 12,
        textAlign: 'center',
        fontFamily: 'Nunito_400Regular',
    }
  });
