
function getValues() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zipCode = document.getElementById('zipCode').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Address:", address);
    console.log("City:", city);
    console.log("State:", state);
    console.log("Zip Code:", zipCode);
    console.log("Gender:", gender);
}
