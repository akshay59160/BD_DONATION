// import React from 'react'
// import Selector from "../Selector";

// const BloodRegistration = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default BloodRegistration

import React, { useContext, useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { Country, State, City } from "country-state-city";
import Selector from "../Selector";

import "./Bloodregistration.css";
// import axios from "axios";
// import { Context, server } from "../main";
// import toast from "react-hot-toast";

const BloodRegistration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileN, setMobileN] = useState("");

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
  }, [stateData]);

  useEffect(() => {
    cityData && setCity(cityData[0]);
  }, [cityData]);

  const submitHandler = async (e) => {
    e.preventDefault();
    // try {
    //   const { data } = await axios.post(
    //     `${server}/user/register`,
    //     {
    //       name,
    //       email,
    //       password,
    //     },
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       withCredentials: true,
    //     }
    //   );

    //   toast.success(data.message);
    //   setIsAuthenticated(true);
    //   setLoading(false);
    // } catch (error) {
    //   toast.error(error.response.data.message);
    //   setIsAuthenticated(false);
    //   setLoading(false);
    // }
  };

  //   if (isAuthenticated) return <Navigate to={"/"} />;

  return <></>;
};

export default BloodRegistration;
