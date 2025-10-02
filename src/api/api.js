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
        return (response.data);
    } catch (error) {
        throw new TypeError("Помилка при додаванні нового користувача", error);
    }
};

export const isLogin = async (payload) => {
    const response = await fetchUser();
    const users = response;
    console.log('payload.phonemail', payload.phonemail);
    return users.some(item => item.password === payload.password
        && item.phonemail === payload.phonemail);
};

export const isSignUp = async (payload) => {
    const response = await fetchUser();
    console.log("user list", response);
    const user = response;
    return user.some((item => item.username === payload.username))
}

export const isCreate = async (payload) => {
    const response = await fetchUser();
    const users = response;
    const username = users.some(item => item.name === payload.name);
    if (username) {
        return (new Error("Користувач з таким іменем вже існує"));
    }
}   
