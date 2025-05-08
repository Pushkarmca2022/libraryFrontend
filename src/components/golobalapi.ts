// apiService.js
import axiosInstance from './axiosConfig';

export const apiGet = async (endpoint, params = {}) => {
  try {
    const response = await axiosInstance.get(endpoint, { params });
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const apiPost = async (endpoint, data) => {
  try {
    const response = await axiosInstance.post(endpoint, data);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const apiPut = async (endpoint, data) => {
  try {
    const response = await axiosInstance.put(endpoint, data);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const apiDelete = async (endpoint) => {
  try {
    const response = await axiosInstance.delete(endpoint);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};
