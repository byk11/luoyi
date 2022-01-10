import axios from "axios";

export function loginRequest(config) {
  const instance = axios.create({
    baseURL: 'http://localhost:8088',
    timeout: 5000
  })


  return instance(config);
}
