import { applyAuthTokenInterceptor, setAuthTokens, clearAuthTokens } from 'axios-jwt';
import axios from 'axios';
import { URL_API_ROOT } from '../config/Constants';

/**
 * Instance of axios to which apply the interceptor
 */
const axiosInstance = axios.create({ baseURL: URL_API_ROOT })

/**
 * JWT refresh function
 * @param {*} refresh 
 * @returns 
 */
const requestRefresh = (refresh) => {
    return axios.post(`${URL_API_ROOT}/login`, { refresh })
      .then(response => response.data.access_token)
};

applyAuthTokenInterceptor(axiosInstance, { requestRefresh });

/**
 * Login function
 * @param {*} params username and passwords of the user
 */
const login = async (params) => {
  const response = await axiosInstance.post('/login', params)

  // save tokens to storage
  setAuthTokens({
    accessToken: response.data.access_token,
    refreshToken: response.data.refresh_token
  })
}

/**
 * Logout function
 * @returns 
 */
const logout = () => clearAuthTokens()

export {requestRefresh, login, logout}