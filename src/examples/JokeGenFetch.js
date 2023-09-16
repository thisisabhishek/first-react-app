// Joke generator using fetch
import { useEffect, useState } from 'react';
import './App.css'

const JokeGenFetch = () => {

  const [joke, setJoke] = useState("")

  useEffect(function() {
    // the API
    let jokePromise = fetch("https://official-joke-api.appspot.com/random_joke");

    jokePromise.then(function(res){
      return res.json()
    })
    .then((data) => {
      // we have the data here
        //console.log(data)
        setJoke(data.setup+"\n"+data.punchline)
    })
  
  }, [])

  return (
    <>
      <h1>Joke Generator</h1>
      <div>{joke}</div>
    </>
  );
}

export default JokeGenFetch

/**
 * You can also create functional components here as well.
 */