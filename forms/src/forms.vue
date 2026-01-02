<template>
    <h2 id="title">Forms Application</h2>

<form @submit="submitForm">
    <h4 id="firstNameTag">First Name: </h4>
    <center><input type="text" id="firstName" placeholder="First Name..." v-model="formValues.firstName" required></center>

    <h4 id="lastNameTag">Last Name: </h4>
    <center><input type="text" id="lastName" placeholder="Last Name..." v-model="formValues.lastName" required></center>

    <h4 id="emailTag">Email: </h4>
    <center><input type="text" id="email" placeholder="Email..." v-model="formValues.email" required></center>

    <h4 id="genderTag">Gender: 
    <p id="male">Male</p>
    <center><input type="radio" id="gender" value="male" v-model="formValues.gender" required></center>
    <p id="female">Female</p>
    <center><input type="radio" id="gender" value="female" v-model="formValues.gender" required></center>
    </h4>

    <h4 id="dateOfBirth">Date of Birth:
        <center><input type="date" id="calendarInput" v-model="formValues.calendar" required></center>
    </h4>

    <h4 id="address">Address</h4>
        <center><input type="text" id="addressInput" v-model="formValues.address" placeholder="Address..." required></center><br>
        
        <h4 id="city">City</h4>
        <center><input type="text" id="cityInput" v-model="formValues.city" placeholder="City..." required></center>

        <h4 id="state">State</h4>
        <center><input type="text" id="stateInput" v-model="formValues.state" placeholder="State..." required></center>

        <h4 id="zipCode">Zip Code</h4>
        <center><input type="text" id="zipCodeInput" v-model="formValues.zipCode" placeholder="Zip Code..." required></center>

        <center><button id="submitForm">Submit</button></center>
        <center><button id="clearForm" type="button" @click="clearForm">Clear</button></center>
</form>
</template>

<script>
    export default {
        data() {
            return {
                formValues: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    gender: '',
                    calendar: '',
                    address: '',
                    city: '',
                    state: '',
                    zipCode: '',
                },
            };
        },
        methods: {
            submitForm(event) {
                event.preventDefault();
                console.log('formValues', this.formValues);
            },
            clearForm() {
                this.formValues = {
                    firstName: '',
                    lastname: '',
                    email: '',
                    gender: '',
                    calendar: '',
                    address: '',
                    city: '',
                    state: '',
                    zipCode: '',
                };
            },
        },
    };

</script>

<style scoped>
    
    * {
        font-family:'Courier New', Courier, monospace;
    }

    #title,
    #firstNameTag,
    #lastNameTag,
    #emailTag,
    #genderTag,
    #male,
    #female,
    #dateOfBirth,
    #address,
    #city,
    #state,
    #zipCode {
        text-align: center;
    }

    #title {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    input[type="text"],
    input[type="email"],
    input[type="date"] {
        font-size: 20px;
        width: 50%;
        padding: 5px 10px;
        cursor: pointer;
        display: block;
        margin: 0.5rem auto;
    }
    #addressInput,
    #cityInput,
    #stateInput,
    #zipCodeInput,
    #calendarInput {
        width: 30%;
    }

    #gender {
        text-align: center;
        margin: 0.5rem 0;
    }

    #male,
    #female {
        font-size: 15px;
        margin: 0 10px;
    }

    #submitForm,
    #clearForm {
        font-size: 20px;
        font-weight: bold;
        border: none;
        border-radius: 0.5rem;
        padding: 10px 20px;
        color: white;
        margin: 1rem;
        cursor: pointer;
    }

    #submitForm {
        background-color: rgb(32, 239, 5);
    }

    #clearForm {
        background-color: rgb(239, 5, 5);
    }

</style>
