import {Navigation} from 'react-native-navigation';
import Login from '../components/login/Login';
import Home from '../components/home/Home';
import Register from '../components/register/Register';
export const registerScreens = (store, Provider) => {
    Navigation.registerComponent('travelapp.login',()=> Login, store, Provider);
    Navigation.registerComponent('travelapp.home',()=> Home, store, Provider);
    Navigation.registerComponent('travelapp.register',()=> Register, store, Provider);
}