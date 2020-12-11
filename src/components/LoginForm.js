import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, TextInput, View, Image } from 'react-native';

export default class LoginForm extends Component {
  render () {
    return (
      <View style={styles.container}>
        <TextInput
        style={styles.input}>

        </TextInput>
        <TextInput
        style={styles.input}>
          
        </TextInput>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    padding: 20,

  },

  input: {
    marginBottom: 20,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  }



});
