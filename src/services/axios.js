import axios from 'axios';

const token = () => {
    try {
        return `Bearer ${
            JSON.parse(
                JSON.parse(localStorage.getItem('persist:hogwarts')).auth
            ).token
        }`;
    } catch (error) {
        return undefined;
    }
};

token();

export default axios.create({
    baseURL: 'https://hogwarts-api.seventerprise.tech',
    headers: {
        Authorization: token() !== undefined ? `${token()}` : '',
    },
});
