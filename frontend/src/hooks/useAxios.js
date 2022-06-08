import {useState, useEffect, useCallback} from 'react';
import axios from 'axios';

export const useAxios = (axiosParams) => {
    const [response, setResponse] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async (params) => {
            try{
                const result = await axios.request(params);
                setResponse(result);
            }catch(err){
                setError(err);
            }finally{
                setLoading(false);
            }
        }

        fetchData(axiosParams);

    }, [axiosParams.url]);

    return {response, error, loading};
}