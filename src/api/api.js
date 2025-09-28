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

export const addUser = async (payload) => {
    try {
        const response = await axios.post(`${BaseURL}/user`, payload);
        // return (response.data);
    } catch (error) {
        throw new TypeError("Помилка при додаванні нового користувача", error);
    }
};

export const isLogin = async (payload) => {
    const response = await fetchUser();
    const users = response;
    return users.some(item => item.name === payload.name
        && item.password === payload.password
        && (item.email === payload.email || item.phone === payload.phone));
};

export const isCreate = async (payload) => {
    const response = await fetchUser();
    const users = response;
    const username = users.some(item => item.name === payload.name);
    if (username) {
        return (new Error("Користувач з таким іменем вже існує"));
    }
}   
