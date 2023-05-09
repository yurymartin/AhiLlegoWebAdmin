import http from '../http';

const businessLineDetailService = {
  getBusinessLineId: async businessLineId => {
    const response = await http.get(
      `business-line-detail/business-line/${businessLineId}`,
    );
    return response;
  },
};

export default businessLineDetailService;
