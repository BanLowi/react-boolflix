import { useContext } from "react";

import SearchContext from "../context/SearchContext";

export default function Header() {

    const { searchInput, setSearchInput, fetchData } = useContext(SearchContext);

    return (
        <header>
            <div className="d-flex justify-content-between align-items-center bg-dark text-white">
                <h1>BoolFlix</h1>

                <form onSubmit={fetchData}>
                    <div className="input-group">
                        <input type="text" name="searchbar" id="searchBar" placeholder="Search" value={searchInput} onChange={e => setSearchInput(e.target.value)} className="form-control bg-transparent" />
                        <button type="submit" className="btn btn-sm btn-outline-light">Search</button>
                    </div>
                </form>
            </div>
        </header>
    )
}