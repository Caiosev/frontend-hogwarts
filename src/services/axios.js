import axios from 'axios';

export default axios.create({
    baseURL: 'https://hogwarts-api.seventerprise.tech',
    headers: {
        Authorization: `Bearer ${
            JSON.parse(
                JSON.parse(localStorage.getItem('persist:hogwarts')).auth
            ).token
        }`,
    },
});
