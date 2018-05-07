import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
export default class LoginLogo extends Component {
    render() {
      return (
        <View style={styles.container}>
            <Image source={require('../../assets/logo.png')} style={styles.imglogo}/>
            <Text style={styles.logoname}>Archer</Text>  
        </View>     
        );
    }
  }
  const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imglogo: {
        width: 55,
        height: 55 
    },
    logoname: {
        marginLeft: 20,
        fontSize: 35,
        fontFamily: 'UTMAvoBold',
        color: '#548FFB'
    }
  });