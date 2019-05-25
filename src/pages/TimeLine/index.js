import React, { Component } from "react";

import { View } from "react-native";
import Tweet from "../../components/Tweet";
import Header from "../../components/Header";
import styles from "./styles";

export default class TimeLine extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header titulo="Tweets" />
        <Tweet />
      </View>
    );
  }
}
