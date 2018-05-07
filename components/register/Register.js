import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    CheckBox
  } from 'react-native';
export default class Register extends Component {
    static navigationOptions ={
        header: null
      }  
      _backlogin = () => {
        this.props.navigator.pop({
            animated: true, // does the pop have transition animation or does it happen immediately (optional)
            animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the pop have different transition animation (optional)
          });
    };
    render() {
       
        return (
            <ImageBackground source={require('../../assets/bg.png')} style={styles.background}>
            <View style={styles.container}>
                <View style={styles.embay}>
                    <TouchableOpacity onPress={this._backlogin}>
                        <Text style={styles.back}>
                        Back
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.registerform}>
                        <Text style={styles.title}>
                        REGISTER ACCOUNT
                        </Text>
                        <View style={styles.divisionline}></View>
                        <View style={styles.input}>
                            <View style={styles.inputcss}>
                                <Image source={require('../../assets/user.png')} style={styles.inputicon}/>
                                <TextInput underlineColorAndroid='transparent'style={styles.textinput}
                                    placeholder='Fist name'>
                                 </TextInput>
                            </View>
                            <View style={styles.inputline}></View>
                            <View style={styles.inputcss}>
                                <Image source={require('../../assets/user.png')} style={styles.inputicon}/>
                                <TextInput underlineColorAndroid='transparent'style={styles.textinput}
                                    placeholder='Last name'>
                                 </TextInput>
                            </View>
                            <View style={styles.inputline}></View>
                            <View style={styles.inputcss}>
                                <Image source={require('../../assets/phone.png')} style={styles.inputicon}/>
                                <TextInput underlineColorAndroid='transparent'style={styles.textcodephone}
                                     placeholder='Country code'>
                                </TextInput>
                                <TextInput underlineColorAndroid='transparent'style={styles.textcodephone}
                                        placeholder='Phone number'>
                                </TextInput>
                            </View>
                            <View style = {{flexDirection : 'row'}} >
                                <View style={styles.inputcountrycodeline}></View>
                                <View style={styles.inputphoneline}></View>
                            </View>
                            
                            <View style={styles.inputcss}>
                                <Image source={require('../../assets/world.png')} style={styles.inputicon}/>
                                <TextInput underlineColorAndroid='transparent'style={styles.textinput}
                                    placeholder='Country'>
                                 </TextInput>
                            </View>
                            <View style={styles.inputline}></View>
                            <View style={styles.inputcss}>
                                <Image source={require('../../assets/lock.png')} style={styles.inputicon}/>
                                <TextInput underlineColorAndroid='transparent'style={styles.textinput}
                                    placeholder='Password'>
                                 </TextInput>
                            </View>
                            <View style={styles.inputline}></View>
                            <View style={styles.inputcss}>
                                <Image source={require('../../assets/lock.png')} style={styles.inputicon}/>
                                <TextInput underlineColorAndroid='transparent'style={styles.textinput}
                                    placeholder='Confirm password'>
                                 </TextInput>
                            </View>
                            <View style={styles.inputline}></View>
                            <View style={styles.checkbox}>
                                <CheckBox></CheckBox>
                                <Text style={styles.textaccept}>Accept terms and conditions</Text>
                            </View>
                        </View>
                        <View style={styles.btnregister}>
                            
                            <TouchableOpacity onPress={this._register}>
                                <ImageBackground source={require('../../assets/btn_login.png')}
                                    style={styles.imgbtn}>
                                <Text style={styles.textregister}>REGISTER</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            </ImageBackground>     
          );
      }
    }
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center'
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
        inputline :{
            borderTopColor: '#EEEEEE',
            borderTopWidth: 2,
            
        },
        inputphoneline :{
            borderTopColor: '#E5E5E5',
            borderTopWidth: 1,
            width : 115,
            marginLeft: 10
        },
        inputcountrycodeline :{
            borderTopColor: '#EEEEEE',
            borderTopWidth: 2,
            width : 135
        },
        inputcss : {
            flex: 1,
            flexDirection: 'row',
        },

        textcodephone: {
            marginLeft: 10,
            marginRight: 10,
            fontSize: 11,
            marginTop : 14,
            width: 90,
            height: 35,
            textAlignVertical: 'center',
        },
        inputicon: {
            height: 12,
            width: 12,
            marginLeft: 20,
            marginTop : 20

        },
        input : {
            flex: 6,
            marginTop: 2,
            marginLeft: 20,
            marginRight: 20,
        },
        textinput: {
            marginLeft: 10,
            fontSize: 11,
            marginTop : 14,
            
            width: 170,
            height: 35,
            textAlignVertical: 'center',

            
        },
        btnregister : {
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center',
        },
        back : {
            marginTop: 5,
            marginBottom: 10,
            textAlign: 'right',
            fontSize: 20,
            fontFamily: 'UTMAvoBold',
            color: '#4CA8FE'
            
        },
        registerform :{
            marginTop: 15,
            backgroundColor: '#FFFFFF',
            width: 300,
            height: 420,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#D0D5DF'
        },
        checkbox: {
            flexDirection: 'row',
            marginLeft: 10,
            marginTop: 10,
          },
        textaccept: {
            color: '#A2D1FF',
            fontSize: 10,
            marginTop: 10
          },
        imgbtn: {
            width: 200,
            height : 30
        },
        textregister: {
            textAlign: 'center',
            textAlignVertical: 'center',
            fontFamily: 'Montserrat-Regular',
            fontSize: 20,
            color:'#FFFFFF'
        },
    });