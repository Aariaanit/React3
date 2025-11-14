import React from 'react'

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
    </>
  )
}

export default About