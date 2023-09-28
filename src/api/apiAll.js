import axios from 'axios';
// ('https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=0649efc971b913d6bfebf656f94b5c92');

const BAZE_URL = 'https://api.themoviedb.org/3/';
// const BAZE_URL = 'https://api.themoviedb.org/3/trending/movie/day';
const getAllMovies = async value => {
  const { data } = await axios(`${BAZE_URL}trending/movie/day`, {
    params: {
      // const BAZE_URL = 'https://api.themoviedb.org/3/search/movie';
      // const getAllMovies = async value => {
      //   const { data } = await axios(BAZE_URL, {
      //     params: {
      api_key: '0649efc971b913d6bfebf656f94b5c92',
      language: 'en-US',
      original_language: 'en-US',
      //   q: 'Jack+Reacher',
      //   query: 'Jack+Reacher',
      moveId: `${value}`,
      // q: value,
      // image_type: 'photo',
      // orientation: 'horizontal',
      // safesearch: 'true',
      // page: page,
      // per_page: 10,
    },
  });
  console.log(data);
  return data;
};

export default getAllMovies;
// 0649efc971b913d6bfebf656f94b5c92

// import axios from 'axios';
// // ('https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=0649efc971b913d6bfebf656f94b5c92');

// const BAZE_URL = 'https://api.themoviedb.org/3/search/movie';
// const getAllMovies = async value => {
//   const { data } = await axios(BAZE_URL, {
//     params: {
//       api_key: '0649efc971b913d6bfebf656f94b5c92',
//       //   language: 'en-US',
//       //   original_language: 'en-US',
//       //   q: 'Jack+Reacher',
//       query: `${value}`,
//       //   q: `${value}`,
//       // q: value,
//       // image_type: 'photo',
//       // orientation: 'horizontal',
//       // safesearch: 'true',
//       // page: page,
//       // per_page: 10,
//     },
//   });
//   console.log(data);
//   return data;
// };

// export default getAllMovies;
// // 0649efc971b913d6bfebf656f94b5c92
