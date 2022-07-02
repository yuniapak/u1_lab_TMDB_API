const API_KEY = 'a5edeba7ff328582c92cb0910bbc227c'
const DOMAIN = 'https://api.themoviedb.org/3'
const IMAGE_BASE_PATH = 'https://image.tmdb.org/t/p/original'

const button = document.querySelector('#search')
const movieInput = document.querySelector('#search-input')
const movieList = document.querySelector('.movie-list')

button.addEventListener('click', async () => {
  let movie = movieInput.value
  let response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${movie}&api_key=${API_KEY}`
  )
  let movies = response.data.results
  console.log(response.data.results)
  //console.log(movie)
  renderList(movies)
})

const renderList = (movies) => {
  for (let i = 0; i < movies.length; i++) {
    const poster = document.createElement('div')
    movieList.appendChild(poster)
    poster.innerHTML = `<img src = https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movies[i].poster_path}>`

    const movieInList = document.createElement('h3')
    movieInList.innerHTML = movies[i].original_title
    movieList.appendChild(movieInList)

    const movieInfo = document.createElement('p')
    movieList.appendChild(movieInfo)
    movieInfo.innerHTML = movies[i].overview
  }
}
