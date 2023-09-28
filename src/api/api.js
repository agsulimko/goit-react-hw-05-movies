import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/';

export const getAllMoviesTrending = async () => {
  const { data } = await axios(`3/trending/movie/day`, {
    params: {
      api_key: '0649efc971b913d6bfebf656f94b5c92',
      language: 'en-US',
    },
  });
  console.log(data);
  return data;
};

export const getMoviesTrending = async moveId => {
  const { data } = await axios(`3/movie/${moveId}`, {
    params: {
      api_key: '0649efc971b913d6bfebf656f94b5c92',
      language: 'en-US',

      // moveId: `${value}`,

      // query: `${query}`,
    },
  });
  console.log(data);
  return data;
};

export const getCast = async moveId => {
  const { data } = await axios(`3/movie/976573/credits`, {
    params: {
      api_key: '0649efc971b913d6bfebf656f94b5c92',
      language: 'en-US',
      // append_to_response: `${moveId}`,
    },
  });
  console.log('Cast=', data);
  return data;
};
// {
//   const { data } = await axios(`3/search/movie`, {
//     params: {
//       api_key: '0649efc971b913d6bfebf656f94b5c92',
//       language: 'en-US',

//       // moveId: `${value}`,

//       query: `${query}`,
//     },
