import http from "../http";

function buildQueryUrl(baseUrl, queryObject) {
  const queryArray = Object.entries(queryObject);
  if (queryArray.length === 0) {
    return baseUrl;
  }
  let queryString = `${baseUrl}?${queryArray[0][0]}=${encodeURIComponent(
    queryArray[0][1] || ""
  )}`;
  for (let i = 1; i < queryArray.length; i++) {
    queryString += `&${queryArray[i][0]}=${encodeURIComponent(
      queryArray[i][1] || ""
    )}`;
  }
  return queryString;
}

const orderService = {
  getAll: async () => {
    let jsonResponse = await http.get(`/order`);
    return jsonResponse;
  },
  findByFilters: async (filters) => {
    let url = buildQueryUrl("/order/filter", filters);
    let jsonResponse = await http.get(url);
    return jsonResponse;
  },
  getById: async (orderId) => {
    let jsonResponse = await http.get(`/order/${orderId}`);
    return jsonResponse;
  },
  changeStatus: async (data) => {
    let jsonResponse = await http.patch(`/order/change-status`, data);
    return jsonResponse;
  },
};

export default orderService;
