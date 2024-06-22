import React,{useEffect,useState} from 'react'
import axios from 'axios'
import './App.css'
import { Button, Container } from 'reactstrap'
const KEY="e7ffdc867befa96e0fa891ec27c43d35"
   

    function Weather() {
     
      const [city,setCity]=useState("")
      const [data,setData]=useState("")
        const fetchData = async () => {
            try {
                const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`);
                setData(res.data)
                console.log(res.data)
            } 

            catch (err) {
                alert("please enter city name")
            }
        };
    
       
    return(
        <div>
              <Container>
    <h1>weather app</h1>
    <div className='weat'>
        <input type='text' className='input' value={city} onChange={(e)=>setCity(e.target.value)}/>
        <Button color='success' onClick={fetchData}>fetch</Button>
    </div><br/>
    {data && (
           <div className='weath1'>
           <h1>{data.name}</h1>
           {Math.round(data.main.temp)}'C<br/>
            Lat  = {data.coord.lat}<br/>
            Lon  = {data.coord.lon}<br/>
            WinD  = {data.wind.speed}
            </div> 
    )}<br/><br/>
     </Container>
        </div>
       
    );
}
export default Weather