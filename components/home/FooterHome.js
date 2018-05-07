import React, { Component } from 'react'
import {View, Image, Text, StyleSheet} from 'react-native'

export default class FooterHome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.action}>
          <Image source={require('./../../assets/home_bottom_hl.png')}></Image>
          <Text style={styles.actionName}>Home</Text>
        </View>
        <View style={styles.action}>
          <Image source={require('./../../assets/activity_bottom.png')}></Image>
          <Text style={styles.actionName}>Activities</Text>
        </View>
        <View style={styles.action}>
          <Image source={require('./../../assets/add_bottom.png')}></Image>
          <Text style={styles.actionName}>Add Listings</Text>
        </View>
        <View style={styles.action}>
          <Image source={require('./../../assets/notify_bottom.png')}></Image>
          <Text style={styles.actionName}>Notifications</Text>
        </View>
        <View style={styles.action}>
          <Image source={require('./../../assets/more_bottom.png')}></Image>      
          <Text style={styles.actionName}>Others</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    flexDirection: 'row',
    borderTopColor: '#EDEDED',
    borderTopWidth: 1,
  },
  action: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  actionName: {
    fontSize: 10,
    marginTop: 10
  }
})
