import React, {useState, useEffect} from "react";
import { useSearchParams, useNavigate, useParams } from "react-router-dom";
import { Detail, Header } from "../components";

function Product(){
    const navigate = useNavigate();
    const {id} = useParams();
    const [item, setItem] = useState({});
    const [search, setSearch] = useState('');
    useEffect(() => {
        fetch(`http://localhost:4000/api/items/${id}`)
        .then(response => response.json())
        .then(response => {
            setItem(response.item);
        })
          .catch(error => {
            console.error(error);
        });
    }, [id]);

    const submitForm = (e) => {
        e.preventDefault();
        navigate({    
            pathname: '/items',
            search: `?search=${search}` 
        });
    }
    return ( 
        <>
            <Header submitForm={submitForm} search={search} setSearch={setSearch} />
            <Detail {...item} />
        </>
    )
}

export default Product;