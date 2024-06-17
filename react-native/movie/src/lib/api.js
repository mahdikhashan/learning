import axios from "axios"

export async function fetchMovies(page) {
  const response = await axios.get(`http://www.omdbapi.com/?s=Batman&page=${page}&apikey=13551e01`)
  return response.data
}
