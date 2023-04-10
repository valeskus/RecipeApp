import axios from 'axios';

const BASE_URL = 'http://localhost:';

export const getSortList = async () => {
  try {
    const result = await axios.get(`${BASE_URL}/sort`);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const getFilterList = async () => {
  try {
    const result = await axios.get(`${BASE_URL}/filter`);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
