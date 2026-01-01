<template>
    <h2 id="title">Forms Application</h2>
    <pre>{{JSON.stringify(formValues, null, 2)}}</pre>

<form @submit="submitForm" @clear="clearForm">

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
        <center><button id="clearForm">Clear</button></center>
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
                }
            }
        },
        methods: {
            submitForm(event) {
                event.preventDefault();
                console.log('formValues', this.formValues);
            },
        }
    }

</script>

<style scoped>

    pre {
        text-align: center;
        font-family: 'Courier New', Courier, monospace;
        font-size: 15px;
    }

    #title {
        font-size: 1.5rem;
        font-family: 'Courier New', Courier, monospace;
        text-align: center;
    }

    #firstNameTag {
        font-size: 20px;
        font-family: 'Courier New', Courier, monospace;
        text-align: center;
    }
    
    #firstName {
        font-size: 20px;
        font-family: 'Courier New', Courier, monospace;
        width: 50%;
        padding: 5px 10px;
        cursor: pointer;
    }

    #lastNameTag {
        font-size: 20px;
        font-family: 'Courier New', Courier, monospace;
        text-align: center;
    }

    #lastName {
        font-size: 20px;
        font-family: 'Courier New', Courier, monospace;
        width: 50%;
        padding: 5px 10px;
        cursor: pointer;
    }

    #emailTag {
        font-size: 20px;
        font-family: 'Courier New', Courier, monospace;
        text-align: center;
    }

    #email {
        font-size: 20px;
        font-family: 'Courier New', Courier, monospace;
        width: 50%;
        padding: 5px 10px;
        cursor: pointer;
    }

    #genderTag {
        font-size: 20px;
        font-family: 'Courier New', Courier, monospace;
        text-align: center;
    }

    #gender {
        font-size: 20px;
        font-family: 'Courier New', Courier, monospace;
        cursor: pointer;
    }

    #male {
        font-size: 15px;
        font-family: 'Courier New', Courier, monospace;
        text-align: center;
    }

    #female {
        font-size: 15px;
        font-family: 'Courier New', Courier, monospace;
        text-align: center;
    }

    #dateOfBirth {
        text-align: center;
        font-family: 'Courier New', Courier, monospace;
    }

    #calendarInput {
        font-size: 20px;
        font-family: 'Courier New', Courier, monospace;
        width: 30%;
        padding: 5px;
        cursor: pointer;
    }

    #address {
        text-align: center;
        font-family: 'Courier New', Courier, monospace;
    }

    #addressInput {
        font-size: 20px;
        font-family: 'Courier New', Courier, monospace;
        width: 30%;
        padding: 5px;
        cursor: pointer;
    }

    #city {
        text-align: center;
        font-family: 'Courier New', Courier, monospace;
    }

    #cityInput {
        font-size: 20px;
        font-family: 'Courier New', Courier, monospace;
        width: 30%;
        padding: 5px;
        cursor: pointer;
    }

    #state {
        font-family: 'Courier New', Courier, monospace;
        text-align: center;
    }

    #stateInput {
        font-size: 20px;
        font-family: 'Courier New', Courier, monospace;
        width: 30%;
        padding: 5px;
        cursor: pointer;
    }

    #zipCode {
        font-family: 'Courier New', Courier, monospace;
        text-align: center;
    }

    #zipCodeInput {
        font-size: 20px;
        font-family: 'Courier New', Courier, monospace;
        width: 30%;
        padding: 5px;
        cursor: pointer;
    }

    #submitForm {
        font-size: 20px;
        font-family: 'Courier New', Courier, monospace;
        font-weight: bold;
        text-align: center;
        border: none;
        border-radius: 0.5rem;
        padding: 10px 20px;
        background-color:rgb(32, 239, 5);
        color: white;
        margin: 1.5rem;
        cursor: pointer;
    }

    #clearForm {
        font-size: 20px;
        font-family:'Courier New', Courier, monospace;
        font-weight: bold;
        border: none;
        border-radius: 0.5rem;
        padding: 10px 20px;
        background-color: rgb(239, 5, 5);
        color: white;
        cursor: pointer;
    }

</style>
