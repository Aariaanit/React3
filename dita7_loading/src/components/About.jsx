import React from 'react'
import BlogList from './BlogList.jsx'

function About() {

  const fun = () => {
    console.log("Hello")
  }

  const fun2 = (a) => {
    console.log("Hello" + a)
  }

  return (
    <>
        <h1>About Page</h1>
        <button onClick={fun}>Click Me</button>
        <button onClick={() => fun2(" Arianit")}>Click Me 2</button>

        <BlogList allName={allName} title="Lista e nxenesve" deleteButton={deleteButton}  viewButton={viewButton}/>
    </>
  )
}

export default About