import axios from 'axios';

// npm install -g json-server
// json-server --watch login.json --port 3040
const BaseURL = 'http://localhost:3040';

export const fetchUser = async () => {
    try {
        const response = await axios.get(`${BaseURL}/user`);
        return (response.data);
    } catch (error) {
        throw new TypeError("Проблеми при загрузці");
    }
};

export const isLogin = async(payload) => {
        const response = await fetchUser();
        const users = response;
        return users.some(item => item.login === payload.login && item.password === payload.password);
}
