import React,{ useEffect, useState } from 'react'
import BlogList from './BlogList'

function Home() {

    const [allName, setAllName] = useState([])


    useEffect(() => {
        fetch('http://localhost:3000/list')

        .then((res) => {
            return res.json()
        })
        .then((data) => {
            setAllName(data)
        })
        .catch((err) => {
            console.log(err.message)
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
        
         <BlogList allName={allName} title="Lista e nxenesve" deleteButton={deleteButton}  viewButton={viewButton}/>   
    </>
  ) 
}

export default Home