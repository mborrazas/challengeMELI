import React from 'react';
import SearchBox from "../Search";
import "./header.scss";



function Header({submitForm, search, setSearch}){

    
    return (
        <header>
            <img
            alt="Mercado Libre"
            className="logo"
            src="https://http2.mlstatic.com/ui/navigation/5.3.7/mercadolibre/logo__small.png"
            />
            <SearchBox submitForm={submitForm} search={search} setSearch={setSearch} />
        </header>
    )
}

export default Header;