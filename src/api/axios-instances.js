import axios from 'axios'

const axiosAppJson = axios.create({
  /* baseURL: 'http://localhost:8081' */
})
axiosAppJson.defaults.headers.post['Accepts'] = 'application/json'

axiosAppJson.interceptors.response.use(function (response) {
  return response
}, function (error) {
  /* var resolvedError = resolveCustomServerException(error); */
  return Promise.reject(error)
})
/*

const axiosMultipart = axios.create({
   baseURL: 'http://localhost:8081'
})
axiosMultipart.defaults.headers.post['Content-Type'] = 'multipart/form-data'
*/

export { axiosAppJson }
