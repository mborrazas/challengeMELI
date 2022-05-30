import React,{useState} from "react";
import { useNavigate } from "react-router";
import { Header } from "../components";

function Search(){
    const navigate = useNavigate();
    const [search, setSearch] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        navigate({    
            pathname: '/items',
            search: `?search=${search}` 
        });
    }

    return (
        <div className="search">
            <Header submitForm={submitForm} search={search} setSearch={setSearch} />
        </div>
    )
}

export default Search;