import http from '../http';

const companyService = {
  getById: async id => {
    const response = await http.get(`/company/${id}`);
    return response;
  },
  getBusinessLineDetailId: async id => {
    const response = await http.get(`/company/business-line-detail/${id}`);
    return response;
  },
  getTypeProducts: async id => {
    const response = await http.get(`/type-product-company/company/${id}`);
    return response;
  },
};

export default companyService;
