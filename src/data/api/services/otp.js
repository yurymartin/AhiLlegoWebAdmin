import http from '../http';

const otpService = {
  generate: async body => {
    let jsonResponse = await http.post(`otp/generate`, body);
    return jsonResponse;
  },
  validate: async body => {
    let jsonResponse = await http.post(`otp/verification`, body);
    return jsonResponse;
  },
};

export default otpService;
