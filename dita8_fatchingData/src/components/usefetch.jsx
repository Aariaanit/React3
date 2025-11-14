import React, {useState, useEffect} from 'react'

function usefetch(url) {
     
    const [allName, setAllName] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setTimeout(() => {
        fetch(url)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            setAllName(data)
            setLoading(false)
        })
        .catch((err) => {
            setError(err.message)
            setLoading(false)
        })
        }, 1000);
    }, [])
    
  return {
    allName,
    loading,
    error
  }
}
export default usefetch