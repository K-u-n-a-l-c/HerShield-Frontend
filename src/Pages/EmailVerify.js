import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import { Container, Grid, Paper, TextField, Button } from '@mui/material';
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import axios from "axios"

function ChangePass() {

    const Navigate = useNavigate();

    const [ newuser, setNewUser] = useState({
        email:"",
        token:""
    })
	console.log(newuser);

	const val = (e) => {
		const {value, name} = e.target;
		//console.log(value,name);
		setNewUser (()=>{
			return{
				...newuser,
				[name]:value
			}
		})
	}
    const handleChange = async(e) => {
        e.preventDefault();
		const {email,token} = newuser
		if(email&&token){
			await axios.post("http://localhost:8000/api/auth/verifyemail", newuser)
			.then( res => {
                alert(res.data.message)
				Navigate('/LoginForm')
            })
		} else {
			alert("Invalid Input")
		}
    }


return(

    <Containers>
    <meta name="viewport" content ="width=device-width,initial-scale=1.0"/>
    <div class="container" id="container">
    <div class="Fpass">
        <form action="#">
            <h1>Verify Email</h1>
                  
                <input type="text" name ="email" onChange={val} placeholder="Email Address" />
                <input type="text" name="token" onChange={val} placeholder="Enter OTP" />
                <button onClick = { handleChange } >Done</button>
        </form>
    </div>
    </div>
    </Containers>
)
}

const Containers=styled.div`
background: #fff url(images/back.png) repeat center center;
	background-size: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-family: "Montserrat", sans-serif;
	height: 100vh;
	margin: 0;
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');

    * {
        box-sizing: border-box;
    }

h1 {
	font-weight: bold;
	margin: 0;
}

h2 {
	text-align: center;
}

p {
	font-size: 14px;
	font-weight: 100;
	line-height: 20px;
	letter-spacing: 0.5px;
	margin: 20px 0 30px;
}

span {
	font-size: 12px;
}

a {
	color: #333;
	font-size: 14px;
	text-decoration: none;
	margin: 15px 0;
}

button {
		margin: 5px;
		border-radius: 20px;
		border: 1px solid #fff;
		background-color:#f86d69;
		color: #ffffff;
		font-size: 12px;
		font-weight: bold;
		padding: 12px 45px;
		letter-spacing: 1px;
		text-transform: uppercase;
		transition: transform 80ms ease-in;
	}

button:active {
	transform: scale(0.95);
}

button:focus {
	outline: none;
}

button.ghost {
	background-color: transparent;
	border-color: #FFFFFF;
}

form {
	background-color: #FFFFFF;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 50px;
	height: 100%;
	text-align: center;
}

input {
	background-color: #eee;
	border: none;
	padding: 12px 15px;
	margin: 8px 0;
	width: 100%;
}

.container {
	background-color: #fff;
	border-radius: 10px;
  	box-shadow: 0 14px 28px rgba(0,0,0,0.25), 
			0 10px 10px rgba(0,0,0,0.22);
	position: relative;
	overflow: hidden;
	width: 384px;
	max-width: 100%;
	min-height: 480px;
}

.Fpass {
	top: 0;
	height: 100%;
}`

export default ChangePass