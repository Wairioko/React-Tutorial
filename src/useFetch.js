import { useState, useEffect } from "react"

// illustration of custom hooks
const useFetch = (url) => {
    // init to null before loading data from json server
    const [data, setData] = useState(null)
    const [isPending, setPending] = useState(true)
    // error handling in react using state properties
    const [fetchingError, setFetchingError] = useState(null)

    useEffect(
        () => {
            const abortCont = new AbortController();
            setTimeout(
            fetch(url, {signal: abortCont.signal})
            .then((response) => {
                console.log(response)
                return response.json();
            })
            .then(data => {
                setData(data);
                setPending(false);
                
            })
            .catch((error) => {
                if(error.name === 'AbortError'){
                    console.log("Fetch Aborted")
                }else{
                    alert("Error fetching blogs" ,error.message);
                    setFetchingError(error.message);
                    console.log(fetchingError);
                }
            })
            
    ); return () => abortCont.abort()
    , 1000}, [url]

    );


    return {data, isPending, error}

}



export default useFetch;

