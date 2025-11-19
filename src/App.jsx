import axios from "axios";
import { useState } from "react";

const apikey = import.meta.env.VITE_MOVIEDB_API_KEY;


function App() {

  const [searchInput, setSearchInput] = useState("");
  /* console.log(searchInput); */
  const [movies, setMovies] = useState([]);
  console.log(movies);


  function fetchMovies(e) {
    e.preventDefault()

    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${searchInput}`)
      .then(res => setMovies(res.data.results))
  }

  return (
    <>
      <header>
        <form onSubmit={fetchMovies}>
          <input type="text" name="searchbar" id="searchBar" value={searchInput} onChange={e => setSearchInput(e.target.value)} />
          <button type="submit">Invia</button>
        </form>
      </header>
      <main>
        <ul>
          {
            movies.map(movie => (
              <li key={movie.id}>{movie.title}</li>
            ))
          }
        </ul>

      </main>
    </>
  )
}

export default App
