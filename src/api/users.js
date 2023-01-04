
import axios from 'axios';

export const fetchUsers = () => axios.get('http://localhost:3001/users');
export const addUser = (user) => axios.post('http://localhost:3001/users', user);
export const isUserRegistered = (user) => axios.post('http://localhost:3001/users/login', user)