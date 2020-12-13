// import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, TextInput, View, TouchableOpacity , Text, StatusBar} from 'react-native';

export default class LoginForm extends Component {
  render () {
    return (
      <View style={styles.container}>
        <StatusBar
        barStyle='light-content'/>
        <TextInput
          style={styles.input}
          placeholder='username or email'
          placeholderTextColor='rgba(255,255,255,0.7)'
          returnKeyType='next'
          keyboardType='email-address'
          autoCapitalize='none'
          onSubmitEditing={()=>this.passwordInput.focus()}
          autoCorrect={false}

          >
        </TextInput>
        <TextInput
        style={styles.input}
        placeholder='password'
        secureTextEntry
        placeholderTextColor='rgba(255,255,255,0.7)'
        returnKeyType='go'
        ref={(input)=> this.passwordInput = input}

        >          
        </TextInput>
        <TouchableOpacity style={styles.buttonCcontainer}>
          <Text style={styles.buttonText}>LOGIN
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
    marginBottom: 10,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 10,
    color: '#fff',

  },
  buttonCcontainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 20

  },
  buttonText: {
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: '700'

  }



});
