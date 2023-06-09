import axios from "axios";
import AhiLlegoError from "../../../common/error/handler";
import { apiAhiLlego } from "../../../common/utils/Constants";

let urlBase = apiAhiLlego.production;

const instance = axios.create({
  baseURL: urlBase,
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const get = async (endpoint = "", headers = {}) => {
  try {
    const response = await instance({
      method: "GET",
      url: endpoint,
      headers: headers,
    });
    return response.data;
  } catch (error) {
    throw new AhiLlegoError(
      error.response.data.statusCode,
      error.response.data.error,
      error.response.data.message
    );
  }
};

const post = async (endpoint = "", body, headers = {}) => {
  try {
    const response = await instance({
      method: "POST",
      url: endpoint,
      data: body,
      headers: headers,
    });
    return response.data;
  } catch (error) {
    throw new AhiLlegoError(
      error.response.data.statusCode,
      error.response.data.error,
      error.response.data.message
    );
  }
};

const put = async (endpoint = "", body, headers = {}) => {
  try {
    const response = await instance({
      method: "PUT",
      url: endpoint,
      data: body,
      headers: headers,
    });
    return response.data;
  } catch (error) {
    throw new AhiLlegoError(
      error.response.data.statusCode,
      error.response.data.error,
      error.response.data.message
    );
  }
};

const patch = async (endpoint = "", body, headers = {}) => {
  try {
    const response = await instance({
      method: "PATCH",
      url: endpoint,
      data: body,
      headers: headers,
    });
    return response.data;
  } catch (error) {
    throw new AhiLlegoError(
      error.response.data.statusCode,
      error.response.data.error,
      error.response.data.message
    );
  }
};

const del = async (endpoint = "", body, headers = {}) => {
  try {
    const response = await instance({
      method: "DELETE",
      url: endpoint,
      data: body,
      headers: headers,
    });
    return response.data;
  } catch (error) {
    throw new AhiLlegoError(
      error.response.data.statusCode,
      error.response.data.error,
      error.response.data.message
    );
  }
};

export default {
  get,
  post,
  put,
  patch,
  delete: del,
};
