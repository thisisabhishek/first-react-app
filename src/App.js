import './App.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './contextAPI/pages/Home'
import Profile from './contextAPI/pages/Profile'
import { useState, createContext } from 'react'

export const AppContext = createContext();

const App = () => {

  // this acts as a routing component
  const [username, setUsername] = useState("abhishek")

  return (
    <>
      <AppContext.Provider value={{username, setUsername}}>
        <BrowserRouter>
          <div>
            <Link to={"/"}>Home</Link> &nbsp;
            <Link to={"/profile"}>Profile</Link>
          </div>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
            <Route path="*" element={<h1>404 Error Page</h1>}></Route>
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </>
  );
}

export default App

/**
 * You can also create functional components here as well.
 */