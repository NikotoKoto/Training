import { useEffect, useState } from "react";

export function useFetchData(url) {
const [data, setData] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState(null);
 
useEffect(() => {
  const fetchData = async () => {
    try{
      const responses = await fetch(url)
      if(responses.ok) {
        const fetchData = await responses.json()
        setData(Array.isArray(fetchData) ? fetchData : [fetchData]);
      }else {
      setError("error");
      }
    }catch (e) {
      setError("Error");
    } finally{
      setIsLoading(false);
    }
    
    
  }
  fetchData();
  
}, [])


return {
    data,
    error,
    isLoading
}
}