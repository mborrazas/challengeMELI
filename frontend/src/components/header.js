import react, {useState} from 'react';
import { useNavigate } from "react-router";

function Header(){
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
        <header>
            <form onSubmit={submitForm}>
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
                <button type="submit">send</button>
            </form>
        </header>
    )
}

export default Header;