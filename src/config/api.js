import axios from 'axios'
export default axios.create({
 baseURL: `127.0.0.1:5500/api/v1/`,
 headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})