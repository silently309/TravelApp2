import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ImageBackground,
  Alert,
  AsyncStorage,
  Modal,
  ActivityIndicator,
  ToastAndroid
} from 'react-native';
import { connect } from 'react-redux';
import * as actiontypes from '../../src/actions/index';
class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state={
          showProcessbar: false,
          colorNotificationMail: "#D2D2D2",
          colorNotificationPass: "#D2D2D2",
          notificationMail:"",
          notificationPass:""
        }
    }
 
    //  start Check token
    // checkinfo = async()=>{
    //     try {
    //         var e = await AsyncStorage.getItem("@token")
    //         console.log("token : " + e)
    //         if(e != null)
    //         {
    //             //this.props.navigation.navigate('ScreenMyHome',{thamso:e});
    //             this.props.navigator.push({
    //                 screen: 'travelapp.home',
    //                 title: 'HomeScreen'
    //               });
    //         }
    //         else{
    //         }
    //     } catch (error) {
    //          console.log(error)
    //     }
    //   }
    //end Check token
    
    // componentWillMount(){
    //     this.checkinfo()
        
    // }
    //start save token
    // saveinfo = async()=>{
    //     try {
    //         await AsyncStorage.setItem("@token", this.state.data.data.token)
    //         console.log("Save ok!!!!")
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
     //end save token

    // _colornotificationMail = () => this.setState({colorNotificationMail:"#E44E80"});
    // _colornotificationPass = () => this.setState({colorNotificationPass:"#E44E80"});
    // _emptymail = () => this.setState({mail:"",notificationMail:"",colorNotificationPass:"#D2D2D2"});
    // _emptypass = () => this.setState({pass:"",notificationPass:"",colorNotificationPass:"#D2D2D2"});
    
    // start click button login
    ClickLogin = () => {
        Alert.alert(this.props.email + " " + this.props.password);
        
        // this.props.navigator.push({
        //     screen: 'travelapp.home',
        //     title: 'HomeScreen'
        // })
        // let _mail=this.state.mail;
        // let _pass=this.state.pass;
        // let check = true;
        // if(_pass.length <6 || _pass.length >=20 )
        //     {
        //         check = false 
        //         this._colornotificationPass()
        //         this.setState({pass:""})
        //         this.setState({notificationPass:"*password must be >= 8 and >= 20"})
        //     }
        // if(_mail.indexOf("@gmail.com")==-1)
        // {
        //     check = false
        //     this._colornotificationMail()
        //     this.setState({mail:""})
        //     this.setState({pass:""})
        //     this.setState({notificationMail:"*email format @gmail.com(.vn)"})
        // }   
        // if(_mail.length == 0 )
        // {
        //     check = false
        //     this._colornotificationMail()
        //     this.setState({notificationMail:"*Please provide E-mail"})
        // }
        // if(_mail.length == 0 )
        // {
        //     check = false
        //     this._colornotificationMail()
        //     this.setState({notificationMail:"*Please provide E-mail"})
        // }
        
        // if(_pass.length == 0)
        // {
        //     check = false
        //     this._colornotificationPass()
        //     this.setState({notificationPass:"*Please provide password"})
        // }
        
        // if( check == true )
        // {
            
        //     this.setState({showProcessbar:true})
        //     fetch('http://travel-app.speedup.world/api/login', {
        //         method: 'POST',
        //         headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({
        //             "email": this.state.mail ,
        //             "password": this.state.pass
        //         })
        //     })
        //     .then((response)=>response.json())
        //     .then((responseJson)=>{
        //         console.log(responseJson) 
        //         this.setState({data : responseJson})
        //         if(this.state.data.status == true ){ 
        //             Alert.alert("Login success")
        //             this.saveinfo();
        //            // this.props.navigation.navigate('ScreenMyHome');
        //            this.props.navigator.push({
        //             screen: 'travelapp.home',
        //             title: 'HomeScreen'
        //           });
        //         }
        //         else
        //             Alert.alert("E-mail or Passworrd incorrect")
        //         })
        //     .catch(
        //         (error)=>{
        //             console.log(error)
        //             ToastAndroid.show('Network Fail !!!!!!', ToastAndroid.SHORT, ToastAndroid.Top);
        //         }
        //     )
        //     .finally(
        //         this.setState({showProcessbar:false})
        //     )
        // }
        };
        // end click button login
    render() {
      return (
        <View style={styles.backgroundform}>
            <Text style={styles.title}>Login</Text>
            <View style={styles.divisionline}></View>
            <View style={styles.input}>
                <View style={styles.inputcss}>
                    <Image source={require('../../assets/email.png')} style={styles.emailpassicon}/>
                    <TextInput underlineColorAndroid='transparent'style={styles.textinput}
                    placeholder={this.state.notificationMail || "E-mail"}
                    placeholderTextColor = {this.state.colorNotificationMail || "#D2D2D2"}
                    onChangeText={email=>this.textMail(email)}
                    value={this.props.email}>
                    </TextInput>
                    <View style={styles.linetext}></View>
                </View>
                <View style={styles.linetext}></View>
                <View style={styles.inputcss}>
                    <Image source={require('../../assets/lock.png')} style={styles.emailpassicon}/>
                    <TextInput underlineColorAndroid='transparent' style={styles.textinput} 
                        placeholder={this.state.notificationPass || "password"}
                        placeholderTextColor = {this.state.colorNotificationPass || "#D2D2D2"}
                        secureTextEntry={true}
                        value={this.props.pass}
                        onChangeText={pass=>this.textPassword(pass)}
                        >
                    </TextInput>
                </View>
                <View style={styles.linetext}></View>
                {/* start ProcessBar */}
                <Modal
                transparent={true}
                animationType={'none'}
                visible={this.state.showProcessbar}
                onRequestClose={() => { 
                }}>
                    <View style={styles.modalstyle}>
                        <ActivityIndicator size="large" color="#0000ff"
                            animating={this.state.showProcessbar}/>
                    </View>
                </Modal>
                {/* end ProcessBar */}
                <Text style={styles.forgotpass}>
                    Forgot password ?
                </Text>
            </View>
            
            <View style={styles.submit}> 
                <TouchableOpacity onPress={this.ClickLogin.bind(this)}>
                    <ImageBackground source={require('../../assets/btn_login.png')}
                              style={styles.imgbtn}>
                        <Text style={styles.textlogin}>LOGIN</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        </View>     
        );
    }
};
 
const mapStateToProps = state => {
    return {
      email: state.loginReducer.email,
      pass: state.loginReducer.password
    };
};
  
const mapDispatchToProps = dispatch => {
    return {
      textMail: email => {
        dispatch(actiontypes.textMail(email));
      },
      textPassword: pass => {
        dispatch(actiontypes.textPassword(pass));
      }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
  
const styles = StyleSheet.create({
    backgroundform: {
        zIndex:0,
        marginTop: 30,
        backgroundColor: '#FFFFFF',
        width: 300,
        height: 230,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#D0D5DF'
        
    },
    title: {
        flex: 1,
        fontSize: 20,
        textAlignVertical: 'center',
        marginLeft: 10,
        fontFamily: 'Montserrat-Regular'
        
    },
    divisionline : {
        borderTopColor: '#1990FE',
        borderTopWidth: 2,
    },
   
    input: {
        flex: 3,
        marginTop: 3,


    },
    
    inputcss : {
        flex: 1,
        flexDirection: 'row',
    },
    emailpassicon: {
        height: 12,
        width: 12,
        marginLeft: 40,
        marginTop:  25,
        
    },
    textinput: {
        marginLeft: 10,
        fontSize: 11,
        marginTop: 15,
        width: 200,
        height: 40,
        textAlignVertical: 'center',
    },
    linetext:{
        marginLeft: 20,
        marginRight: 20,
        borderBottomWidth: 2,
        borderBottomColor: '#F2F2F2'
      },
    submit: {
        flex: 1,
        alignItems: 'center',
        marginTop : 5,
    },

    textNotification :{
        flex: 1,
        color: 'red',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 10
    },

    forgotpass :{
        flex: 1,
        color: '#99CDFF',
        textAlign: 'center',
        textAlignVertical: 'center',
        textDecorationLine: 'underline',
        fontSize: 10
    },
    imgbtn: {
        width: 200,
        height : 30
    },
    textlogin: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontFamily: 'Montserrat-Regular',
        fontSize: 20,
        color:'#FFFFFF'
    },
    modalstyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
   
});