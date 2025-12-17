import axios from 'axios';

export async function fetchAllMovie() {

    const response = await axios.get('movies', {
        baseURL: 'http://localhost:3000'
    });

    // Ne pas faire ça en prod ! (╯°□°）╯︵ ┻━┻
    await (new Promise(resolve => setTimeout(resolve, 1_500)));

    return response.data;
}

export async function postNewMovie(data) {

    const result = await axios.post('movies', data, {
        baseURL: 'http://localhost:3000'
    });

    // Ne pas faire ça en prod ! (╯°□°）╯︵ ┻━┻
    await (new Promise(resolve => setTimeout(resolve, 1_000)));

    return result.data;
}