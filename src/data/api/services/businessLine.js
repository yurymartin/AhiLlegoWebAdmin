import http from '../http';

const businessLineService = {
  getAll: async () => {
    const response = await http.get(`business-line`);
    return response;
  },
};

export default businessLineService;
