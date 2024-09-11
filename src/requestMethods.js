import axios from "axios";

const BASE_URL = "http://localhost:3000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YjVhOWU4MTcxNDQwZGY4Njk0YzAyYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcyNDcyOTc1NywiZXhwIjoxNzI0OTg4OTU3fQ.i4lFQWiVVtoAd2kuc-A3UfeIADuPA1VMgk0jrSAZag0"

export const publicRequest = axios.create({

    baseURL: BASE_URL,

})

export const userRequest = axios.create({

    baseURL: BASE_URL,
    headers:{token:`Bearer ${TOKEN}`},
    
})