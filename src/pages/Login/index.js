/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";

import {
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  ActivityIndicator,
  AsyncStorage
} from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
export default class Login extends Component {
  state = {
    nomeusuario: "",
    loading: false
  };

  componentDidMount() {
    const usuario = AsyncStorage.getItem("@twitter:nomeusuario");

    if (usuario.length === 0) return null;

    // this.navegar();
  }

  navegar = () => {
    this.props.navigation.navigate("TimeLine");
  };

  salvaUsuario = async () => {
    const { nomeusuario } = this.state;

    console.log;

    if (nomeusuario.length === 0) return null;

    await AsyncStorage.setItem("@twitter:nomeusuario", nomeusuario);
    this.navegar();
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#38A1F3" />
        <Icon name="twitter" size={64} color="#38A1F3" />
        <Text style={styles.twitter}>Entrar no Twitter</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          value={this.state.nomeusuario}
          placeholder="ex: lucaspedronet"
          onChangeText={texto => this.setState({ nomeusuario: texto })}
        />
        <TouchableOpacity
          onPress={this.salvaUsuario}
          style={styles.botaoEntrar}
        >
          {this.state.loading === true ? (
            <ActivityIndicator color="#FFF" />
          ) : (
            <Text style={styles.textoBotao}>Entrar</Text>
          )}
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
