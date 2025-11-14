import React,{ useState } from 'react'

function Home() {

    const [name, setName] = useState("Arianit")
    const [age, setAge] = useState(20)
    const [arr, setArr] = useState([1,2,3,4,5])
    const [obj, setObj] = useState({name:"Arianit", age:20, city:"Prizren"})

    const [allName, setAllName] = useState([
            {id: 1, name:"Arianit", age:20, city:"Prizren"},
            {id: 2, name:"Dren", age:22, city:"Mushtisht"},
            {id: 3, name:"Erblin", age:21, city:"Suhareke"},
            {id: 4, name:"Blend", age:23, city:"Suhareke"},
            {id: 5, name:"Leart", age:24, city:"Suhareke"},
        ])

  return (
    <>
        <h1>Home Page</h1>  
        <h2>{name}</h2>
        <button onClick={() => setName("Dren")}>Change Name</button>
        <button onClick={() => setName("Arianit")}>Change Name 2</button>
        <h2>{age}</h2>
        <button onClick={() => setAge(age + 1)}>Increase Age</button>
        <button onClick={() => setAge(age - 1)}>Decrease Age</button>
        <h2>{arr}</h2>

        {/* <p>{allName}</p> */}
        
            <table border={1}>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>City</th>
                </tr>
                {allName.map(user => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.city}</td>
                    </tr>
                ))}
            </table>
    </>
  )
}

export default Home