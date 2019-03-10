import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 17724d8fa3a6580fa813e7ee2db11fc319fb7a17a92ca333787eb87d41099bb7'
  }
});