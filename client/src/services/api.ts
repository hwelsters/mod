import axios from "axios";

// const apiURL = "http://localhost:4000/";
const apiURL = "http://localhost:4000/";

export const apiPost = async (url: string, payload: any, config: any) => {
  
  return await axios.post(`${apiURL}${url}`, payload, config);
};

export const apiGet = async (url: string) => {
  return await axios.get(`${apiURL}${url}`);
};
