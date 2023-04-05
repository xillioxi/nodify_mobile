import data from "./data.js"

//https://reactnative.dev/movies.json
//http://ec2-16-162-91-12.ap-east-1.compute.amazonaws.com:5000/
const getMoviesFromApi = () => {
  return fetch('https://reactnative.dev/movies.json')
    .then(response => response.json())
    .then(json => {
      //console.log(typeof([1,2]))
      return json;
    })
    .catch(error => {
      console.error(error);
    });
};

export const getMovies = async (mod_products) => {
  movies = await getMoviesFromApi();
  //Can't move forward first, need to use async function

  console.log(movies)
  mod_products(movies)
}