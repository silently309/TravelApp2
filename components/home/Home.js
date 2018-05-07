import React, { Component } from 'react'
import {View, StyleSheet, Text, Image, ScrollView, TouchableOpacity,AsyncStorage} from 'react-native'
import FooterHome from './FooterHome'

export default class Home extends Component {
  removeinfo = async()=>{
    try {
        await AsyncStorage.removeItem("@token")
 
    } catch (error) {
         console.log(error)
    }
  }
  _backlogin = () => {
    this.removeinfo();
    this.props.navigator.push({
      screen: 'travelapp.login',
      title: 'HomeScreen'
  })
};
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        <TouchableOpacity onPress={this._backlogin}>
          <Text style={styles.title}>Home Page</Text>
        </TouchableOpacity>
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <Image source={require('./../../assets/home_search.png')}
                  style={styles.searhButton}/>
        </View>
        <Text style={{marginLeft: 10, marginTop: -10, fontWeight: 'bold', fontSize: 16}}>New listings near you</Text>
        <FooterHome/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    height: 80,
    justifyContent: 'flex-end',
    backgroundColor: '#006092'
  },
  title: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 20,
    fontSize: 25
  },
  searhButton: {
    height: 60,
    width: 60,
    marginTop: -30,
    marginRight: 10
  }
})