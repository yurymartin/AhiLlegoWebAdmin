import http from "../http";

const userService = {
  getById: async (id) => {
    const response = await http.get(`user/${id}`);
    return response;
  },
  getByIdWithAddress: async (id) => {
    const response = await http.get(`user/address/${id}`);
    return response;
  },
  getAllDeliveriesMan: async () => {
    const response = await http.get(`user/list/delivery-man`);
    return response;
  },
};

export default userService;
