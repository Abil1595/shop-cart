import React,{useState} from 'react'
import products from '../ProductData/ProductDetails';
import {  Col, Container, Row } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import { auth } from '../firebase';
function Home({user1,setUser1}) {
  const [pass,setPass]=useState('')
  const [user,setUser]=useState(null)
  const handleLogout=async()=>{
        
    try{
       await auth.signOut()
     setUser1("guest")
   
    const details="user is logged out"
    setPass(details)
   
    }
    catch(error )
    {
        console.log(error)
        alert(error)
    }
}
   
    const [hide,setHide]=useState(true)
    const [addDetail,setAddDetail]=useState({
        id:'',
        image:'',
        name:'',
        price:'',
        category:'',
        description:'',
    })
    const [searchterm,setSearchterm]=useState("")
    const [searchresults,setSearchresults]=useState([])
    const dispatch=useDispatch()
    const handleAddToCart = () => {
        dispatch(addToCart());
      };
    const handleSearchChange=(e)=>{
      setSearchterm(e.target.value)
    }
    const handleSearch = () => {
        const results = products.filter(product =>
            product.name.toLowerCase().includes(searchterm.toLowerCase()),
            
        );
     
        setSearchresults(results);
        setAddDetail(results)
        setHide(false)
    };
const viewpage=products.filter(product=>product.category === "view");
console.log("check",viewpage)
  
  return (
    <div className="App">
        <Container fluid>
     <h1>Hello {user1}</h1>
     <h1>{user?.email}</h1>
     
     <button onClick={handleLogout}>Logout</button>
      <div className='search-input' >
        <select onChange={handleSearchChange} value={searchterm} className='select-input'>
          <option>Mens Shirt</option>
          <option>Mens Pants</option>
          <option>Mens Denim Shirt</option>  
          <option>Mens Jacket</option>
          <option>Mens Blazer</option>   
        </select> 
       
         <button onClick={handleSearch}className='sign-button' >Select</button>
        </div>
    
     <div className='product-list'>
       {searchresults.map(product=>(
        <div className='prod-details' key={product.id}>
         <div className='prod-image'>
           <img src={product.image} alt='' className='pro'/>
         </div>
         <div className='prod-des'>
         <p>{product.name}</p>
         <p>{product.price}</p>
         <p>{product.description}</p>
         <button className='shirt-button' onClick={()=>{dispatch(addToCart(product))}}>Add to Bag</button>
         </div>
        </div>
       ))}
     </div><br/><br/>
     {
        hide === true?(
     
     <Row>
        {
          viewpage.map((view) =>(
               
           
        <Col sm="3" key={view.id} className='men-columns'>
            <div className='shirt'>
             <img src={view.image} alt=''/>
           <h5>{view.name} </h5>  
          <br/>    
          {view.price}<br/>   
          Price inclusive of all taxes<br/>
          
          
            </div>
            
            </Col>
            
            
          )
            )
        }
        
         </Row>
         ):null
        }
         </Container>
    </div>
  );
}

export default Home;
