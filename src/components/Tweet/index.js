import React, { Component } from "react";

import { View, Text } from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Heart from "react-native-vector-icons/AntDesign";
import Retweet from "react-native-vector-icons/FontAwesome5";

export default class Tweet extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.autor}>Pryscilla Lassance</Text>
          <Text style={styles.data}>06 maio 19 | 12:30</Text>
        </View>
        <Text style={styles.conteudo}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna wirl aliqua. Up
          exlaborum incididunt quis nostrud exercitatn. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna wirl aliqua. Up exlaborum incididunt quis
          nostrud exercitatn.
        </Text>
        <View style={styles.footer}>
          <View style={styles.iconsLeft}>
            <Heart name="heart" size={20} color="#000000" />
            <Text style={styles.likes}>120</Text>
          </View>
          <View style={styles.iconsRight}>
            <Retweet
              style={{ marginRight: 10 }}
              name="retweet"
              size={20}
              color="#000000"
            />
            <Icon name="delete" size={20} color="#000000" />
          </View>
        </View>
      </View>
    );
  }
}
