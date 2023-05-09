import http from "../http";

const statusOrderService = {
  getAll: async () => {
    let jsonResponse = await http.get(`status-order`);
    return jsonResponse;
  },
};

export default statusOrderService;
