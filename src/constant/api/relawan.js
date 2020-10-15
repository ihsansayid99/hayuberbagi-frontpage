import axios from 'src/configs/axios'

export default {
    register: (payload) => axios.post("/relawan/register", payload)
}