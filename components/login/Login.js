import React, { Component } from 'react';
import LoginLogo from './LoginLogo';
import LoginForm from './LoginForm';
import LoginRegister from './LoginRegister';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView
} from 'react-native';
export default class Login extends Component {
  static navigationOptions ={
    header: null
  } 
  render() {

      return (
        <ImageBackground source={require('../../assets/bg.png')} style={styles.background}>
        
        <View style={styles.container}>
            {/* <Loader loading={this.state.loading}/> */}
            <LoginLogo/>
            <LoginForm navigator={this.props.navigator}/>
            <LoginRegister navigator={this.props.navigator}/>
        </View>   
        </ImageBackground>
        );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex :1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    background: {
      flex: 1,
    },
    scroll:
    {
      flex: 1,
    }
  });
  
 