import React, {useEffect, useState} from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import ApiSource from "../api/ApiSource";
import { ItemResult, Header, Categories } from "../components";

function Results({results}){
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const params = Object.fromEntries([...searchParams]);
    const [search, setSearch] = useState(params.search);
    const [data, setData] = useState([]);
    
    const submitForm = (e) => {
        e.preventDefault();
        navigate({    
            pathname: '/items',
            search: `?search=${search}` 
        });
        onSearch();
    }
    const onSearch = async () => {
        const results = await ApiSource.get('/api/items', {
           params: {q: search} 
        });
        setData(results);
    }

    useEffect(() => {
        onSearch();
    }, []);

    return (
        <div className="results">
            <Header submitForm={submitForm} search={search} setSearch={setSearch} />
            <Categories />
            <div className="items">            
                {
                    data.map((item) =>  (
                        <ItemResult item={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default Results;