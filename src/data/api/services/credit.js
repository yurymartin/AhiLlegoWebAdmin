import http from '../http';

const creditService = {
  saveByCode: async body => {
    let jsonResponse = await http.post(`credit/code`, body);
    return jsonResponse;
  },
};

export default creditService;
