import React from 'react';
import { Country, State, City }  from 'country-state-city';
import { useState ,useEffect} from "react";
import Selector from '../Selector';
import './campResult.css';
import { Navigate } from 'react-router-dom';
import Loader from "../Loader/Loader";
import axios from 'axios'

const CampResult = () => {
  let countryData=Country.getAllCountries();
  const [stateData,setStateData]=useState();
  const [cityData,setCityData]=useState();
 

    const [country,setCountry]=useState(countryData[0]);
    const [state,setState]=useState();
    const [city,setCity]=useState();
    
    const [bloodGrp, setBloodGrp] = useState("");
    const [loader,setLoader]=useState(true);
    const [exchanges,setExchanges]=useState([]);

    useEffect(()=>{
      setStateData(State.getStatesOfCountry(country?.isoCode));
      
    },[country]);
    
    useEffect(()=>{
      setCityData(City.getCitiesOfState(country?.isoCode, state?.isoCode));
      
    },[state]);

    useEffect(()=>{
      stateData && setState(stateData[0]);
    },[stateData])

    useEffect(()=>{
      cityData && setCity(cityData[0]);
    },[cityData])

    const apiFind = 'http://localhost:4000/camp/find'
   
    const submitHandler =async (e)=>{
      e.preventDefault();
         console.log("vishal")
           console.log(country.name);
    console.log(state.name);
    console.log(city.name);
      
      try{
        const queryParam={
          // con:"India",
          // st:"Jharkhand",
          // ct:"Dhanbad",
          // bloodGrp:"MBA",
          con:country.name,
          st:state.name,
          ct:city.name,
          
        };
      
       const {data} =await axios.get(apiFind,{params:queryParam});

         
          console.log("success");
          console.log(data.myData);
          // const result=data.myData;
          // exchanges(result);
          setExchanges(data.myData);
          
       
       setLoader(false);
      }
      
        
       
      // setExchanges(response.user);
      // console.log(result.user);
      // console.log(result.data.myData);
      
      

   
      catch (error){
        setLoader(false);
        console.log('Error',error);
        console.log("error11");
      };
     
    }
    
    
    // const [staties,setStaties]=useState([]);
    // const [cities,setCities]=useState([]);
    
    
// useEffect(()=>{
//     const getCountry=()=>{
        
      
//         setCountries(Country.getAllCountries());
//     }
//     getCountry();
// },[]);
    
  return (
       <>
       <form className="search" onSubmit={submitHandler}>
      
        <h1>Search Blood</h1>
      
       
       <div className='dropdown'>
      
         <div className='drop'>
    {/* <p>country</p> */}
    <Selector data={countryData} selected={country} setSelected={setCountry}/>
      
    </div>
    <div className='drop'>
   
   {state && (
      <div >
      {/* <p>state</p> */}
    <Selector data={stateData} selected={state} setSelected={setState} />
      
    </div>
    )
   }
   </div>
   <div className='drop'>
   {city && (
      <div >
    {/* <p>city</p> */}
    <Selector data={cityData} selected={city} setSelected={setCity}/>
      
    </div>
    )
   }
   
   </div>
  

   <div className='button1' >
   <button className='button' type="submit" >search</button>
</div>
  
       </div>
      
       </form>
 
  
    {
      loader?<Loader/>:<>

      <div className='instruction'>
      <div className='instructionStatement'>
       <div className='instructionStatement1'>
       <div>1</div>
       <p>Search donators by giving some Details above</p>

       </div>
       <div className='instructionStatement1'>
       <div >2</div>
       <p>Get their contact details and informations</p>
       </div>
       <div className='instructionStatement1'>
       <div >3</div>
       <p>Choose your donator and contact them</p>
       </div>

       </div>

      <div className='instructiontable'>
       <table id="customers">
  <tr>
    <th>organisation Name</th>
    <th>Duration</th>
    <th>venue</th>
    <th>detail</th>
    
  </tr>
  
    
  {
        exchanges.map((i)=>(
      <tr>
  
    
    <td>{i.title}</td>
    <td>{i.sdate}</td>
    <td>{i.venue}</td>
    <td>datail</td>
  </tr>
    ))
    }
  
  
  
 
</table>

       </div>
       </div>
    
      </>
    }
 

 
      
    
    </>
  )
 
  
  
}

export default CampResult;
