import axiosClient from './axiosClient';

const BASE_URL = '/auth';

const loginApi = {
  login: account => {
    const url = `${BASE_URL}/login`;
    return axiosClient.post(url, account);
  },

  refreshToken: refreshToken => {
    const url = `${BASE_URL}/refresh-token`;
    return axiosClient.post(url, {refreshToken});
  },

  register: userAccount => {
    const url = `${BASE_URL}/registry`;
    return axiosClient.post(url, userAccount);
  },

  confirmAccount: account => {
    const url = `${BASE_URL}/confirm-account`;
    return axiosClient.post(url, account);
  },

  changePassword: username => {
    const url = `${BASE_URL}/reset-otp`;
    return axiosClient.post(url, username);
  },

  confirmPassword: account => {
    const url = `${BASE_URL}/confirm-password`;
    return axiosClient.post(url, account);
  },

  fetchUser: username => {
    const url = `${BASE_URL}/users/${username}`;
    return axiosClient.get(url);
    
  },
  twilioviryfyOTP(data) {
    const url = `${BASE_URL}/twilioviryfyOTP`;
    return axiosClient.post(url, data);
  },
  forgetpassword(data) {
    const url = `${BASE_URL}/forgetpassword`;
    return axiosClient.put(url, data);
  },
  checkuser(data) {
    const url = `${BASE_URL}/checkuser`;
    console.log(345,data);
    return axiosClient.post(url, data);
  },
  twiliosendOTP(data) {
    const url = "/auth/twiliosendOTP";
    return axiosClient.post(url, data);
  }
};

export default loginApi;
