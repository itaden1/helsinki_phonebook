import axios from 'axios'

const url = "http://localhost:3001/numbers"

const getNumbers = () => {
    console.log("getting numbers")
    const req = axios.get(url)
    return req.then((r) => {
        return r.data
    })
}

const createNumber = (name, number) => {
    console.log("creating new contact")
    const req = axios.post(url, {
        name: name,
        phone_number: number
    })
    return req.then((r) => {
        return r.data
    })
}

export default {getNumbers, createNumber}