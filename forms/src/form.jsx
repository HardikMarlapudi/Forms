import React, {useState} from 'react';
import "./form.css";

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
    <input type="text" id="firstNameBox" value={firstNameBox} onChange={(e) => setFirstNameBox(e.target.value)} required />
    <p id="lastName">Last Name: </p>
    <input type="text" id="lastNameBox" value={lastNameBox} onChange={(e) => setLastNameBox(e.target.value)} required />
    <p id="gender">Gender: </p>
    <select id="genderInput" value={genderInput} onChange={(e) => setgenderInput(e.target.value)} required >
      <option value=""></option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
      <option value="Prefer not to Say">Prefer not to Say</option>
    </select>
    <p id="email">Email: </p>
    <input type="text" id="emailBox" value={emailBox} onChange={(e) => setEmailBox(e.target.value)} required />
    <p id="phoneNumber">Phone Number: </p>
    <input type="text" id="phoneNumberBox" value={phoneNumberBox} onChange={(e) => setphoneNumberBox(e.target.value)} required />
    <p id="address">Address: </p>
    <input type="text" id="addressBox" value={addressBox} onChange={(e) => setAddressBox(e.target.value)} required />
    <p id="city">City: </p>
    <input type="text" id="cityBox" value={cityBox} onChange={(e) => setCityBox(e.target.value)} required />
    <p id="state">State: </p>
    <input type="text" id="stateBox" value={stateBox} onChange={(e) => setStateBox(e.target.value)} required />
    <p id="zipCode">Zip Code: </p>
    <input type="text" id="zipCodeBox" value={zipCodeBox} onChange={(e) => setzipCodeBox(e.target.value)} required />
    <p id="country">Country: </p>
    <input type="text" id="countryBox" value={countryBox} onChange={(e) => setCountryBox(e.target.value)} required />
    <br></br>
    <br></br>
    <button type="submit" id="submitBtn" onSubmit={handleSubmit}>Submit</button>
    <button type="reset" id="resetBtn" onReset={handleReset}>Reset</button>
    </form>
    </>
  );
}

export default App;
