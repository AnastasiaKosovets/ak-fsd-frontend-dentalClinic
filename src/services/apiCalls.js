import axios from 'axios';

export const bringProducts = async () => {
    return await axios.get(`https://rickandmortyapi.com/api/character/?page=17`);
}