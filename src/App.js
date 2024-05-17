import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Layout from './Pages/Layout';
import Footer from './Pages/Footer'
function App() {
  return (
    <div className="App"> 
     
     <BrowserRouter>
     <Layout/>
     <Routes>
     <Route path='/home' element={<Home/>}/>
     <Route path='/cart' element={<Cart/>}/>
     </Routes>
      
    
     </BrowserRouter>
     <Footer/>
    </div>
  );
}

export default App;
