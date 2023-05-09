import http from '../http';
const PREFIX = '/product';
const productService = {
  getByTypeAndCompany: async (typeproductId, companyId) => {
    let jsonResponse = await http.get(
      `${PREFIX}/type-product/${typeproductId}/company/${companyId}`,
    );
    return jsonResponse;
  },
};

export default productService;
