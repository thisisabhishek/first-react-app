import { useState } from 'react';
import NameForm from './NameForm';
import './App.css'

const App = () => {

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

export default App