/* eslint-disable no-param-reassign */
import axios from 'axios';

// const token = () => {
//     try {
//         return `Bearer ${
//             JSON.parse(
//                 JSON.parse(localStorage.getItem('persist:hogwarts')).auth
//             ).token
//         }`;
//     } catch (error) {
//         console.log(error);
//         return undefined;
//     }
// };

// token();

const instance = axios.create({
    baseURL: 'https://hogwarts-api.seventerprise.tech',
});

instance.interceptors.request.use(async (config) => {
    if (localStorage.getItem('persist:hogwarts')) {
        const { token } = JSON.parse(
            JSON.parse(localStorage.getItem('persist:hogwarts')).auth
        );
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default instance;
