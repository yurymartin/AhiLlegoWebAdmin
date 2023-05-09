import http from '../http';

const typePayService = {
  getAll: async () => {
    let jsonResponse = await http.get(`type-pay`);
    return jsonResponse;
  },
};

export default typePayService;
