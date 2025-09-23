import React,{useState} from 'react'
import Button from './Button'

 function Home() {
    const x = 5; 
    const name = "Arianit";
    const arr = [1, 2, 3, 4, 5];
    const obj = {
        name: "Arianit", 
        age: 31, 
        city: "Prizren"
    };

    const [vlera, setVlera] = useState(0);
        
  return (
    <>
        <div>
            <h1>Home Page</h1>
            <p>Welcome to the Home Page!</p>
            <Button />

            <p>{x}</p>
            <p>{name}</p>
            <p>{arr}</p>
            <p>{obj.name} - {obj.age} - {obj.city}</p>

            {/* State Example */}
            <p>Vlera: {vlera}</p>
            <button onClick={() => setVlera(vlera + 1)}>Shto 1</button>
            <button onClick={() => setVlera(vlera - 1)}>Zbrit 1</button>
        </div>
    </>
  )
}
export default Home
