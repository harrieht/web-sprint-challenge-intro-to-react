import React, { useState, useEffect }from 'react';
import axios from 'axios';
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [characters, setCharacters] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
useEffect(() => {
axios.get('https://swapi.dev/api/people/')
.then(res => {
 setCharacters(res.data)

})
.catch(err => {
  console.error(err)
})
},[])
console.log(characters);
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    {characters.map(character =>{
      return <h2>{character.name}</h2>
    })}
    </div>
  );
}

export default App;
