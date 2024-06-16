import React, { useContext, useState, useEffect } from "react";
 import {  Navigate } from "react-router-dom";
import { Country, State, City } from 'country-state-city';
import Selector from "../Selector"
import axios from 'axios'

import "./Registration.css";
// import axios from "axios";
// import { Context, server } from "../main";
// import toast from "react-hot-toast";


const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileN, setMobileN] = useState("");
  const [bloodGrp, setBloodGrp] = useState("");
  const [user,setUser]=useState(false);


  let countryData = Country.getAllCountries();
  const [stateData, setStateData] = useState();
  const [cityData, setCityData] = useState();

  const [country, setCountry] = useState(countryData[0]);
  const [state, setState] = useState();
  const [city, setCity] = useState();

  useEffect(() => {
    setStateData(State.getStatesOfCountry(country?.isoCode));

  }, [country]);

  useEffect(() => {
    setCityData(City.getCitiesOfState(country?.isoCode, state?.isoCode));

  }, [state]);

  useEffect(() => {
    stateData && setState(stateData[0]);
  }, [stateData])

  useEffect(() => {
    cityData && setCity(cityData[0]);
  }, [cityData])
//`${server}/user/register`
  const apiUrl = 'http://localhost:4000/user/register'
  const submitHandler = async (e) => {

    e.preventDefault();

    try {
      const response = await axios.post(
       apiUrl ,
        {
          name,
        bloodGrp,
        email,
        password,
        mobileN,
        country,
        state,
        city, 
        
        
        
        },
        // {
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   withCredentials: true,
        // }
      );

      // toast.success(data.message);
      // setIsAuthenticated(true);
      // setLoading(false);
      console.log('Response:', response.data);
      console.log("alok");
      console.log(country.name);
      setUser(true);
    } 
    catch (error) {
      // toast.error(error.response.data.message);
      // setIsAuthenticated(false);
      // setLoading(false);
      console.error('Error:', error);
      console.log("akshay");
      console.log(country);
    }
  };

    if (user) return <Navigate to={"/"} />;

  return (
    <div className="login">

      <section className="form">
        <h1>REGISTRATION FORM</h1>
        <form onSubmit={submitHandler}>
          <div className="form1">

            <div className="col">
              <label>
                Name:
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Name"
                required
              />
            </div>
            <div className="col">
              <label>
                Blood Group :
              </label>

              <select  value={bloodGrp}
                onChange={(e) => setBloodGrp(e.target.value)}>
                <option value="O+">O+</option>
                <option value="BCA">BCA</option>
                <option value="BBA">BBA</option>
                <option value="B.Tech">B.Tech</option>
                <option value="MBA">MBA</option>
                <option value="MCA">MCA</option>
                <option value="M.Tech">M.Tech</option>
              </select>
            </div>
            <div className="xyz">
              <div>
                <label className="top">
                  Country :
                </label>
              </div>
              <div className="xyz1">
                <Selector className="abc" data={countryData} selected={country} setSelected={setCountry} />
              </div>
            </div>
            <div className="xyz">
              <div>
                <label className="top">
                  State :
                </label>
              </div>
              <div className="xyz1">
                {state && (
                  <div >
                    {/* <p>state</p> */}
                    <Selector data={stateData} selected={state} setSelected={setState} />

                  </div>
                )
                }
              </div>
            </div>
            <div className="xyz">
              <div>
                <label className="top">
                  City :
                </label>
              </div>
              <div className="xyz1">
                {city && (
                  <div >
                    {/* <p>city</p>  */}
                    <Selector data={cityData} selected={city} setSelected={setCity} />

                  </div>
                )
                }
              </div>
            </div>
            <div className="col">
              <label >
                Mobile Number :
              </label>
              <input
                value={mobileN}
                onChange={(e) => setMobileN(e.target.value)}
                type="tel"

                placeholder="Phone No."
                required
              />
            </div>

            <div className="col">
              <label>
                Email :
              </label>
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="col">
              <label>
                password :
              </label>

              <input
                type="password"
                required
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

            </div>
            <div className="check">
              <input type="checkbox" />
              <label className="last" > I authorize this website to display my name and telephone number, so that the needy could contact me, as and when there is an emergency.</label>
            </div>
            <div>
              {/* <input type="submit" value="Apply" /> */}
              <button type="submit">apply</button>
            </div>


          </div>
        </form>
      </section>
    </div>
  );
};

export default Register;