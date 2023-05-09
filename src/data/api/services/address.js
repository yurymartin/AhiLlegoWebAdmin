import http from '../http';

const addressService = {
  getAll: async () => {
    let jsonResponse = await http.get(`type-address`);
    return jsonResponse;
  },
  save: async body => {
    let jsonResponse = await http.post(`address`, body);
    return jsonResponse;
  },
  getAddressByUserId: async id => {
    let jsonResponse = await http.get(`address/user/${id}`);
    return jsonResponse;
  },
  getChangeAddress: async (id, body) => {
    let jsonResponse = await http.put(`/address/user/${id}`, body);
    return jsonResponse;
  },
  deleteById: async id => {
    let jsonResponse = await http.delete(`/address/${id}`);
    return jsonResponse;
  },
};

export default addressService;
