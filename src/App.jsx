import axios from "axios";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultLayout from "./layout/DefaultLayout";
import Homepage from "./pages/Homepage";

import MovieContext from "./context/MovieContext";
import SeriesContext from "./context/SeriesContext";

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

  function renderStars(vote) {

    let star = "";
    // for every vote add a star
    for (let i = 0; i < (vote / 2).toFixed(); i++) {
      star += "⭐"
    }

    return star
  }

  return (
    <SeriesContext.Provider value={{ series }}>
      <MovieContext.Provider value={{ movies }}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route index element={<Homepage />} />

            </Route>
          </Routes>
        </BrowserRouter>
      </MovieContext.Provider>
    </SeriesContext.Provider>
  )
}

export default App



