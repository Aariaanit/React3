import React,{ useState } from 'react'
import BlogList from './BlogList'

function Home() {

    const [allName, setAllName] = useState([
            {id: 1, name:"Arianit", age:20, city:"Prizren"},
            {id: 2, name:"Dren", age:22, city:"Mushtisht"},
            {id: 3, name:"Erblin", age:21, city:"Suhareke"},
            {id: 4, name:"Blend", age:23, city:"Suhareke"},
            {id: 5, name:"Leart", age:24, city:"Suhareke"},
        ])

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