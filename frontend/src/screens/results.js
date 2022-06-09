import React, {useEffect, useState} from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { ItemResult, Header, Categories } from "../components";

function Results({results}){
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const params = Object.fromEntries([...searchParams]);
    const [search, setSearch] = useState(params.search);
    const [items, setItems] = useState([]);
    const [categories, setCategories] = useState([]);

    
    const submitForm = (e) => {
        e.preventDefault();
        navigate({    
            pathname: '/items',
            search: `?search=${search}` 
        });
        getData();
    }
 
    const getData = async () => {
        fetch(`http://localhost:4000/api/items?q=${search}`)
        .then(response => response.json())
        .then(response => {
            setItems(response.items);
            setCategories(response.categories);
        })
          .catch(error => {
            console.error(error);
        });;
    };
    
    useEffect(() => {
        getData();
    }, []);
    
    
    return (
        <>
            <Header submitForm={submitForm} search={search} setSearch={setSearch} />
            <Categories categories={categories} />
            <ItemResult items={items} />
        </>
    )
}

export default Results;