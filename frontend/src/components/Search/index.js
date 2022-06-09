import React from 'react';
import "./search.scss";

function Search({submitForm, search, setSearch}){
    return (
        <form className="searchForm" onSubmit={submitForm}>
            <input type="text"  className="searchInput" value={search} onChange={(e) => setSearch(e.target.value)} />
            <button type="submit" className="searchBtn" tabIndex="3" />
        </form>
    )
}

export default Search;