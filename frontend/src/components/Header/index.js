import React from 'react';

function Header({submitForm, search, setSearch}){

    return (
        <header>
            <form onSubmit={submitForm}>
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
                <button type="submit">send</button>
            </form>
        </header>
    )
}

export default Header;