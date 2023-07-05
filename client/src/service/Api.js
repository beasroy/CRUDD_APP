import axios from 'axios';

const URL ="http://localhost:8080";

export const addUser =async (data) =>{
    try {
       return await axios.post(`${URL}/add`, data) ;
    } catch (error) {
        console.log('while calling the addUser api',error);
        
    }
}