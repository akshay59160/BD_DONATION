import React from "react";
import "./BloodResult.css";
import axios from "axios";
import { useState, useEffect } from "react";

const BloodResult = () => {
  const [exchanges, setExchanges] = useState([]);
  // const [loading,setLoading]=useState(true);
  // const [error,setError]=useState(false);
  useEffect(() => {
    const apiAll = "http://localhost:4000/user/all";
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(apiAll);

        setExchanges(data.user);
        console.log("anand");
        console.log();
        //  setLoading(false);
      } catch (error) {
        // setError(true);
        //  setLoading(false);
        console.log(error);
        console.log("error");
      }

      console.log(exchanges);
      console.log("vipin1");
    };
    fetchExchanges();

    console.log(exchanges);
    console.log("vipin2");
  }, []);

  return (
    <div className="instructiontable">
      <table id="customers">
        <tr>
          <th>S.No</th>
          <th>Name</th>
          <th>Blood Type</th>
          <th>Contact Number</th>
          <th>Location</th>
        </tr>

        {exchanges.map((i) => (
          <tr>
            <td>1</td>
            <td>{i.name}</td>
            <td>{i.bloodGrp}</td>
            <td>{i.mobileN}</td>
            <td>{i.ct}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default BloodResult;
