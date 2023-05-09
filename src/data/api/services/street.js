import http from '../http';

const streetService = {
  getAll: async () => {
    let jsonResponse = await http.get(`street`);
    return jsonResponse;
  },
};

export default streetService;
