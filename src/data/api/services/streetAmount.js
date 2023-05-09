import http from '../http';

const streetAmountService = {
  /**
   *
   * @param {*} userId
   * @param {*} companyId
   * @returns
   */
  getAmountByUserIdCompanyId: async (userId, companyId) => {
    let jsonResponse = await http.get(
      `/street-amount/amount/${userId}/${companyId}`,
    );
    return jsonResponse;
  },
};

export default streetAmountService;
