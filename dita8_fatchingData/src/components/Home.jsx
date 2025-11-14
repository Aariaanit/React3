import React,{ useEffect, useState } from 'react'
import BlogList from './BlogList'
import usefetch from './usefetch'

function Home() {

    const {
        allName,
        loading,
        error
    } = usefetch('http://localhost:3000/list')

   

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