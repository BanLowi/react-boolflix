import axios from "axios";
import { useState } from "react";

const apikey = import.meta.env.VITE_MOVIEDB_API_KEY;

const flags = [
  { code: "IT", name: "Italia", flag: "🇮🇹" },
  { code: "US", name: "Stati Uniti", flag: "🇺🇸" },
  { code: "EN", name: "Regno Unito", flag: "🇬🇧" },
  { code: "DE", name: "Germania", flag: "🇩🇪" },
  { code: "FR", name: "Francia", flag: "🇫🇷" },
  { code: "ES", name: "Spagna", flag: "🇪🇸" },
  { code: "PT", name: "Portogallo", flag: "🇵🇹" },
  { code: "NL", name: "Paesi Bassi", flag: "🇳🇱" },
  { code: "BE", name: "Belgio", flag: "🇧🇪" },
  { code: "CH", name: "Svizzera", flag: "🇨🇭" },
  { code: "AT", name: "Austria", flag: "🇦🇹" },
  { code: "SE", name: "Svezia", flag: "🇸🇪" },
  { code: "NO", name: "Norvegia", flag: "🇳🇴" },
  { code: "DK", name: "Danimarca", flag: "🇩🇰" },
  { code: "FI", name: "Finlandia", flag: "🇫🇮" },
  { code: "IE", name: "Irlanda", flag: "🇮🇪" },
  { code: "PL", name: "Polonia", flag: "🇵🇱" },
  { code: "CZ", name: "Repubblica Ceca", flag: "🇨🇿" },
  { code: "SK", name: "Slovacchia", flag: "🇸🇰" },
  { code: "GR", name: "Grecia", flag: "🇬🇷" },
  { code: "TR", name: "Turchia", flag: "🇹🇷" },
  { code: "RU", name: "Russia", flag: "🇷🇺" },
  { code: "CN", name: "Cina", flag: "🇨🇳" },
  { code: "JP", name: "Giappone", flag: "🇯🇵" },
  { code: "KR", name: "Corea del Sud", flag: "🇰🇷" },
  { code: "IN", name: "India", flag: "🇮🇳" },
  { code: "AU", name: "Australia", flag: "🇦🇺" },
  { code: "CA", name: "Canada", flag: "🇨🇦" },
  { code: "BR", name: "Brasile", flag: "🇧🇷" },
  { code: "MX", name: "Messico", flag: "🇲🇽" }
];

function App() {

  const [searchInput, setSearchInput] = useState("");
  /* console.log(searchInput); */
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);


  function fetchData(e) {
    e.preventDefault()

    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${searchInput}`)
      .then(res => setMovies(res.data.results))

    axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${apikey}&query=${searchInput}`)
      .then(res => setSeries(res.data.results))
  }

  function getFlag(lang) {

    const findFlag = flags.find(flag => flag.code === lang.toUpperCase());

    return findFlag ? findFlag.flag : lang.toUpperCase()
  }

  return (
    <>
      <header>
        <form onSubmit={fetchData}>
          <input type="text" name="searchbar" id="searchBar" value={searchInput} onChange={e => setSearchInput(e.target.value)} />
          <button type="submit">Invia</button>
        </form>
      </header>
      <main>
        <div>
          <h2>MOVIES</h2>

          <ul>
            {
              movies.map(movie => (
                <li key={movie.id}>
                  <div className="card">
                    <h2>{movie.title}</h2>
                  </div>
                  <div className="card-body">
                    <p>{movie.original_title}</p>
                    <p>{getFlag(movie.original_language)}</p>
                    <p>{movie.vote_average}</p>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>

        <div>
          <h2>TV SERIES</h2>

          <ul>
            {
              series.map(movie => (
                <li key={movie.id}>
                  <div className="card">
                    <h2>{movie.name}</h2>
                  </div>
                  <div className="card-body">
                    <p>{movie.original_name}</p>
                    <p>{getFlag(movie.original_language)}</p>
                    <p>{movie.vote_average}</p>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>

      </main>
    </>
  )
}

export default App
