import { useState, useEffect } from 'react';
import './App.css'

const ComponentLifecycle = () => {

  const [toggleForm, setToggleForm] = useState(false)

  function showHideForm() {
    setToggleForm(!toggleForm)
  }

  return (
    <>
      <h1>Component Lifecycle</h1>
      <p>Welcome to Studytonight</p>
      <p><button onClick={showHideForm}>Enter Name</button></p>
      {toggleForm && <NameForm />}
    </>
  );
}

export default ComponentLifecycle


function NameForm() {

  const [name, setName] = useState("_______")
  const [updated, setUpdated] = useState(false)
  
  useEffect(lifeCycle, [name])

  function lifeCycle () {

      console.log("Component is created") 

      return (function() {
          console.log("Component is destroyed")
      })
  }

  function updateName(event) {
      setName(event.target.value);
  }

  function markUpdated() {
      setUpdated(!updated)
  }
  
  return (
      <>
          <input placeholder="Enter your name..." onBlur={updateName}/>
          <button onClick={markUpdated}>Mark Updated</button>
          <p>Welcome {name}</p>
          <p>Updated Flag: {updated? "Yes":"No"}</p>
      </>
  )
}