import axios from 'axios'


const instance = axios.create({
    baseURL: 'https://burger-project-211df.firebaseio.com/'
})


export default instance

