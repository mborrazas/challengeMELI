import React from 'react';
import "./search.scss";

function Search({submitForm, search, setSearch}){
    return (
        <form className="searchForm" onSubmit={submitForm}>
            <input
                type="text"  
                className="searchInput" 
                value={search} onChange={(e) => setSearch(e.target.value)}
                aria-label="Ingresá lo que quieras encontrar"
                placeholder="Nunca dejes de buscar"
                maxLength="120" 
            />
            <button type="submit" className="searchBtn" tabIndex="3" />
        </form>
    )
}

export default Search;