import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Layout from './Pages/Layout';
import Footer from './Pages/Footer'
import Login from './Login';
import Signin from './Signin';
import Weather from './Weather';
import { Container } from 'reactstrap';
import Todo from './Todo.js'
function App() {
  const [user1,setUser1]=useState('Guest');
  return (
    <div className="App"> 
      <Container>
     <BrowserRouter>
     <Layout/>
     <Routes>
     <Route path='/home' element={<Home user1={user1} setUser1={setUser1}/>}/>
     <Route path='/cart' element={<Cart/>}/>
     <Route path='/login' element={<Login user={user1} setUser1={setUser1}/>}/>       
     <Route path='/signin' element={<Signin/>}/> 
     </Routes>
      
    
     </BrowserRouter>
     <Weather/>
    
     <Footer/>
     </Container>
    </div>
  );
}

export default App;
