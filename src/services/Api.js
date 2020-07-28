import axios from 'axios'

export default() => {
    return axios.create({
        baseURL: 'SOMEURL',
        withCredentials: false,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
}