import { useContext } from "react"

import MovieContext from "../context/MovieContext";
import SeriesContext from "../context/SeriesContext";
import FunctionContext from "../context/FunctionContext";

export default function Homepage() {

    const { movies } = useContext(MovieContext);
    const { series } = useContext(SeriesContext);
    const { getFlag, renderStars } = useContext(FunctionContext);

    return (
        <main>

            <div className="container d-flex">

                <div className="card">
                    <h2>MOVIES</h2>

                    <ul className="list-unstyled">
                        {
                            movies.map(movie => (
                                <li key={movie.id}>
                                    <div className="card">
                                        <h2>{movie.title}</h2>
                                        {
                                            movie.poster_path &&
                                            <img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt={movie.original_title} />
                                        }
                                    </div>
                                    <div className="card-body">
                                        <p>{movie.original_title}</p>
                                        <p>{getFlag(movie.original_language)}</p>
                                        <p>{renderStars(movie.vote_average)}</p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className="card">
                    <h2>TV SERIES</h2>

                    <ul className="list-unstyled">
                        {
                            series.map(serie => {

                                return <li key={serie.id}>
                                    <div className="card">
                                        <h2>{serie.name}</h2>
                                        {
                                            serie.poster_path &&
                                            <img src={`https://image.tmdb.org/t/p/w342/${serie.poster_path}`} alt="" />
                                        }
                                    </div>
                                    <div className="card-body">
                                        <p>{serie.original_name}</p>
                                        <p>{getFlag(serie.original_language)}</p>
                                        <p>{renderStars(serie.vote_average)}</p>
                                    </div>
                                </li>
                            })
                        }
                    </ul>
                </div>

            </div>


        </main>
    )
}