import axios from 'axios';

const API = axios.create({ baseURL: 'https://quiz-app-backend-8hp3.onrender.com/api/users' });
// const API_BASE_URL = process.env.REACT_APP_API_URL;
export const registerUser = async (formData) => {
    try {
        const response = await API.post('/register', formData, {
            headers: { 'Content-Type': 'application/json' }  
        });
        return response;
    } catch (error) {
        console.error('Signup Error:', error.response?.data || error.message);
        alert(error.response?.data.message || 'Error signing up');
        throw error;
    }
};
export const loginUser = (userData) => API.post('/login',userData);



