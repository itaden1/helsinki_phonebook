import axios from 'axios'

const url = "http://localhost:3001/numbers"

const getNumbers = () => {
    const req = axios.get(url)
    return req.then((r) => {
        return r.data
    })
}

const createNumber = (name, number) => {
    const req = axios.post(url, {
        name: name,
        phone_number: number
    })
    return req.then((r) => {
        return r.data
    })
}
const updateNumber = (id, name, number) => {
    const req = axios.put(`${url}/${id}`, {
        name: name,
        phone_number: number
    })
    return req.then((r) => r.data)
}
const deleteNumber = (id) => {
    const req = axios.delete(`${url}/${id}`)
    return req.then((r) => r.data)
}

export default {getNumbers, createNumber, deleteNumber, updateNumber}