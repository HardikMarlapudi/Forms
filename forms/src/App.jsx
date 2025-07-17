import React, {useState} from 'react';
import './App.css'
import './index.css';

function App() {
  const [firstNameBox, setFirstNameBox] = useState("");
  const [lastNameBox, setLastNameBox] = useState("");
  const [genderInput, setgenderInput] = useState(["Male", "Female", "Other", "Prefer not to say"]);
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
    } else if(!lastNameBox) {
      alert("Please enter your Last Name!!!");
      return;
    } else if(!emailBox) {
      alert("Please enter your email!!!");
      return;
    } else if(!phoneNumberBox) {
      alert("Please enter your phone number!!!");
      return;
    } else if(!addressBox) {
      alert("Please enter your address!!!");
      return;
    } else if(!cityBox) {
      alert("Please enter your city!!!");
      return;
    } else if(!stateBox) {
      alert("Please enter your state!!!");
      return;
    } else if(!zipCodeBox) {
      alert("Please enter your zip code!!!");
      return;
    } else if(!countryBox) {
      alert("Please enter your country!!!");
      return;
    }

    event.preventDefault();
    console.log("First Name: " + firstNameBox);
    console.log("Last Name: " + lastNameBox);
    console.log("Email: " + emailBox);
    console.log("Gender: " + genderInput);
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
    setgenderInput("");
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
    <p id="gender">Gender: </p>
    <select id="genderInput" value={genderInput} onChange={(e) => setgenderInput(e.target.value)}>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
      <option value="Prefer not to Say">Prefer not to Say</option>
    </select>
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
