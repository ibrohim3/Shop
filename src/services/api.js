import axios from 'axios';

const api = axios.create({

    baseURL: 'https://68fb5c6694ec96066025c8da.mockapi.io',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api