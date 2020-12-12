import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, TextInput, View, Image, TouchableOpacity , Text} from 'react-native';

export default class LoginForm extends Component {
  render () {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='username or email'
          placeholderTextColor='rgba(255,255,255,0.7)'
          >
        </TextInput>
        <TextInput
        style={styles.input}
        placeholder='password'
        placeholderTextColor='rgba(255,255,255,0.7)'
        >          
        </TextInput>
        <TouchableOpacity stype={styles.buttonContainer}>
          <Text style={styles.buttonText}>Login
          </Text>
          </TouchableOpacity>

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
  },
  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 10

  },
  buttonText: {
    textAlign: 'center'

  }



});
