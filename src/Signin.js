import React, { useState } from "react";
import { auth, provider, fbProvider, githubProvider } from "./firebase";
import { useNavigate } from "react-router-dom";
import "./App.css";
import { Container } from "reactstrap";

const Signin = () => {

  const [user, setUser] = useState(null);
  const [pass,setPass]=useState('')
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('')
  const navigate =useNavigate();
  const handleLogout=async()=>{
        
    try{
       await auth.signOut()
     setUser("guest")
   
    const details="user is logged out"
    setPass(details)
   
    }
    catch(error )
    {
        console.log(error)
        alert(error)    
    }
}
  const userLogin = async (e) => {
    e.preventDefault()
    try {
      await auth.createUserWithEmailAndPassword(email,password);
      console.log(email+" "+password)
      navigate('/login')
    } catch (err) {
      console.log(err);
    }
  };
  const googleLogin = async () => {
    try {
      await auth.signInWithPopup(provider);
      setUser(await auth.currentUser);
    
    } catch (err) {
      console.log(err);
    }
  };
  const facebookLogin = async () => {
    try {
      await auth.signInWithPopup(fbProvider);
      setUser(await auth.currentUser);
    } catch (err) {
      console.log(err);
    }
  };

  const githubLogin = async () => {
    try {
      await auth.signInWithPopup(githubProvider);
      setUser(await auth.currentUser);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(user);
  return (
    <section>
      
      <div>
     
      <form onSubmit={userLogin}>
          <label>USERNAME</label><br />
          <input type='text'  value={email} onChange={(e)=>setEmail(e.target.value)} required /><br />
         

          <label>PASSWORD</label><br />
          <input type='password'  value={password} onChange={(e)=>setPassword(e.target.value)}  required/><br />
          

         <button type='submit'>Login</button>
        </form>   
        <div className="buttonContainer" onClick={googleLogin}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
            alt=""/>
          <button>Google Login</button>
        </div>
        <div className="buttonContainer" onClick={facebookLogin}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
            alt=""
          />
          <button>Facebook Login</button>
        </div>
        <div className="buttonContainer" onClick={githubLogin}>
          <img src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"
            alt=""
          />
          <button>Github Login</button>
        
        </div>
        <button onClick={handleLogout}>Logout</button>
       
      </div>
    <h1>{user?.email}</h1>
     <h1>{pass}</h1>
    
    </section>
  );
};

export default Signin;