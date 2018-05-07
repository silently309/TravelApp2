// import Login from './components/login/Login';
// import Register from './components/register/Register';
// import Verification from './components/register/Verification';
// import Home from './components/home/Home';
// import {HomeStack} from './Router';

// import {
//   StyleSheet,
//   ImageBackground,
//   Text,
//   View,
// } from 'react-native';
import React, { Component } from 'react';
import store from './src/store/config';
import {Navigation} from 'react-native-navigation';
import {registerScreens} from './src/screens';
import { Provider } from 'react-redux';
registerScreens(store,Provider);
Navigation.startSingleScreenApp({
  screen: {
    screen: 'travelapp.login',
    title: 'Login'
  }
})


// export default class App extends Component {
 
//   render() {
//     return (
//         <HomeStack/>
//     );
//   }
// }

