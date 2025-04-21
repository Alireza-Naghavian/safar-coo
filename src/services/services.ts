import axios, { AxiosError, AxiosRequestConfig } from "axios";
const baseURL  = process.env.NODE_ENV === "development"
? process.env.NEXT_PUBLIC_SERVER_URL
: process.env.NEXT_PUBLIC_SERVER_URL
const http = axios.create({
  baseURL,
  withCredentials: true,
});
declare module "axios" {
  export interface AxiosRequestConfig {
    _retry?: boolean;
  }
}
// interceptors 
http.interceptors.request.use(
  res=>res,
  err=>Promise.reject(err)
)
http.interceptors.response.use(
  res=>res,
 async (err:AxiosError)=>{
  const originalConfig =err.config as AxiosRequestConfig 
  if(err.response?.status===401&& !originalConfig._retry){
    originalConfig._retry = true;
    try {
     const {data}=  await axios.get(`${baseURL}/auth/refresh-token`,{withCredentials:true})
      if(data) return http(originalConfig)
    } catch (error) {
      return Promise.reject(error)
    }
  }
  return Promise.reject(err);
  }
)

const app = {
  get: http.get,
  post: http.post,
  put: http.put,
  patch: http.patch,
  delete: http.delete,
};

export default app;
