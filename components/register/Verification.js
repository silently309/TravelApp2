import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ImageBackground
} from 'react-native';

export default class Verification extends Component {
    render() {
      return (
        <View style={styles.container}>
                <View style={styles.embay}>
                    <TouchableOpacity>
                        <Text style={styles.back}>
                        Back
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.Verificaitonform}>
                        <Text style={styles.title}>
                        REGISTER ACCOUNT
                        </Text>
                        <View style={styles.divisionline}></View>
                        <View style={styles.input}>
                            <View style={styles.inputcss}>
                                <TextInput style={styles.textinput}></TextInput>
                                <TextInput style={styles.textinput}></TextInput>
                                <TextInput style={styles.textinput}></TextInput>
                                <TextInput style={styles.textinput}></TextInput>
                            </View>
                            <Text style={styles.text4dit} >
                                Enter 4-digit verification code sent to your phone number
                            </Text>
                             <TouchableOpacity style={styles.confirm}>
                                <ImageBackground source={require('../../assets/btn_login.png')}
                                    style={styles.imgbtn}>
                                <Text style={styles.textconfirm}>CONFIRM</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>   
        </View>     
        );
    }
  }
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    background: {
        flex: 1,
      },
    embay :{
        marginTop: 15,
    },
    title : {
        flex: 1,
        textAlignVertical: 'center',
        marginTop: 5,
        marginLeft: 20,
        fontSize : 18,
        fontFamily: 'Montserrat-Regular',
        
    },
    divisionline : {
        borderTopColor: '#1990FE',
        borderTopWidth: 2,
    },

    inputcss : {
        marginTop: 10,
        flexDirection: 'row',
    },

    input : {
        flex: 5,
        marginTop: 2,
        alignItems: 'center',
    },
    textinput: {
        fontSize: 13,
        width: 50,
        textAlignVertical: 'center',
        borderBottomColor: '#B1B1B1',
    },
    text4dit: {
        fontSize: 11,
        marginTop : 13,
        marginLeft: 38,
        marginRight: 38,
        textAlign: 'center',
        fontFamily: 'Montserrat-Regular'
    },
    back : {
        marginTop: 5,
        marginBottom: 10,
        textAlign: 'right',
        fontSize: 20,
        fontFamily: 'UTMAvoBold',
        color: '#4CA8FE'
        
    },
    Verificaitonform :{
        marginTop: 15,
        backgroundColor: '#FFFFFF',
        width: 300,
        height: 200,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#D0D5DF'
    },
    
    imgbtn: {
        width: 200,
        height : 30
    },
    confirm: {
        marginTop: 13
    },
    textconfirm: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontFamily: 'Montserrat-Regular',
        fontSize: 18,
        color:'#FFFFFF'
    },
});
