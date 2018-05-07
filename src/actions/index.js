import * as types from './loginTypes';
export const textMail = email => {
  return {
    type: types.TEXT_MAIL,
    email: email
  };
};

export const textPassword = password => {
  return {
    type: types.TEXT_PASSWORD,
    password: password
  };
};

export const loginFetching = (email, password) => {
  return {
    type: types.LOGIN_FETCHING,
    email: email,
    password: password
  };
};

export const logoutAccount = () => {
  return {
    type: types.LOGOUT_ACCOUNT
  };
};