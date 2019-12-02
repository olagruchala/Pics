import axios from 'axios';

const APIkey = '2c932787fce757cfb0b373502a80d4a7728b8283fdadeded7a3a0f31a70aa133';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${APIkey}`
  }
});
