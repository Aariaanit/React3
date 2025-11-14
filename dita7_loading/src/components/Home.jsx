import React,{ useEffect, useState } from 'react'
import BlogList from './BlogList'

function Home() {

    const [allName, setAllName] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3000/list')

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
    }, [])

        const deleteButton = (id) => {
            const newList = allName.filter((allName) => allName.id != id);

            setAllName(newList)
        }

        const viewButton = (id) => {
            const newList = allName.filter((allName) => allName.id == id);

            setAllName(newList)
        }

  return (
    <>
        <h1>Home Page</h1>  

        {/* <p>{allName}</p> */}
        
        { allName && <BlogList allName={allName} title="Lista e nxenesve" deleteButton={deleteButton}  viewButton={viewButton}/>   }

        { error && <div>{ error }</div> }
        { loading && <div>Loading...</div> }

    </>
  )
}

export default Home