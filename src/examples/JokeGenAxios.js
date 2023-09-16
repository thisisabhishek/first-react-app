import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';

const JokeGenAxios = () => {

  const [joke, setJoke] = useState("")

  useEffect(function() {
    // the API
    let jokePromise = axios.get("https://official-joke-api.appspot.com/random_joke")

    jokePromise.then((res) => {
      // we have the data here
      setJoke(res.data.setup+"\n"+res.data.punchline)
    })
  
  }, [])

  return (
    <>
      <h1>Joke Generator</h1>
      <div>{joke}</div>
    </>
  );
}

export default JokeGenAxios

/**
 * You can also create functional components here as well.
 */