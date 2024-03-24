import axios from 'axios';
import { BASE_URL } from './server';

export async function createUser(user) {
  try {
    const response = await axios.post(`${BASE_URL}/user/create-user`, user); // Note: Axios will automatically set the correct Content-Type header for multipart/form-data
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}
