import axios from 'axios';

const slgescBaseUrl = 'https://www.slgesc.nat.gov.tw/'

// axios.defaults.withCredentials = true
// axios.defaults.baseURL = null
// axios.defaults.timeout = 60 * 1000 //timeout 60秒


const slgescApi = axios.create({
  baseURL: slgescBaseUrl
});




slgescApi.interceptors.response.use(
  response => response,
  // (error) => {
  //   if (error.code === 'ETIMEDOUT' || error.code === 'ECONNABORTED') {
  //     $nuxt.$toast.show({
  //       message: `連線失敗，請您重新進行交易`,
  //       classToast: "bg-red-500",
  //     })
  //   }
  //   if (error.response.status === 401) {
  //     $nuxt.$router.push({name: 'timeout'})
  //   } else {
  //     return Promise.reject(error);
  //   }
  // }
);

export { slgescApi }
