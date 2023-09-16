import './App.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import Todo from './examples/Todo'
import ProductCard from './examples/ProductCard'

const App = () => {

  return (
    <>
      <BrowserRouter>

        <div>
          <Link to={"/"}>Home</Link> &nbsp;
          <Link to={"/todo"}>Open Todo App</Link> &nbsp;
          <Link to={"/products"}>Product Page</Link>
        </div>
        
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/todo' element={<Todo />}></Route>
          <Route path='/products' element={<ProductCard n="iPhone 15" price="$1000" inStock={false}/>}></Route>
          <Route path="*" element={<h1>404 Error Page</h1>}></Route>
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App

/**
 * You can also create functional components here as well.
 */