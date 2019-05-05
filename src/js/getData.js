import getToken from './api.js';

const getData = async (endpoint) => {
    let response = await fetch(`https://api.spotify.com/v1${endpoint}`, {
    method: 'GET',
    headers: {
        'Authorization': 'Bearer ' + getToken(),
        'Accept': 'application/json',
    }
    });

    const data = await response.json();
    return data;



}

export default getData;