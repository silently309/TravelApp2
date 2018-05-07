import React from 'react';
import {
    StackNavigator
  } from 'react-navigation';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Verification from './components/register/Verification';
import Home from './components/home/Home';

export const HomeStack = StackNavigator({
    
    
    ScreenLogin:{
        screen: Login
    },
    ScreenRegister: {
        screen: Register
    },
    ScreenMyHome: {
        screen: Home
    },
})
export default HomeStack;
  