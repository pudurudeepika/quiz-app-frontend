import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const registerUser = async (formData) => {
    console.log("Sendind data:", formData);
    try {
        const response = await API.post('/users/register', formData, {
            headers: { 'Content-Type': 'application/json' }  
        });
        alert(response.data.message); 
    } catch (error) {
        console.error('Signup Error:', error.response || error.message);
        alert(error.response?.data.message || 'Error signing up');
    }
};
export const loginUser = (userData) => API.post('/users/login',userData);

