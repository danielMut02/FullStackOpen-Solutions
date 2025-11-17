import axios from "axios";
const api_key = import.meta.env.VITE_SOME_KEY 
const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=`

const getData = (capital) => {
    const request = axios.get(`${baseUrl}${capital}&appid=${api_key}&units=metric`)
    return request
        .then(response => {
            response.data
        })
        .catch((error) => {
            console.log(`Error fetching data: ${error}`)
        })
}

export default {getData}
