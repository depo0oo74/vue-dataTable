import axios from "axios";
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
};
const ApiServices = {
  get(Url) {
    return axios.get(Url, { headers });
  },
  post(Url, Obj) {
    return axios.post(Url, Obj, { headers });
  },
  put(Url, Obj) {
    return axios.put(Url, Obj, { headers });
  },
  delete(Url) {
    return axios.delete(Url, { headers });
  },
};

export default ApiServices;
