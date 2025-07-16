import React, {useState} from 'react';
import './App.css'
import './index.css';
import Footer from './Footer.jsx';
import "./Footer.css";

function App() {
  const [firstNameBox, setFirstNameBox] = useState("");
  const [lastNameBox, setLastNameBox] = useState("");
  const [emailBox, setEmailBox] = useState("");
  const [phoneNumberBox, setphoneNumberBox] = useState("");
  const [addressBox, setAddressBox] = useState("");
  const [cityBox, setCityBox] = useState("");
  const [stateBox, setStateBox] = useState("");
  const [zipCodeBox, setzipCodeBox] = useState("");
  const [countryBox, setCountryBox] = useState("");

  const handleSubmit = (event) => {

    if(!firstNameBox) {
      alert("Please enter your First Name!!!");
      return;
    } 

    event.preventDefault();
    console.log("First Name: " + firstNameBox);
    console.log("Last Name: " + lastNameBox);
    console.log("Email: " + emailBox);
    console.log("Phone number: " + phoneNumberBox);
    console.log("Address: " + addressBox);
    console.log("City: " + cityBox);
    console.log("State: " + stateBox);
    console.log("Zip Code: " + zipCodeBox);
    console.log("Country: " + countryBox);
  };

  const handleReset = () => {
    setFirstNameBox("");
    setLastNameBox("");
    setEmailBox("");
    setphoneNumberBox("");
    setAddressBox("");
    setCityBox("");
    setStateBox("");
    setzipCodeBox("");
    setCountryBox("");
  };

  return (
    <>
    <h1 id="title">Forms Application</h1>
    <form onSubmit={handleSubmit} onReset={handleReset}>
    <p id="firstName">First Name: </p>
    <input type="text" id="firstNameBox" value={firstNameBox} onChange={(e) => setFirstNameBox(e.target.value)} />
    <p id="lastName">Last Name: </p>
    <input type="text" id="lastNameBox" value={lastNameBox} onChange={(e) => setLastNameBox(e.target.value)} />
    <p id="email">Email: </p>
    <input type="text" id="emailBox" value={emailBox} onChange={(e) => setEmailBox(e.target.value)} />
    <p id="phoneNumber">Phone Number: </p>
    <input type="text" id="phoneNumberBox" value={phoneNumberBox} onChange={(e) => setphoneNumberBox(e.target.value)} />
    <p id="address">Address: </p>
    <input type="text" id="addressBox" value={addressBox} onChange={(e) => setAddressBox(e.target.value)} />
    <p id="city">City: </p>
    <input type="text" id="cityBox" value={cityBox} onChange={(e) => setCityBox(e.target.value)} />
    <p id="state">State: </p>
    <input type="text" id="stateBox" value={stateBox} onChange={(e) => setStateBox(e.target.value)} />
    <p id="zipCode">Zip Code: </p>
    <input type="text" id="zipCodeBox" value={zipCodeBox} onChange={(e) => setzipCodeBox(e.target.value)} />
    <p id="country">Country: </p>
    <input type="text" id="countryBox" value={countryBox} onChange={(e) => setCountryBox(e.target.value)} />
    <br></br>
    <br></br>
    <button type="submit" id="submitBtn" onSubmit={handleSubmit}>Submit</button>
    <button type="reset" id="resetBtn" onReset={handleReset}>Reset</button>
    </form>
    </>
  );
}

export default App;
