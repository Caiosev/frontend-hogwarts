import axios from 'axios';

const token = `Bearer ${
    JSON.parse(JSON.parse(localStorage.getItem('persist:hogwarts')).auth).token
}`;

export default axios.create({
    baseURL: 'https://hogwarts-api.seventerprise.tech',
    headers: {
        Authorization: token ? `${token}` : '',
    },
});
