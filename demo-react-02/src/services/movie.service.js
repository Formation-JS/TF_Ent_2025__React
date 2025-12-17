import axios from 'axios';

export async function fetchAllMovie() {

    const response = await axios.get('movies', {
        baseURL: 'http://localhost:3000'
    })

    return response.data;
}