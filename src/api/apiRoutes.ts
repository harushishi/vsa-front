import axios from 'axios';
//puedo agarrar directamente el token del localstorage? 

export const userApi = axios.create({
    baseURL: 'http://localhost:3000/api/users',
    headers: { 'authorization': 'Bearer ' + localStorage.getItem('token') ?? '' }
});

export const authApi = axios.create({
    baseURL: 'http://localhost:3000/api/auth',
    headers: { 'authorization': 'Bearer ' + localStorage.getItem('token') ?? '' }
});

export const postApi = axios.create({
    baseURL: 'http://localhost:3000/api/posts',
    headers: { 'authorization': 'Bearer ' + localStorage.getItem('token') ?? '' }
});

export const isAuthorized = async () => {
    console.log(localStorage.getItem('token'))
    const req = await authApi.get(`/authorize`)
    return req.statusText
}