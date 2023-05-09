import http from '../http';

const userService = {
  getById: async id => {
    const response = await http.get(`user/${id}`);
    return response;
  },
  getByIdWithAddress: async id => {
    const response = await http.get(`user/address/${id}`);
    return response;
  },
};

export default userService;
