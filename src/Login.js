import React, { useState } from "react";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import { Container } from "reactstrap";
function Login({user1,setUser1})
{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate =useNavigate();
    const handleSubmit= async(e)=>{

        e.preventDefault();
        try{
           await auth.signInWithEmailAndPassword(email,password)
          console.log(email+" "+password)
         navigate('/home')
         setUser1(email)
        
        }
        catch(error )
        {
            console.log(error)
            alert(error)
        }
       console.log(email);
       console.log(password)
    }
    return(
        <div>
           
            <Container>
            <div className='form-container'>
            
            <form onSubmit={handleSubmit}>
          <label>USERNAME</label><br />
          <input type='text'  value={email} onChange={(e)=>setEmail(e.target.value)} required /><br />
         

          <label>PASSWORD</label><br />
          <input type='password'  value={password} onChange={(e)=>setPassword(e.target.value)} required /><br />
          

         <button type='submit'>Login</button>
        </form>   
        </div>
        </Container>
      </div>
       
    );
}
export default Login;