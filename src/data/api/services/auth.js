import http from '../http';

const authService = {
  signInCustomer: async body => {
    const response = await http.post(`auth/signin/customer`, body);
    return response;
  },
  signUpCustomer: async body => {
    const response = await http.post(`auth/register/customer`, body);
    return response;
  },
};

export default authService;
