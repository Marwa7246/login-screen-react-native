import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image } from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image 
          style={styles.logo}
          source={require('../../images/login.png')}/>        
          <Text style={styles.title}>Login Screen App based on React Native!</Text>
        </View>
        <View style={styles.formContainer}>
          <LoginForm/>

        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
    // alignItems: 'center',
    // justifyContent: 'center',
    // fontSize: 33,
    // fontWeight: 'bold'
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    
  },
  logo: {
    width: 100,
    height: 100,

  },
  title: {
    marginTop: 10,
    width: 200,
    color: '#FFF',
    textAlign: 'center',
    opacity: 0.8,

  },
  formContainer: {

  }

});
