import React from 'react'
import "./Loader.css";

const Loader = () => {
  return (
    <>
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
    <th>Your Blood Type</th>
    <th>Blood type you can recieve</th>
    <th>Blood types you can donate to</th>
  </tr>
  <tr>
    <td>A+</td>
    <td>A+ , A- , O+ , O-</td>
    <td>A+ , AB+</td>
  </tr>
  <tr>
    <td>B+</td>
    <td>O+ , O-</td>
    <td>O+ , A+ , B+ , AB+</td>
  </tr>
  <tr>
    <td>O+</td>
    <td>B+ , B- , O+ , O-</td>
    <td>B+ , AB+</td>
  </tr>
  <tr>
    <td>AB+</td>
    <td>EVERYONE</td>
    <td>AB+</td>
  </tr>
  <tr>
    <td>A-</td>
    <td>A- , O-</td>
    <td>A+ , A- , AB+ , AB-</td>
  </tr>
  <tr>
    <td>B-</td>
    <td>B- , O-</td>
    <td>B+ , B- , AB+ , AB-</td>
  </tr>
  <tr>
    <td>O-</td>
    <td>O-</td>
    <td>EVERYONE</td>
  </tr>
  <tr>
    <td>AB-</td>
    <td>AB- , A- , B- , O-</td>
    <td>AB+ , AB-</td>
  </tr>
 
</table>

       </div>

       </div>
    </>
  )
}

export default Loader;
