import axios, { AxiosRequestConfig } from 'axios'
import { baseUrl } from './config'

const config: AxiosRequestConfig = { baseURL: baseUrl }
export const axiosInstance = axios.create(config)
