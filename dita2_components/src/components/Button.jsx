import React,{ useState } from 'react'

function Button() {
    const [name, setName] = useState("Arianit");
  return (
    <>
        <div>
            <button onClick={() => setName("Erblin")} >Click </button>
            <button onClick={() => setName("Arianit")} >Click 2</button>
            <p>{name}</p>
        </div>
    </>
  )
}

export default Button