import React, { Component } from "react";

import { View, Text, StatusBar } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import IconNewTweet from "react-native-vector-icons/MaterialIcons";

import styles from "./styles";

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#E0E0E0" />
        <Icon
          style={styles.iconLeft}
          name="twitter"
          size={24.88}
          color="#1DA1F2"
        />
        <Text style={styles.titulo}>Tweets</Text>
        <IconNewTweet
          style={styles.iconRight}
          name="add-circle-outline"
          size={24}
          color="#1DA1F2"
        />
      </View>
    );
  }
}
