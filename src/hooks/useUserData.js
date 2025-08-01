import React, { useEffect, useState } from "react";
import axios from 'axios'
export function useUserData() {
    const [userDetails, setUserDetails] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('https://jsonplaceholder.typicode.com/users');
            const timer = setTimeout(() => {
                    setUserDetails(res.data);
                    setIsLoading(false);
                }, 2000);
                    return () => clearTimeout(timer);
            } catch (error) {
                setError(error);
      setIsLoading(false);
            }
        }
        fetchData()
    }, [])


    return { userDetails, isLoading, error }
}
export default useUserData;