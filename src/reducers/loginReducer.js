import * as types from '../actions/loginTypes';
import { AsyncStorage, Alert } from 'react-native';

const initialState = {
  //isLogged: false,
  email: '',
  password: '',
  //loading: false
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TEXT_MAIL:
      return {
        ...state,
        email: action.email
      };

    case types.TEXT_PASSWORD:
      return {
        ...state,
        password: action.password
      };

    case types.LOGIN_FETCHING:
      return {
        ...state,
        email: action.email,
        password: action.password,
      };

    // case types.LOGIN_SUCCESS:
    //   AsyncStorage.multiSet([
    //     ['token', action.data.data.token],
    //     ['email', action.data.data.email]
    //   ]);
    //   return {
    //     ...state,
    //     isLogged: true,
    //     loading: false
    //   };

    // case types.LOGIN_FAILURE:
    //   Alert.alert(action.message);
    //   return {
    //     ...state,
    //     isLogged: false,
    //     loading: false
    //   };

    // case types.LOGOUT:
    //   AsyncStorage.multiRemove(['token', 'email']);
    //   return {
    //     ...state,
    //     email: '',
    //     password: '',
    //     isLogged: false,
    //     loading: false
    //   };

    default:
      return state;
  }
};

export default loginReducer;
