import _axios from 'axios'

const axios = _axios.create({
    baseURL: 'http://localhost:8000'
})
const authAxios = _axios.create({
    baseURL: 'http://localhost:8009'
})


export { axios, authAxios }