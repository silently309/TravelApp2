import React, { Component } from 'react';
import Register from '../register/Register';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
export default class LoginRegister extends Component {
  Clickregister = () => {
    this.props.navigator.push({
      screen: 'travelapp.register',
      title: 'RegisterScreen'
  })
  };
    render() {
      return (
          <TouchableOpacity onPress = {this.Clickregister} >
            <Text style={styles.container}>
                Register a new account!
            </Text> 
          </TouchableOpacity>
           
        );
    }
  }
  const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        textDecorationLine: 'underline',
        color: '#1A92FF',
        marginTop: 15,
        fontWeight: 'bold',
        fontSize: 12,
    },
    
  });